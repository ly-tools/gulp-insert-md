'use strict';

const co = require('co');
const _ = require('lodash');
const run = _.curryRight((content, task) => new Promise(resolve => task(content, resolve)));

const getRstContent = co.wrap(function*(insertion, config) {
  let pipes = insertion.pipes;
  let chain = Promise.resolve(insertion.content);
  pipes.forEach(task => {
    if (typeof config[task] === 'function') {
      chain = chain.then(run(config[task]));
    }
  });
  return chain;
});

module.exports = _.curryRight(co.wrap(function*(insertions, config) {
  let tasks = [];
  _.forEach(insertions, insertion => {
    tasks.push(getRstContent(insertion, config).then(content => insertion.content = _.trim(content)));
  });
  yield tasks;
  return insertions;
}), 2);
