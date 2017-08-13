const { isEnv } = require('../envs');
const PATHS = require('../paths');

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
        pathToMake: `${PATHS.root}/node_modules/elm/binwrappers/elm-make`,
        cwd: PATHS.root,
        forceWatch: isEnv.dev,
        debug: true,
        warn: true,
        verbose: true,
      },
    },
  ],
};
