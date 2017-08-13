const args = require('yargs').argv;
const PORT = args.port || process.env.PORT || 3000;

module.exports = {
  PORT
};
