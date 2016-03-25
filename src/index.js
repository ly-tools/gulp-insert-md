import through from 'through2';
import insert from './main';
import {
  PluginError
} from 'gulp-util';
const DEFAULT_CONFIG = {};

export default function(config) {
  config = {
    ...DEFAULT_CONFIG,
    ...config
  };
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file);
    if (file.isStream()) return callback(new PluginError('gulp-insert-md', `Stream is not supported`));
    insert(file, config)
      .then(() => callback(null, file))
      .catch(e => {
        console.error(e.message, e.stack);
        callback(new PluginError('gulp-insert-md', e));
      });
  });
}
