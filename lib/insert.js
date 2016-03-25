'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(insertions, file) {
    var content;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            content = file.contents.toString();

            (0, _lodash.forEach)(insertions, function (insertion, filePath) {
              var start = insertion.start || '[insert]: # (start:' + filePath + ')';
              var end = insertion.end || '[insert]: # (end:' + filePath + ')';
              if (insertion.start && !insertion.end) {
                content = content.replace(insertion.start, start + '\n' + insertion.content + '\n' + end);
              } else if (!insertion.start && insertion.end) {
                content = content.replace(insertion.end, start + '\n' + insertion.content + '\n' + end);
              } else {
                content = '' + content.slice(0, content.indexOf(insertion.start)) + insertion.start + '\n' + insertion.content + '\n' + content.slice(content.indexOf(insertion.end));
              }
            });
            file.contents = new Buffer(content);
            return _context.abrupt('return', file);

          case 4:
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