import { cosmiconfigSync } from "cosmiconfig";
import normalizeConfig from "./normalizeConfig.js";

const explorerSync = cosmiconfigSync("jest-runner-stylelint");

const getCliOptions = ({ rootDir }) => {
  const result = explorerSync.search(rootDir);
  const config = result === null ? {} : result.config;

  return normalizeConfig(config);
};

export default getCliOptions;
