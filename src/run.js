import { pass, fail } from "create-jest-runner";
import stylelint from "stylelint";
import getCliOptions from "./utils/getCliOptions.js";

export default ({ testPath, config, extraOptions }) => {
  const start = new Date();

  const defaultConfig = {
    files: testPath,
    formatter: "string",
    fix: extraOptions.fix,
  };
  const { cliOptions = {} } = getCliOptions(config);

  return stylelint
    .lint(Object.assign({}, cliOptions, defaultConfig))
    .then((data) => {
      if (data.errored) {
        return fail({
          start,
          end: new Date(),
          test: {
            path: testPath,
            errorMessage: data.output,
          },
        });
      }

      return pass({
        start,
        end: new Date(),
        test: { path: testPath },
      });
    })
    .catch((error) => {
      throw error;
    });
};
