# fetchDot [![Build Status](https://travis-ci.org/mikemclaren/fetch-dot.svg?branch=master)](https://travis-ci.org/mikemclaren/fetch-dot) [![Coverage Status](https://coveralls.io/repos/github/mikemclaren/fetch-dot/badge.svg?branch=master)](https://coveralls.io/github/mikemclaren/fetch-dot?branch=master)

A pure function that allows you to retrieve a member of an object or an array utilizing dot notation. Super useful in situations where your code may not know what the schema of an object will be, but some configuration or user might.

## Usage
```javascript
const obj = {
	test: 'Test property.',
	nestedObj: {
		test: 'A nested test property.'
	}
};

fetchDot('test', obj);
// 'Test property.'

fetchDot('nestedObj.test', obj);
// 'A nested test property.'
```
