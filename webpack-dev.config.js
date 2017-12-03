const webpack = require('webpack');
require('dotenv').config();
const baseConfiguration = require('./webpack-base.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfiguration, {
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }
        ]
      }]
  }
});
