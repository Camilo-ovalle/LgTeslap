import { Router } from "express";
import { indexController } from "../controllers/users.controller.js";
import { pingController } from "../controllers/ping.controller.js";

const router = Router();

router.get("/", indexController);

router.get("/ping", pingController);

export default router;
