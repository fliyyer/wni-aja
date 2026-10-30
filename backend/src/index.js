import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import colyseus from "colyseus";
const { Server, matchMaker, Protocol, getMessageBytes } = colyseus;
import { encode } from "@colyseus/schema";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { GameRoom } from "./rooms/GameRoom.js";

// Helper for UTF-8 byte calculations in binary protocol
function utf8Length(str) {
  let c = 0, length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) length += 1;
    else if (c < 2048) length += 2;
    else if (c < 65536) length += 3;
    else if (c < 2097152) length += 4;
    else if (c < 67108864) length += 5;
    else length += 6;
  }
  return length;
}

function utf8Write(buff, offset, str) {
  buff.writeUInt8(utf8Length(str), offset++);
  buff.write(str, offset);
}

// Compatibility patch for Colyseus client JOIN_ROOM protocol
// Colyseus 0.15 sends handshake without length prefix; modern clients expect encoded handshake length
if (getMessageBytes && Protocol && Protocol.JOIN_ROOM) {
  getMessageBytes[Protocol.JOIN_ROOM] = (reconnectionToken, serializerId, handshake) => {
    const reconnectionTokenLength = utf8Length(reconnectionToken);
    const serializerIdLength = utf8Length(serializerId);
    const handshakeLength = handshake ? handshake.length : 0;

    const lengthBytes = [];
    encode.number(lengthBytes, handshakeLength);

    const totalLength = 1 + (1 + reconnectionTokenLength) + (1 + serializerIdLength) + lengthBytes.length + handshakeLength;
    const buff = Buffer.allocUnsafe(totalLength);
    let offset = 0;

    buff.writeUInt8(Protocol.JOIN_ROOM, offset++);
    utf8Write(buff, offset, reconnectionToken);
    offset += 1 + reconnectionTokenLength;

    utf8Write(buff, offset, serializerId);
    offset += 1 + serializerIdLength;

    for (let b of lengthBytes) {
      buff.writeUInt8(b, offset++);
    }

    if (handshake) {
      for (let i = 0, l = handshake.length; i < l; i++) {
        buff.writeUInt8(handshake[i], offset++);
      }
    }

    return buff;
  };
}

// Compatibility patch for Colyseus client (flattens seat reservation response)
const originalInvokeMethod = matchMaker.controller.invokeMethod.bind(matchMaker.controller);
matchMaker.controller.invokeMethod = async function(method, roomName, clientOptions, authOptions) {
  const response = await originalInvokeMethod(method, roomName, clientOptions, authOptions);
  if (response && response.room && response.sessionId) {
    const roomData = typeof response.room.toJSON === "function" ? response.room.toJSON() : response.room;
    return {
      ...roomData,
      room: roomData,
      sessionId: response.sessionId,
      roomId: roomData.roomId || response.room.roomId,
      processId: roomData.processId || response.room.processId,
      name: roomData.name || response.room.name
    };
  }
  return response;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 2567;
const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "wni-simulator-backend", time: Date.now() });
});

// Vercel analytics dummy endpoint to avoid console syntax error
app.get("/_vercel/insights/script.js", (req, res) => {
  res.type("application/javascript").send("// analytics dummy");
});

// Optionally serve frontend directly if frontend directory exists
const frontendPath = path.resolve(__dirname, "../../frontend");
app.use(express.static(frontendPath));

// Fallback for SPA routing in frontend
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/matchmake") || req.path.startsWith("/colyseus")) {
    return next();
  }
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) next();
  });
});

const server = http.createServer(app);

// WebSocket transport optimized for mobile networks & low-spec VPS
// pingInterval: 10s, pingMaxRetries: 6 gives a ~60s tolerance for brief network stalls
const gameServer = new Server({
  transport: new WebSocketTransport({
    server: server,
    pingInterval: 10000,
    pingMaxRetries: 6
  })
});

// Register the room handler
gameServer.define("game", GameRoom);

// Process crash safety handlers
process.on("unhandledRejection", (reason, promise) => {
  console.error("[Process] Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("[Process] Uncaught Exception:", err);
});

server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 WNI Simulator Server running on port ${PORT}`);
  console.log(`🎮 Game Room: 'game'`);
  console.log(`🌐 Web Client: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
