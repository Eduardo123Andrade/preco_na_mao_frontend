module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./source"],
        alias: {
          authentication: "./source/authentication",
          core: "./source/core",
          home: "./source/home"
        }
      }
    ],
  ]
};
