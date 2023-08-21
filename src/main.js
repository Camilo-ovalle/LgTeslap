import express from "express";
import cors from "cors";
import morgan from "morgan";
import parser from "cookie-parser";
import { APP_PORT } from "./config.js";
import usersRoutes from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.listen(APP_PORT);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(parser());

app.use("/api", usersRoutes);
app.use("/api", authRouter);
