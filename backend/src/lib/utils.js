import jwt from "jsonwebtoken"
import { ENV } from "./env.js";

export const generateToken = (userId,res) => {
    const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
        expiresIn: "7d",
    });


    res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,        // REQUIRED for Vercel + Render (HTTPS)
    sameSite: "none",    // REQUIRED for cross‑site cookies
    path: "/",           // ensures cookie is sent on all routes
    });

    return token;
};

//http://localhost
//https://domain.com 