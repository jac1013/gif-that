const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `${APP_DIR}/index.tsx`
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  devtool: 'eval', //We use eval instead of source map because of hot reload.
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/client/index.html',
      to: 'index.html'
    }])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        exclude: `${__dirname}/node_modules`,
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },

    ]
  }
};
