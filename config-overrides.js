module.exports = function override(config, env) {
  console.log("override");
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/,
      enforce: "pre",
      use: ["@svgr/webpack", "url-loader"],
    },
  ];
  return config;
};
