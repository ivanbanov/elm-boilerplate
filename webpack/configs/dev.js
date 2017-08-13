const args = require('yargs').argv;

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SERVER_PORT = args.port || process.env.PORT || 3000;
const watch = args.watch || false;

module.exports = {
  entry: (
    watch
      ? [`webpack-hot-middleware/client?http://localhost:${SERVER_PORT}/`]
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
