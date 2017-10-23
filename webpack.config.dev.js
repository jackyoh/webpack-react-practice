var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
  entry: ['./src/index.js'],
  devtool: '#inline-source-map',
  output: {
    publicPath: '/public/',
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: loaders,
  },
  devServer: {
    contentBase: 'public',
    noInfo: true,
    hot: true,
    inline: true,
  },
  plugins: [new webpack.NoErrorsPlugin()],
};
