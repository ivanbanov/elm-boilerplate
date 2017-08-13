const { isEnv } = require('../envs');
const PATHS = require('../paths').PATHS;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const loaders = {
  style: {
    loader: 'style-loader',
  },

  css: {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      modules: true,
      localIdentName: '[local]-[hash:base64:3]',
      minimize: isEnv.prod,
    },
  },

  postcss: {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer],
    },
  },

  elmcss: {
    loader: 'elm-css-webpack-loader',
    options: {
      cache: true
    },
  },
};

const defaultLoaders = [
  loaders.css,
  loaders.postcss,
  loaders.elmcss
];

module.exports = {
  test: /Stylesheets\.elm$/,
  use: (
    isEnv.prod
    ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: defaultLoaders,
    })
    : [
      loaders.style,
      ...defaultLoaders,
    ]
  ),
};
