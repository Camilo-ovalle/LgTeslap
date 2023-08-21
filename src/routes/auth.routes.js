import { Router } from "express";
import {
  loginController,
  registerController,
  logOutController,
  profileController,
} from "../controllers/auth.controller.js";
import { accessToken } from "../middleware/validateToken.js";

const authRouter = Router();

authRouter.post("/login", loginController);

authRouter.post("/register", registerController);

authRouter.post("/logout", logOutController);

authRouter.get("/profile", accessToken, profileController);

export default authRouter;
