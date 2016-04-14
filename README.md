# err_codes

`err_codes` wraps `libuv`'s error-hashmap in a node.js object. It can be used to pull out error messages
based on a received error-code / number, or for human-readable aliases of error-codes.

## Usage

```js

const errCodes = require('err-codes')

errCodes.numbers[67]
errCodes.codes.ESRCH
errCodes.aliases.noSuchProcess

{
	code:    'ESRCH',
	message: 'no such process',
	aliases: [ 'noSuchProcess' ],
	number:  67
}
```
