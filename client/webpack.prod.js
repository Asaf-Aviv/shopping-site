const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    chunkFilename: 'js/[name].[chunkhash:4].js',
    filename: 'js/[name].[chunkhash:4].js',
  },
  optimization: {
    minimizer: [
      new MinifyPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:4].css',
      chunkFilename: 'css/[id].[contenthash:4].css',
    }),
  ],
});
