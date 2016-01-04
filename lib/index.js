'use strict';

const co = require('co');
const _ = require('lodash');
const parse = require('./parse');
const pipes = require('./pipes');
const getFile = require('./getFile');
const insert = require('./insert');

module.exports = _.curryRight(co.wrap(function*(file, config) {
  return Promise.resolve(file)
    .then(parse)
    .then(getFile)
    .then(pipes(config))
    .then(insert(file));
}), 2);
