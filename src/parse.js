import {
  dirname,
  join
} from 'path';
const RE_INSERT_G = /\[insert\]:\s*#\s*\((\w+):([\.\w\d\/]+)(?:\|([\w+\-\|]+))?\)/g;
const RE_INSERT = /\[insert\]:\s*#\s*\((\w+):([\.\w\d\/]+)(?:\|([\w+\-\|]+))?\)/;

export default function(file) {
  let content = file.contents.toString();
  let basePath = dirname(file.path);
  return (content.match(RE_INSERT_G) || []).reduce((insertions, str) => {
    let rst = str.match(RE_INSERT);
    let command = rst[1];
    let filePath = rst[2];
    let pipes = (rst[3] || '').split('|').filter(f => !!f);
    insertions[filePath] = insertions[filePath] || {
      start: null,
      end: null,
      pipes: [],
      absPath: join(basePath, filePath)
    };
    insertions[filePath][command] = str;
    insertions[filePath].pipes = insertions[filePath].pipes.concat(pipes);
    return insertions;
  }, {});
}
