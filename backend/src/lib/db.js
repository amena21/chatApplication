import mongoose from "mongoose";
import { ENV } from "./env.js"; 
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(ENV.MONGO_URI)
         console.log("MONGODB CONNECTED:", conn.connection.host) 
    }catch (error){
        console.error("Error connecting to MONGODB:", error)
        process.exit(1);// status 1 means failed and 0 means success 
    }
};