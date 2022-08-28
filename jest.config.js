/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: "<rootDir>/tests/utils/globalSetup.ts",
  globalTeardown: "<rootDir>/tests/utils/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/tests/utils/setupFile.ts"],
};
