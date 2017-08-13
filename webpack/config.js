const _ = require('lodash');
const webpack = require('webpack');

const defaultsConfigs = require('./configs/defaults');
const {
  ENV,
  ENVS,
} = require('./envs');

const env = ENVS[ENV] ? ENV : ENVS.dev;
const envConfigs = require(`./configs/${env}`);

module.exports = _.mergeWith(
  defaultsConfigs,
  envConfigs,
  (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return [...objValue, ...srcValue];
    }
  }
);
