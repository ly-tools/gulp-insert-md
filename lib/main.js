'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _pipes = require('./pipes');

var _pipes2 = _interopRequireDefault(_pipes);

var _getContent = require('./getContent');

var _getContent2 = _interopRequireDefault(_getContent);

var _insert = require('./insert');

var _insert2 = _interopRequireDefault(_insert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file, config) {
    var insertions;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _parse2.default)(file);

          case 2:
            insertions = _context.sent;
            _context.next = 5;
            return (0, _getContent2.default)(insertions);

          case 5:
            insertions = _context.sent;
            _context.next = 8;
            return (0, _pipes2.default)(insertions, config);

          case 8:
            insertions = _context.sent;
            _context.next = 11;
            return (0, _insert2.default)(insertions, file);

          case 11:
            return _context.abrupt('return', _context.sent);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function (_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];