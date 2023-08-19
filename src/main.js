import express from "express";
import usersRoutes from "./routes/users.routes.js";

const app = express();
const port = 3000;

app.listen(port);

app.use(usersRoutes);
