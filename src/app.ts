import { connect, disconnect } from "./utils/db";
import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import { bookRouter } from "./books/router";
import { config } from "./utils/config";
import { logger } from "./utils/logger";
import mongoose from "mongoose";
import morgan from "morgan";

export const app = express();
app.use(bodyParser.json());
let hasDbConnection = config.IS_TEST;

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
  connect()
    .then(() => {
      hasDbConnection = true;
      logger("Successfully connected to database!");
    })
    .catch(() => {
      logger("Unable to connect to database!");
      process.exit(1);
    });

  mongoose.connection.on("disconnected", () => {
    hasDbConnection = false;
    logger(`Lost connection to database`);
  });
}

app.use((req, res, next) => {
  if (hasDbConnection) {
    next();
  } else {
    res.send(502);
  }
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(bookRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger(err);
  res.send(500);
};

app.use(errorHandler);

["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) =>
  process.on(signal, async () => {
    await disconnect();
    process.exit();
  })
);
