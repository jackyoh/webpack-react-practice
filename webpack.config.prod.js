var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: loaders,
  },
};
