const HtmlWebpackPlugin = require('html-webpack-plugin');

const elmLoader = require('../loaders/elm');
const scriptLoader = require('../loaders/script');
const styleLoader = require('../loaders/style');
const imageLoader = require('../loaders/image');

const PATHS = require('../paths');

module.exports = {
  entry: [
    `${PATHS.src}/index.js`,
  ],

  output: {
    path: PATHS.dist,
    publicPath: PATHS.public,
  },

  resolve: {
    extensions: ['.js', '.elm'],
    alias: {
      src: PATHS.src,
    },
    modules: [
      `${PATHS.root}/node_modules`,
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
      template: `${PATHS.src}/index.html`,
    }),
  ],
};
