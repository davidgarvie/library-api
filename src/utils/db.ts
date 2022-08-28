import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { config } from "./config";

let mongod: MongoMemoryServer;

export async function connect() {
  const { databaseName, useInMemoryDb, mongoURI } = config;
  let uri = mongoURI;
  if (useInMemoryDb) {
    mongod = await MongoMemoryServer.create();
    uri = mongod.getUri();
    process.env.MONGO_URI = `${uri}${databaseName}`;
  }

  const mongooseOpts: ConnectOptions = { dbName: databaseName };
  await mongoose.connect(uri, mongooseOpts);
}

export async function disconnect() {
  await mongoose.connection.close();
  if (config.useInMemoryDb) {
    await mongod.stop();
  }
}
