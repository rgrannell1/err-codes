# err_codes

`err_codes` wraps `libuv`'s error-hashmap in a node.js object. It can be used to pull out error messages
based on a received error-code / number, or for human-readable aliases of error-codes.

## Usage

```js

const errCodes = require('err-codes')

errCodes.numbers[67].code
'ESRCH'

errCodes.aliases.noSuchProcess.code
'ESRCH'

errCodes.codes.ESRCH.message
'no such process'

{ code: 'ESRCH',
  message: 'no such process',
  aliases: [ 'noSuchProcess' ],
  number: 67 }
```


## License

The MIT License

Copyright (c) 2016 Ryan Grannell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Versioning

Versioning complies with the Semantic Versioning 2.0.0 standard.

http://semver.org/
