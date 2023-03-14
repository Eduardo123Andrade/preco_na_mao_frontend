module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./source"],
        alias: {
          core: "./source/core",
          authentication: "./source/authentication"
        }
      }
    ],
  ]
};
