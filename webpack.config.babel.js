const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
    },
    devtool: 'eval',
    devServer: {},
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loaders: ['file-loader'],
        },
      ],
    },
  };
};
