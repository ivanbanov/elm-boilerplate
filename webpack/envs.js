const args = require('yargs').argv;

const ENVS = {
  dev: 'dev',
  staging: 'staging',
  prod: 'prod',
};
const ENV = args.env || process.env.NODE_ENV || ENVS.dev;
const PORT = args.port || process.env.PORT || 3000;

/*
 * Generate constants and validation for each enviroment
 *
 * e.g.
 *
 * isEnv
 * set NODE_ENV=prod or --env=prod
 * isEnv.production -> true
 *
 * ifEnv
 * set NODE_ENV=prod or --env=prod
 * ifEnv.production(cb) -> runs cb
 * isEnv.development(cb) -> do not run cb
 */
let isEnv = {};
let ifEnv = {};

Object.keys(ENVS).forEach(env => {
  isEnv[env] = (ENVS[env] === ENV);

  ifEnv[env] = (cb) => isEnv[env] ? cb() : null;
});

module.exports = {
  ENV,
  ENVS,
  isEnv,
  ifEnv,
  PORT,
};
