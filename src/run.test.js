import path from "path";
import run from "./run";

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value, serialize) => {
    delete value.perfStats;
    delete value.testFilePath;
    value.testResults.forEach((result) => {
      delete result.duration;
    });
    return serialize(value);
  },
  test: (value) =>
    value && value.perfStats && value.testFilePath && value.testResults,
});

describe("jest-runner-stylelint", () => {
  describe("failing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(import.meta.dirname, "__fixtures__", "bad.css"),
        config: {},
        globalConfig: {},
        extraOptions: {},
      }).then((result) => expect(result).toMatchSnapshot()));
  });

  describe("passing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(import.meta.dirname, "__fixtures__", "good.css"),
        config: {},
        globalConfig: {},
        extraOptions: {},
      }).then((result) => expect(result).toMatchSnapshot()));
  });
});
