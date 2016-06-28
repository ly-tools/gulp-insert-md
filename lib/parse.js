'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  var content = file.contents.toString();
  var basePath = (0, _path.dirname)(file.path);
  return (content.match(RE_INSERT_G) || []).reduce(function (insertions, str) {
    var rst = str.match(RE_INSERT);
    var command = rst[1];
    var filePath = rst[2];
    var pipes = (rst[3] || '').split('|').filter(function (f) {
      return !!f;
    });
    insertions[filePath] = insertions[filePath] || {
      start: null,
      end: null,
      pipes: [],
      absPath: (0, _path.join)(basePath, filePath)
    };
    insertions[filePath][command] = str;
    insertions[filePath].pipes = insertions[filePath].pipes.concat(pipes);
    return insertions;
  }, {});
};

var _path = require('path');

var RE_INSERT_G = /\[insert\]:\s*#\s*\((\w+):([\.\w-\d\/]+)(?:\|([\w+\-\|]+))?\)/g;
var RE_INSERT = /\[insert\]:\s*#\s*\((\w+):([\.\w-\d\/]+)(?:\|([\w+\-\|]+))?\)/;

module.exports = exports['default'];