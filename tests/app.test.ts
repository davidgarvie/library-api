import { app } from "../src/app";
import request from "supertest";

it("/ping sends a response", async () => {
  await request(app)
    .get("/ping")
    .expect("Content-Type", /text\/html/)
    .expect("Content-Length", "4")
    .expect("pong")
    .expect(200);
});
