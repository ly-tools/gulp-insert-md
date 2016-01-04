'use strict';
require('should');
const path = require('path');
const run = require('run-gulp-task');
const PrettyError = require('pretty-error');
const fs = require('fs');
const pe = new PrettyError();
const CWD = process.cwd();
const testPath = path.join(CWD, 'test');

describe('gulp-insert-md', function() {
  describe('Oh my god! It works!!!', () => {
    let casePath = path.join(testPath, 'case1');
    before(done => {
      process.chdir(casePath);
      run('default', path.join(process.cwd(), 'gulpfile.js'))
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
      return fs.readFileSync(path.join(casePath, 'build', 'test.md'), 'utf-8').trim()
        .should.be.eql(fs.readFileSync(path.join(casePath, 'expected', 'test.md'), 'utf-8').trim());
    });
  });
});
