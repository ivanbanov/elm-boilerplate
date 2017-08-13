const args = require('yargs').argv;

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PORT } = require('../server-config');
const watch = args.watch || false;

module.exports = {
  entry: (
    watch
      ? [`webpack-hot-middleware/client?http://localhost:${PORT}/`]
      : []
  ),

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
