'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (config) {
  config = (0, _extends3.default)({}, DEFAULT_CONFIG, config);
  return _through2.default.obj(function (file, encoding, callback) {
    if (file.isNull()) return callback(null, file);
    if (file.isStream()) return callback(new _gulpUtil.PluginError('gulp-insert-md', 'Stream is not supported'));
    (0, _main2.default)(file, config).then(function () {
      return callback(null, file);
    }).catch(function (e) {
      console.error(e.message, e.stack);
      callback(new _gulpUtil.PluginError('gulp-insert-md', e));
    });
  });
};

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _gulpUtil = require('gulp-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_CONFIG = {};

module.exports = exports['default'];