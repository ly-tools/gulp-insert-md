'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _lodash = require('lodash');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(insertions) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _lodash.forEach)(insertions, function (insertion) {
              try {
                insertion.content = (0, _fs.readFileSync)(insertion.absPath, 'utf-8');
              } catch (e) {
                _logger2.default.warn('Fail to read file ' + insertion.absPath + ', will insert empty');
                insertion.content = '';
              }
            });
            return _context.abrupt('return', insertions);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function (_x) {
    return ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];