import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "localhost:27017");
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
});
