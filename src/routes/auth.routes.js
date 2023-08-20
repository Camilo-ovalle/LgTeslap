import { Router } from "express";
import {
  loginController,
  registerController,
  logOutController,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginController);

authRouter.post("/register", registerController);

authRouter.post("/logout", logOutController);

export default authRouter;
