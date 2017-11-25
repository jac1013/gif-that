const webpack = require('webpack');
require('dotenv').config();
const baseConfiguration = require('./webpack-base.config');
const merge = require('webpack-merge');

const development = merge(baseConfiguration)

module.exports = merge(baseConfiguration, {
  entry: [
    'react-hot-loader/patch',
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
