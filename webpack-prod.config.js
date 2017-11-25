require('dotenv').config();
const baseConfiguration = require('./webpack-base.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfiguration, {
  devServer: {
    contentBase: './dist',
    hot: false
  },
});
