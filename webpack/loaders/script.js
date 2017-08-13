const PATHS = require('../paths');

module.exports = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        extends: `${PATHS.root}/.babelrc`,
      },
    },
  ],
};
