const normalizeConfig = (config) => {
  return Object.assign({}, config, {
    cliOptions: config.cliOptions || {},
  });
};

export default normalizeConfig;
