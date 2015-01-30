# pruno-publish

A lightweight mix for copying assets to your distribution directory.

## Usage

```js
"use strict";

var pruno = require('pruno');

pruno.plugins(function(mix) {
  mix
    .configure({ dir: __dirname + '/config' })
    .publish({
      pkg: false,
      src: [
        '::src/assets/**/*'
      ],
      dist: '::dist'
    });
});
```
