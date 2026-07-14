import express from "express";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";



const app = express();

const PORT = ENV.PORT||3000;

app.use(express.json());// this is the middleware we are calling so that we can get access to the fields the user send - req.body

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log("server running on port: " + PORT)
    connectDB()
});