module.exports = (api) => {
  api.cache(true);
  return {
    // Leaving "@babel/preset-env" out as it causes errors in Expo
    presets: ["babel-preset-expo"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
};
