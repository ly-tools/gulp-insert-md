import {
  curryRight
} from 'lodash';
const run = curryRight((content, task) => new Promise(resolve => task(content, resolve)));

async function getRstContent(insertion, config) {
  let tasks = insertion.pipes;
  let chain = Promise.resolve(insertion.content);
  tasks.forEach(task => {
    if (typeof config[task] === 'function') {
      chain = chain.then(run(config[task]));
    }
  });
  return chain;
}

export default async function(insertions, config) {
  await Promise.all(Object.keys(insertions).map(key => getRstContent(insertions[key], config).then(content => {
    insertions[key].content = content.trim();
  })));
  return insertions;
}
