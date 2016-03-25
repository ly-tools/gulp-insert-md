'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var getRstContent = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(insertion, config) {
    var tasks, chain;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tasks = insertion.pipes;
            chain = _promise2.default.resolve(insertion.content);

            tasks.forEach(function (task) {
              if (typeof config[task] === 'function') {
                chain = chain.then(run(config[task]));
              }
            });
            return _context.abrupt('return', chain);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function getRstContent(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var run = (0, _lodash.curryRight)(function (content, task) {
  return new _promise2.default(function (resolve) {
    return task(content, resolve);
  });
});

exports.default = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(insertions, config) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _promise2.default.all((0, _keys2.default)(insertions).map(function (key) {
              return getRstContent(insertions[key], config).then(function (content) {
                insertions[key].content = content.trim();
              });
            }));

          case 2:
            return _context2.abrupt('return', insertions);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return function (_x3, _x4) {
    return ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];