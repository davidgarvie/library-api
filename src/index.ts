import express from "express";
import { logger } from "./logger";
import morgan from "morgan";

const app = express();

const PORT = 8080;

app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  logger(`App listening on ${PORT}`);
});
