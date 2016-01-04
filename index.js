'use strict';

const _ = require('lodash');
const through = require('through2');
const DEFAULT_OPTS = {};
const insert = require('./lib/index');
const logger = require('./lib/logger');

module.exports = opts => {
  opts = _.defaults(opts || {}, DEFAULT_OPTS);
  return through.obj((file, encoding, callback) => {
    insert(file, opts)
      .catch(e => logger.error(`${e.message}`))
      .then(() => callback(null, file));
  });
};
