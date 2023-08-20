import { Router } from "express";
import {
  deleteUserController,
  usersListController,
} from "../controllers/users.controller.js";
import { pingController } from "../controllers/ping.controller.js";

const userRouter = Router();

userRouter.get("/users", usersListController);

userRouter.delete("/users", deleteUserController);

userRouter.get("/ping", pingController);

export default userRouter;
