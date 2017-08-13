const args = require('yargs').argv;

const express = require('express');
const PORT = args.port || process.env.PORT || 3000;
const paths = require('./paths');
const app = express();

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./config');
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
  color: true,
  path: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  contentBase: paths.src,
  stats: 'minimal',
  overlay: true,
});

const distIndexFile = `${paths.dist}/index.html`;

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(distIndexFile));
  res.end();
});

app.listen(PORT, '0.0.0.0', (err) => {
  console.info(`🌎  Listening on port ${PORT}`);
});

module.exports = {
  PORT
};
