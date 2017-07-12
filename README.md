# opt-search

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

a tool to operate location search

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## example
	
	var optSearch = require('opt-search')

	let s = '?aaa=111&bbb=222&ccc=333'

	console.log(optSearch('aaa','ssss',s))  // ===> ?aaa=ssss&bbb=222&ccc=333

	console.log(optSearch('aaa',true,s))  // ===> ?bbb=222&ccc=333

	console.log(optSearch('ddd','444',s)) // ===> ?aaa=111&bbb=222&ccc=333&ddd=444

	console.log(optSearch({a:1,bbb:'eee',d:333},s)) // ===> ?aaa=111&bbb=eee&ccc=333&a=1&d=333

	console.log(optSearch(s))  // ===> Object {aaa: "111", bbb: "222", ccc: "333"}