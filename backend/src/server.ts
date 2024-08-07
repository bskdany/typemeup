import express from "express";
import type { User, Session } from "lucia";
import { profileRouter } from "./routes/profile/profileRouter.js";
import { authRouter } from "./routes/auth/authRouter.js";
import { devMode, validateSession } from "./routes/middleware.js";
import { config } from "./lib/config.js";
import cors from 'cors';
import { url } from "inspector";

console.log("Server running in " + config.env + " environment");
console.log("Backend port: " + config.port_backend);
console.log("Db location: " + config.db_path);

const app = express();
app.use(express.json());

console.log(config.frontend_url)
app.use(cors({
  origin: config.frontend_url,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

if (config.env === "development") {
  app.use(devMode)
}

app.use(validateSession);

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

app.listen(config.port_backend);

console.log("Server running on port " + config.port_backend);

declare global {
  namespace Express {
    interface Locals {
      user: User | null;
      session: Session | null;
    }
  }
}