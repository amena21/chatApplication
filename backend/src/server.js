import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js"; // this app is the REAL app

// 1. JSON parser FIRST
app.use(express.json({ limit: "5mb" }));

// 2. Cookie parser SECOND
app.use(cookieParser());

// 3. CORS THIRD
const allowedOrigins = [
  "http://localhost:5173",
  ENV.CLIENT_URL,
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// 4. Routes FOURTH
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 5. Start server LAST
server.listen(ENV.PORT || 3000, () => {
  console.log("server running");
  connectDB();
});
