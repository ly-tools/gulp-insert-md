'use strict';
const gulp = require('gulp');
const insert = require('../../index');
const del = require('del');

gulp.task('clean', cb => del('build', cb));

gulp.task('default', ['clean'], () => {
  return gulp.src('src/**/*.md')
    .pipe(insert({
      grep: (content, callback) => callback(`grep\n${content}`),
      doc: (content, callback) => setTimeout(callback(`doc\n${content}`), 50)
    }))
    .pipe(gulp.dest('build'));
});

module.exports = gulp;
