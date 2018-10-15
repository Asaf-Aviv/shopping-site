const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://[::1]:5000/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:4].css',
      chunkFilename: 'css/[id].[contenthash:4].css',
    }),
  ],
});
