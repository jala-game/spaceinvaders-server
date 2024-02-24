import { Server } from "ws";

const io = new Server({
  port: 8080,
});

export { io };
