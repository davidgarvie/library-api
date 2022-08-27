import express from "express";
import morgan from "morgan";
export const app = express();

app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  res.send("pong");
});
