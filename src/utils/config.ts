import dotenv from "dotenv";
import { resolve } from "path";

const path = resolve(__dirname, `../../.env.${process.env.NODE_ENV}`);
dotenv.config({ path });

const IS_TEST = process.env.NODE_ENV === "test";

export const config = {
  databaseName: process.env.DATABASE_NAME || "library",
  IS_TEST,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017",
  useInMemoryDb: IS_TEST,
};
