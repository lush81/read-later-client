module.exports = {
  entry: __dirname + "/src/main",
  devtool: 'source-map',
  output: {
      path: __dirname + "/public",
      filename: "main.js",
      publicPath: "/public/"
  },
  module: {
    loaders: [
          
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  }
}
