var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: 'source-map',
  entry: [
    './js/client.js'
  ],
  output: {
    path: path.join(__dirname, '/src/'),
    filename: 'bundle.js',

  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react',
        include: path.join(__dirname, 'src') },
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },
    ]
  }
}
