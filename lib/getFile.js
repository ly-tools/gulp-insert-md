'use strict';

const fs = require('fs');
const _ = require('lodash');
const co = require('co');
const logger = require('./logger');

module.exports = co.wrap(function*(insertions) {
  _.forEach(insertions, insertion => {
    try {
      insertion.content = fs.readFileSync(insertion.absPath, 'utf-8');
    } catch (e) {
      logger.warn(`Fail to read file ${insertion.absPath}, will insert empty`);
      insertion.content = '';
    }
  });
  return insertions;
});
