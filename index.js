'use strict';

const _ = require('lodash');
const through = require('through2');
const DEFAULT_OPTS = {};
const insert = require('./lib/index');
const PluginError = require('gulp-util').PluginError;

module.exports = opts => {
  opts = _.defaults(opts || {}, DEFAULT_OPTS);
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file);
    if (file.isStream()) return callback(new PluginError('gulp-insert-md', `Stream is not supported`));
    insert(file, opts)
      .then(() => callback(null, file))
      .catch(e => {
        console.error(e.message);
        callback(new PluginError('gulp-insert-md', e));
      });
  });
};
