import { io } from "./config/app";
import { logger } from "../utils/logger";
import type { WebSocket } from "ws";
import { makeEvents } from "./config/events";

io.on("connection", async (socket: WebSocket) => {
  makeEvents(socket);
});
io.on("update", (data) => console.log(data));
io.on("connect_error", (err: any) => {
  logger.error(err);
});

io.on("connect_failed", (err) => logger.error(err));
io.on("disconnect", (err) => logger.error(err));
