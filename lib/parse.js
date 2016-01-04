'use strict';

const co = require('co');
const RE_INSERT_G = /\[insert\]:\s*#\s*\((\w+):([\.\w\d\/]+)(?:\|([\w+\-\|]+))?\)/g;
const RE_INSERT = /\[insert\]:\s*#\s*\((\w+):([\.\w\d\/]+)(?:\|([\w+\-\|]+))?\)/;
const path = require('path');

module.exports = co.wrap(function*(file) {
  let content = file.contents.toString();
  let basePath = path.dirname(file.path);
  return (content.match(RE_INSERT_G) || []).reduce((insertions, str) => {
    let rst = str.match(RE_INSERT);
    let command = rst[1];
    let filePath = rst[2];
    let pipes = (rst[3] || '').split('|').filter(f => !!f);
    insertions[filePath] = insertions[filePath] || {
      start: null,
      end: null,
      pipes: [],
      absPath: path.join(basePath, filePath)
    };
    insertions[filePath][command] = str;
    insertions[filePath].pipes = insertions[filePath].pipes.concat(pipes);
    return insertions;
  }, {});
});
