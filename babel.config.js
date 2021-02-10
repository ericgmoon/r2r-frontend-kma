module.exports = (api) => {
  api.cache(true);
  return {
    // @babel/preset-env is excluded as it causes the builds to fail
    presets: ["babel-preset-expo", "@babel/preset-flow"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
};
