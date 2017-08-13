const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = require('../paths');
const server = require('../server');

module.exports = {
  entry: [
    `webpack-hot-middleware/client?http://localhost:${server.PORT}/`,
  ],

  output: {
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      ENV: '"dev"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
