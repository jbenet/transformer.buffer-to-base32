# transformer.buffer-to-base32

[Transformer](http://github.com/jbenet/transformer) conversion: buffer to base32

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Javascript

```js
var transformer = require('dat-transformer');
var tBufferToBase32 = transformer('buffer', 'base32');
tBufferToBase32(new Buffer('beep boop', 'ascii')); // 'c9jpaw10c9qpyw0'
```
