import express from "express";
import { Server } from "socket.io";
import { makeEvents } from "./events";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server);
makeEvents(io);

export { server };
