'use strict';

const co = require('co');
const _ = require('lodash');

module.exports = _.curryRight(co.wrap(function*(insertions, file) {
  let content = file.contents.toString();
  _.forEach(insertions, (insertion, filePath) => {
    let start = insertion.start || `[insert]: # (start:${filePath})`;
    let end = insertion.end || `[insert]: # (end:${filePath})`;
    if (insertion.start && !insertion.end) {
      content = content.replace(insertion.start, `${start}\n${insertion.content}\n${end}`);
    } else if (!insertion.start && insertion.end) {
      content = content.replace(insertion.end, `${start}\n${insertion.content}\n${end}`);
    } else {
      content = `${content.slice(0, content.indexOf(insertion.start))}${insertion.start}\n${insertion.content}\n${content.slice(content.indexOf(insertion.end))}`;
    }
  });
  file.contents = new Buffer(content);
  return file;
}), 2);
