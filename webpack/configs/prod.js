const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = require('../paths');
const defaults = require('./defaults');

module.exports = {
  output: {
    filename: 'bundle-[hash].js',
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: '"dev"',
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
    }),
  ],
};
