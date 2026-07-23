import express from "express";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import { app, server } from "./lib/socket.js";


const PORT = ENV.PORT||3000;

app.use(express.json({limit:"5mb"}));// this is the middleware we are calling so that we can get access to the fields the user send - req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log("server running on port: " + PORT);
    connectDB();
});