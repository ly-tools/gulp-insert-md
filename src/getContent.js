import {
  readFileSync
} from 'fs';
import {
  forEach
} from 'lodash';
import logger from './logger';

export default async function(insertions) {
  forEach(insertions, insertion => {
    try {
      insertion.content = readFileSync(insertion.absPath, 'utf-8');
    } catch (e) {
      logger.warn(`Fail to read file ${insertion.absPath}, will insert empty`);
      insertion.content = '';
    }
  });
  return insertions;
}
