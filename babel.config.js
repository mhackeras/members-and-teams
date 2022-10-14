module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["."],
          alias: {
            assets: "./assets",
            components: "./src/components",
            services: "./src/services/",
            screens: "./src/screens/",
            res: "./src/res",
          },
        },
      ],
    ],
  };
};
