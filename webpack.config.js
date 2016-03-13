var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/client.js'
  ],

  output: {
    path: path.join(__dirname, '/src'),
    filename: 'bundle.js',

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'src')},
      { test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
      { test: /\.css$/,
        loader: 'style!css' }
    ]
  }
}
