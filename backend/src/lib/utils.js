import jwt from "jsonwebtoken"
import { ENV } from "./env.js";

export const generateToken = (userId,res) => {
    const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
        expiresIn: "7d",
    }); 

    //production
    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, //MS
        httpOnly: true, // prevent XSS attacks: cross-site scripting
        secure: true, // REQUIRED for Vercel + Render (HTTPS)
        sameSite: "none",// REQUIRED for cross-site cookies
        path: "/",// ensures cookie is sent everywhere

    });
    
    return token; 
};

//http://localhost
//https://domain.com 