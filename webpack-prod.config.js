require('dotenv').config();
const baseConfiguration = require('./webpack-base.config');
const merge = require('webpack-merge');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
});


module.exports = merge(baseConfiguration, {
  devServer: {
    contentBase: './dist',
    hot: false,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ]
});
