const args = require('yargs').argv;

const paths = require('../paths');
const watch = args.watch || false;

module.exports = {
  test: /\.elm$/,

  exclude: [
    /elm-stuff/,
    /node_modules/,
    /webpack/,
    /Stylesheets\.elm/,
  ],

  use: [
    'elm-hot-loader',
    {
      loader: 'elm-assets-loader',
      options: {
        module: 'Assets',
        tagger: 'AssetPath'
      }
    },
    {
      loader: 'elm-webpack-loader',
      options: {
        pathToMake: `${paths.root}/node_modules/elm/binwrappers/elm-make`,
        cwd: paths.root,
        forceWatch: watch,
        debug: true,
        warn: true,
        verbose: true,
      },
    },
  ],
};
