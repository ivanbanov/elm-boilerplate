const HtmlWebpackPlugin = require('html-webpack-plugin');

const elmLoader = require('../loaders/elm');
const scriptLoader = require('../loaders/script');
const styleLoader = require('../loaders/style');
const imageLoader = require('../loaders/image');

const paths = require('../paths');

module.exports = {
  entry: [
    `${paths.src}/index.js`,
  ],

  output: {
    path: paths.dist,
    publicPath: paths.public,
  },

  resolve: {
    extensions: ['.js', '.elm'],
    alias: {
      src: paths.src,
    },
    modules: [
      `${paths.root}/node_modules`,
    ],
  },

  module: {
    noParse: [/.elm$/],

    rules: [
      elmLoader,
      scriptLoader,
      styleLoader,
      imageLoader,
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
  ],
};
