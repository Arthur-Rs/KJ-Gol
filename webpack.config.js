module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "script.js",
    path: __dirname + "/public",
  },
  devServer: {
    contentBase: __dirname + "/public",
    host: "192.168.1.3",
    port: "5500",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
