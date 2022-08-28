import { connect } from "../../src/utils/db";
import mongoose from "mongoose";

export default async function globalSetup() {
  await connect();
  await mongoose.disconnect();
}
