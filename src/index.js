import { createJestRunner } from "create-jest-runner";
import configOverrides from "./configOverrides.js";

export default createJestRunner(import.meta.resolve("./run.js"), {
  getExtraOptions: () => ({ fix: configOverrides.getFix() }),
});
