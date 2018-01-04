const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  devServer: {
    contentBase: 'public/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: loaders,
  },
};
