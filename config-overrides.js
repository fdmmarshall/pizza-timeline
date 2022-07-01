module.exports = function override(config, env) {
  console.log("override");
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ];
  return config;
};
