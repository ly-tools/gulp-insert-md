# gulp-insert-md

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/gulp-insert-md.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/gulp-insert-md?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/gulp-insert-md.png)](https://travis-ci.org/LingyuCoder/gulp-insert-md)
[![Dependency Status](https://david-dm.org/LingyuCoder/gulp-insert-md.svg)](https://david-dm.org/LingyuCoder/gulp-insert-md)
[![devDependency Status](https://david-dm.org/LingyuCoder/gulp-insert-md/dev-status.svg)](https://david-dm.org/LingyuCoder/gulp-insert-md#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/gulp-insert-md.svg?style=flat-square)](http://npmjs.org/package/gulp-insert-md)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/gulp-insert-md.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/gulp-insert-md.svg?style=flat-square)](https://npmjs.org/package/gulp-insert-md)

Insert custom content to markdown file and update like a boss

## Installation

```bash
$ npm install --save-dev gulp
$ npm install --save-dev gulp-insert-md
```

## Usage

### Gulpfile

Define tasks in your gulpfile.

```javascript
const gulp = require('gulp');
const insert = require('gulp-insert-md');

gulp.task('default', ['clean'], () => {
  return gulp.src('src/**/*.md')
    .pipe(insert({
      // define tasks here
      task1: (content, callback) => callback(`task1\n${content}`),
      task2: (content, callback) => setTimeout(callback(`task2\n${content}`), 50)
    }))
    .pipe(gulp.dest('build'));
});
```

### Before

Add some markdown comments to be insert flags like below:

`[insert]: # (<start|end>:<filePath>[tasks])`

Tasks will be executed serially.

```markdown
# gulp-insert-md

---
[insert]: # (start:test.js)
some old content here, will be replaced
[insert]: # (end:test.js)
---
[insert]: # (start:test1.js|task1|task2)
---
[insert]: # (end:test2.js|task1)
---
```

### After

```markdown
# gulp-insert-md

---
[insert]: # (start:test.js)
'use strict';
console.log('test');
[insert]: # (end:test.js)
---
[insert]: # (start:test1.js|task1|task2)
task2
task1
'use strict';
console.log('test2');
[insert]: # (end:test1.js)
---
[insert]: # (start:test2.js)
task1
'use strict';
console.log('test2');
[insert]: # (end:test2.js|task1)
---
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
