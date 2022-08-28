import { disconnect } from "../../src/utils/db";

export default async function globalTeardown() {
  await disconnect();
}
