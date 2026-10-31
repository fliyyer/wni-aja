import colyseus from "colyseus";
const { Room } = colyseus;
import { GameRoomState, Player } from "../schema/GameState.js";
import { createGame, stepAction } from "../engine.js";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // No easily confused characters like 0/O, 1/I

function generateRoomCode(length = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return result;
}

export class GameRoom extends Room {
  maxClients = 8;

  onCreate(options) {
    this.setSeatReservationTime(120); // 120 seconds seat reservation window
    const roomCode = options.roomCode || generateRoomCode();
    this.roomId = roomCode;

    this.setState(new GameRoomState({
      code: roomCode,
      settings: options.settings || {}
    }));

    this.seq = 1;
    this.gameId = 1;
    this.chatHistory = [];
    this.gameState = null;
    this.turnTimer = null;

    // Periodic Heartbeat (every 2.5s) to guarantee clients stay in sync and detect desync
    this.clock.setInterval(() => {
      if (this.gameState) {
        this.broadcast("heartbeat", {
          seq: this.seq,
          turn: this.gameState.currentPlayer,
          round: this.gameState.round,
          phase: this.gameState.phase,
          deadline: this.state.deadline,
          serverTime: Date.now()
        });
      }
    }, 2500);

    // Latency Ping / Pong
    this.onMessage("ping", (client, clientTime) => {
      client.send("pong", clientTime);
    });

    // Handshake
    this.onMessage("hello", (client) => {
      client.send("welcome", {
        playerId: client.sessionId,
        serverTime: Date.now(),
        chat: this.chatHistory
      });

      if (this.gameState) {
        client.send("update", {
          seq: this.seq++,
          game: this.gameId,
          state: this.gameState,
          events: []
        });
      }
    });

    // Profile update (name, pawn)
    this.onMessage("profile", (client, message) => {
      const player = this.state.players.get(client.sessionId);
      if (player && message) {
        if (message.name) player.name = String(message.name).trim().slice(0, 20);
        if (message.pawn) player.pawn = String(message.pawn);
      }
    });

    // Rule settings update from host
    this.onMessage("settings", (client, message) => {
      if (client.sessionId !== this.state.hostId) return;
      if (!message || typeof message !== "object") return;

      if (message.startingCash !== undefined) this.state.settings.startingCash = Number(message.startingCash);
      if (message.mode !== undefined) this.state.settings.mode = String(message.mode);
      if (message.maxRounds !== undefined) this.state.settings.maxRounds = Number(message.maxRounds);
      if (message.maxPlayers !== undefined) {
        this.state.settings.maxPlayers = Number(message.maxPlayers);
        this.maxClients = Number(message.maxPlayers);
      }
    });

    // Kick player (host only)
    this.onMessage("kick", (client, message) => {
      if (client.sessionId !== this.state.hostId) return;
      if (!message || !message.playerId) return;

      const target = this.clients.find(c => c.sessionId === message.playerId);
      if (target) {
        target.send("kicked");
        target.leave();
      }
    });

    // Host starts the game
    this.onMessage("start", (client) => {
      if (client.sessionId !== this.state.hostId) return;
      if (this.state.players.size < 2) {
        client.send("error", { message: "Minimal butuh 2 pemain untuk mulai!" });
        return;
      }

      this.state.status = "game";

      const playersList = Array.from(this.state.players.values()).map(p => ({
        id: p.id,
        name: p.name,
        pawn: p.pawn
      }));

      try {
        this.gameState = createGame({
          seed: `${this.roomId}-${Date.now()}`,
          players: playersList,
          settings: {
            startingCash: this.state.settings.startingCash,
            mode: this.state.settings.mode,
            maxRounds: this.state.settings.maxRounds
          }
        });

        this.gameId++;
        this.broadcast("update", {
          seq: this.seq++,
          game: this.gameId,
          state: this.gameState,
          events: []
        });
        this.resetTurnTimer();
      } catch (err) {
        console.error("Gagal memulai game:", err);
        client.send("error", { message: err.message || "Gagal memulai game" });
      }
    });

    // Player action
    this.onMessage("action", (client, message) => {
      if (!this.gameState) return;
      if (!message || !message.action) return;

      try {
        const result = stepAction(this.gameState, client.sessionId, message.action);
        if (result.error) {
          client.send("error", { message: result.error });
          return;
        }

        this.gameState = result.state;
        const hasDice = result.events.some(e => e.type === "DICE");
        const validLevels = ["cupu", "biasa", "perfect"];
        const diceLevel = (message && validLevels.includes(message.level)) ? message.level : "biasa";
        const throwData = (message.level || hasDice) ? { level: diceLevel } : undefined;

        this.broadcast("update", {
          seq: this.seq++,
          game: this.gameId,
          state: this.gameState,
          events: result.events,
          throw: throwData
        });
        this.resetTurnTimer();
      } catch (err) {
        console.error("Error executing action:", err);
        client.send("error", { message: err.message });
      }
    });

    // In-game Chat & Emotes
    this.onMessage("chat", (client, message) => {
      const player = this.state.players.get(client.sessionId);
      const chatItem = {
        id: this.chatHistory.length + 1,
        from: client.sessionId,
        name: player ? player.name : "Warga",
        pawn: player ? player.pawn : "emak",
        text: message.text || "",
        time: Date.now()
      };
      if (message.emote) chatItem.emote = message.emote;
      if (message.sticker) chatItem.sticker = message.sticker;

      this.chatHistory.push(chatItem);
      if (this.chatHistory.length > 50) this.chatHistory.shift();

      this.broadcast("chat", chatItem);
    });

    console.log(`[GameRoom] Room created: ${this.roomId}`);
  }

  onJoin(client, options) {
    console.log(`[GameRoom] Client joined: ${client.sessionId} in room ${this.roomId}`);

    if (!this.state.hostId) {
      this.state.hostId = client.sessionId;
    }

    const existingPawns = Array.from(this.state.players.values()).map(p => p.pawn);
    const availablePawns = ["emak", "ojol", "satpam", "bocil", "pejabat", "ustadz", "influencer", "abg"];
    let chosenPawn = options.pawn;
    if (!chosenPawn || existingPawns.includes(chosenPawn)) {
      chosenPawn = availablePawns.find(p => !existingPawns.includes(p)) || "emak";
    }

    this.state.players.set(client.sessionId, new Player({
      id: client.sessionId,
      name: options.name || `Warga ${this.state.players.size + 1}`,
      pawn: chosenPawn,
      connected: true
    }));

    client.send("welcome", {
      playerId: client.sessionId,
      serverTime: Date.now(),
      chat: this.chatHistory
    });

    if (this.gameState) {
      client.send("update", {
        seq: this.seq++,
        game: this.gameId,
        state: this.gameState,
        events: []
      });
    }
  }

  async onLeave(client, consented) {
    console.log(`[GameRoom] Client left: ${client.sessionId}, consented: ${consented}`);
    const player = this.state.players.get(client.sessionId);

    if (this.state.status === "lobby") {
      if (consented) {
        this.state.players.delete(client.sessionId);
        if (this.state.hostId === client.sessionId) {
          const remaining = Array.from(this.state.players.keys());
          this.state.hostId = remaining.length > 0 ? remaining[0] : "";
        }
      } else {
        // Pemain terputus tidak sengaja di lobi: beri jeda rekoneksi 30 detik
        if (player) player.connected = false;
        try {
          await this.allowReconnection(client, 30);
          if (player) player.connected = true;
          return;
        } catch {
          this.state.players.delete(client.sessionId);
          if (this.state.hostId === client.sessionId) {
            const remaining = Array.from(this.state.players.keys());
            this.state.hostId = remaining.length > 0 ? remaining[0] : "";
          }
        }
      }
    } else {
      // In game: mark as disconnected and allow reconnection window
      if (player) player.connected = false;
      if (this.gameState && this.gameState.currentPlayer === client.sessionId) {
        this.resetTurnTimer();
      }
      try {
        if (!consented) {
          await this.allowReconnection(client, 120); // 120 seconds reconnection window
          if (player) player.connected = true;
          return;
        }
      } catch {
        // Reconnection timed out or abandoned
      }
    }
  }

  resetTurnTimer() {
    if (this.turnTimer) {
      this.turnTimer.clear();
      this.turnTimer = null;
    }
    if (!this.gameState || this.gameState.phase === "game_over") {
      this.state.deadline = 0;
      return;
    }

    const currentPlayer = this.gameState.currentPlayer;
    const playerRecord = this.state.players.get(currentPlayer);
    const isDisconnected = playerRecord && playerRecord.connected === false;

    // 8 detik jika pemain terputus / offline; 35 detik jika online
    const TURN_DURATION_MS = isDisconnected ? 8000 : 35000;
    this.state.deadline = Date.now() + TURN_DURATION_MS;

    this.turnTimer = this.clock.setTimeout(() => {
      this.handleTurnTimeout();
    }, TURN_DURATION_MS);
  }

  handleTurnTimeout() {
    if (!this.gameState || this.gameState.phase === "game_over") return;
    const timedOutPlayer = this.gameState.currentPlayer;
    console.log(`[GameRoom] Turn timeout for player ${timedOutPlayer} in phase ${this.gameState.phase}`);

    try {
      const result = stepAction(this.gameState, timedOutPlayer, { type: "TIMEOUT" });
      if (!result.error) {
        this.gameState = result.state;
        const hasDice = result.events.some(e => e.type === "DICE");
        const throwData = hasDice ? { level: "biasa" } : undefined;

        this.broadcast("update", {
          seq: this.seq++,
          game: this.gameId,
          state: this.gameState,
          events: result.events,
          throw: throwData
        });
        this.resetTurnTimer();
      } else {
        console.warn(`[GameRoom] Timeout step error for ${timedOutPlayer}:`, result.error);
        this.turnTimer = this.clock.setTimeout(() => this.resetTurnTimer(), 3000);
      }
    } catch (err) {
      console.error("[GameRoom] Exception during turn timeout handling:", err);
      this.turnTimer = this.clock.setTimeout(() => this.resetTurnTimer(), 3000);
    }
  }

  onDispose() {
    if (this.turnTimer) {
      this.turnTimer.clear();
      this.turnTimer = null;
    }
    console.log(`[GameRoom] Room disposed: ${this.roomId}`);
  }
}

