# object-set

Set deep property by key chaining and manipulate given object. 

[![npm version](https://badge.fury.io/js/%40util-funcs%2Fobject-set.svg)](https://badge.fury.io/js/%40util-funcs%2Fobject-set) [![Build Status](https://travis-ci.org/util-funcs/object-set.svg?branch=master)](https://travis-ci.org/util-funcs/object-set)

## Getting Started

```ts
import set from '@util-funcs/object-set';
```

### Installing

```sh
npm i @util-funcs/object-set --save
```

or

```sh
yarn add @util-funcs/object-set
```

### Examples

```javascript
let data = {};

data = set(data, 'a.b.c.d.e', 'test data');

// output:
{
  a: {
    b: {
      c: {
        d: {
          e: 'test data'
        }
      }
    }
  }
}
```

Object will be manipulate and return it same reference. You do not have to assign return data to a variable.

```javascript
let data = {};

set(data, 'a.b.c.d.e', true);

// data:
{
  a: {
    b: {
      c: {
        d: {
          e: true
        }
      }
    }
  }
}
```

## Run tests

```ts
npm test
```

## Built With

- [TypeScript](https://www.typescriptlang.org)

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- [**Ahmet ATAY**](https://github.com/atayahmet) - _Initial work_

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
