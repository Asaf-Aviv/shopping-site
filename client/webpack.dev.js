const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    contentBase: '/dist',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://[::1]:5000/',
      },
      '/static': {
        target: 'http://[::1]:5000/',
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
});
