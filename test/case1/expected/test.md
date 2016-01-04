# gulp-insert-md

---
[insert]: # (start:test.js)
'use strict';
console.log('test');
[insert]: # (end:test.js)
---
[insert]: # (start:test1.js|grep|doc)
doc
grep
'use strict';
console.log('test2');
[insert]: # (end:test1.js)
---
[insert]: # (start:test2.js)
grep
'use strict';
console.log('test2');
[insert]: # (end:test2.js|grep)
---
[insert]: # (start:test3.js)

[insert]: # (end:test3.js)
---
