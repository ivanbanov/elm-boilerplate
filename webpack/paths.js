const path = require('path');

const ROOT_PATH = path.join(__dirname, '/..');

module.exports = {
  public: '/',
  root: ROOT_PATH,
  src: `${ROOT_PATH}/src`,
  dist: `${ROOT_PATH}/dist`,
  webpack: __dirname,
};
