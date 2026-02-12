import "dotenv/config"
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import { registerSocketHandlers } from "./sockets/socket.js";

const PORT = process.env.PORT || 5000;

connectDB();



const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

registerSocketHandlers(io);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});