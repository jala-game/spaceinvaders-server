import type { WebSocket } from "ws";
import { logger } from "../../utils/logger";
import { User } from "../../models/user";
import { uid } from "uid";

const users: Array<User> = [];

export const makeEvents = (server: WebSocket) => {
  const user: User = new User({
    id: uid(),
  });

  logger.debug("New socketId: " + user.id);
  users.push(user);

  server.on("test", async () => {
    console.log("aaaaaaaaaaaaa");
  });

  server.on("ReceiveAllMessages", async (data: any) => {});

  server.on("SendMessage", async (data: any) => {});
};
