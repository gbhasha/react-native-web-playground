const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    app: './index.web.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    compress: false
  },
  plugins: [
    // new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
