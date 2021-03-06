module.exports = (api) => {
  api.cache(true);
  return {
    // Leaving "@babel/preset-env" out as it causes errors in Expo
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-transform-react-jsx-source",
      "transform-inline-environment-variables",
      "macros",
      // Leaving "@babel/plugin-proposal-class-properties" out as it causes errors in Expo
      [
        "module-resolver",
        {
          extensions: [".js", "jsx"],
          alias: {
            "@r2r/assets": "./src/assets",
            "@r2r/common": "./src/components/common",
            "@r2r/composites": "./src/components/composites",
            "@r2r/scenes": "./src/scenes",
          },
        },
      ],
    ],
  };
};
