import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

import { ENV } from "./env.js";

const isDev = process.env.NODE_ENV === "development";

let aj;

if (isDev) {
  // Disable Arcjet locally
  aj = (req, res, next) => next();
} else {
  // Enable Arcjet in production
  aj = arcjet({
    key: ENV.ARCJET_KEY,
    rules: [
      shield({ mode: "LIVE" }),
      detectBot({
        mode: "LIVE",
        allow: ["CATEGORY:SEARCH_ENGINE"],
      }),
      slidingWindow({
        mode: "LIVE",
        max: 100,
        interval: 60,
      }),
    ],
  });
}


export default aj;


