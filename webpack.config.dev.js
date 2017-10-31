var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
  devtool: '#inline-source-map',
  entry: ['./src/index.js'],
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: loaders,
  },
};
