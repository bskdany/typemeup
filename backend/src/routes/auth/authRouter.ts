import express from "express";
import { loginRoute } from "./login.js";
import { signupRoute } from "./signup.js";
import { logoutRoute } from "./logout.js";
import { githubLoginCallbackRoute, githubLoginRoute } from "./github.js";

export const authRouter = express.Router();

authRouter.post("/login", loginRoute);
authRouter.post("/signup", signupRoute);
authRouter.post("/logout", logoutRoute);

authRouter.get("/github/login", githubLoginRoute);
authRouter.get("/github/login/callback", githubLoginCallbackRoute);
