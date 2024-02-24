import type { Server, Socket } from "socket.io";

export const makeEvents = (server: Server) => {
  server.on("connection", async (socket: Socket) => {
    socket.on("JoinGroup", async (data: any) => {});

    socket.on("ReceiveAllMessages", async (data: any) => {});

    socket.on("SendMessage", async (data: any) => {});
  });
};
