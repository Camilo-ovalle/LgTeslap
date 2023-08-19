import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";

const app = express();
const port = 3000;

app.listen(port);
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hola mundo");
});

app.use(usersRoutes);
