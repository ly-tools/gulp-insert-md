import 'babel-polyfill';
import {
  join
} from 'path';
import run from 'run-gulp-task';
import PrettyError from 'pretty-error';
import {
  readFileSync
} from 'fs';
const pe = new PrettyError();
const CWD = process.cwd();
const testPath = join(CWD, 'test');

describe('gulp-insert-md', function() {
  describe('Oh my god! It works!!!', () => {
    let casePath = join(testPath, 'case1');
    before(done => {
      process.chdir(casePath);
      run('default', join(process.cwd(), 'gulpfile.js'))
        .catch(e => {
          console.log(pe.render(e));
          return e;
        })
        .then(e => {
          process.chdir(CWD);
          done(e);
        });
    });
    it('It works! Unbelievable!', function() {
      return readFileSync(join(casePath, 'build', 'test.md'), 'utf-8').trim()
        .should.be.eql(readFileSync(join(casePath, 'expected', 'test.md'), 'utf-8').trim());
    });
  });
});
