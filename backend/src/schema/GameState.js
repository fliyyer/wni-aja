import { Schema, defineTypes, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
  constructor(options = {}) {
    super();
    this.id = options.id || "";
    this.name = options.name || "Pemain";
    this.pawn = options.pawn || "emak";
    this.connected = options.connected !== undefined ? options.connected : true;
  }
}

defineTypes(Player, {
  id: "string",
  name: "string",
  pawn: "string",
  connected: "boolean"
});

export class RoomSettings extends Schema {
  constructor(settings = {}) {
    super();
    this.startingCash = settings.startingCash || 10000000;
    this.mode = settings.mode || "survival";
    this.maxRounds = settings.maxRounds || 15;
    this.maxPlayers = settings.maxPlayers || 6;
  }
}

defineTypes(RoomSettings, {
  startingCash: "number",
  mode: "string",
  maxRounds: "number",
  maxPlayers: "number"
});

export class GameRoomState extends Schema {
  constructor(options = {}) {
    super();
    this.code = options.code || "";
    this.status = "lobby";
    this.hostId = options.hostId || "";
    this.deadline = 0;
    this.settings = new RoomSettings(options.settings || {});
    this.players = new MapSchema();
  }
}

defineTypes(GameRoomState, {
  code: "string",
  status: "string",
  hostId: "string",
  deadline: "number",
  settings: RoomSettings,
  players: { map: Player }
});

