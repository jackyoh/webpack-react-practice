const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: './src/index.js',
  context: path.resolve('src'),
  output: {
    publicPath: '/public/',
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: loaders,
  },
};
