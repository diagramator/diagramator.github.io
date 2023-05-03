const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/docs",
    publicPath: "/"
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlPlugin({
    title: 'Hello World app', template: "./src/index.html"
  })]
};
