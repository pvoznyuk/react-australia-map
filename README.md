# react-australia-map [![npm](https://img.shields.io/npm/v/react-australia-map.svg?style=flat-square)](https://www.npmjs.com/package/react-australia-map)

[![Gitter](https://img.shields.io/gitter/room/pvoznyuk/help.svg?style=flat-square)](https://gitter.im/pvoznyuk/help)

[![CircleCI](https://img.shields.io/circleci/project/pvoznyuk/react-australia-map.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/pvoznyuk/react-australia-map)
[![AppVeyor](https://img.shields.io/appveyor/ci/pvoznyuk/react-australia-map.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/pvoznyuk/react-australia-map)
[![Coverage](https://img.shields.io/codecov/c/github/pvoznyuk/react-australia-map.svg?style=flat-square)](https://codecov.io/github/pvoznyuk/react-australia-map?branch=master)
[![Dependencies](https://img.shields.io/david/pvoznyuk/react-australia-map.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-australia-map)
[![Dev Dependencies](https://img.shields.io/david/dev/pvoznyuk/react-australia-map.svg?style=flat-square)](https://david-dm.org/pvoznyuk/react-australia-map#info=devDependencies)

React Australia Map

## Installation

### NPM
```sh
npm install --save react react-australia-map
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://unpkg.com/react-australia-map/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/react-australia-map/build/react-australia-map.js"></script>
(Module exposed as `ReactAustraliaMap`)
```


## Demo

[http://pvoznyuk.github.io/react-australia-map](http://pvoznyuk.github.io/react-australia-map)

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ReactAustraliaMap} from 'react-australia-map';

const App = () => (
  <div>
    <ReactAustraliaMap />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node 7` on `OSX` and `Windows`.

To run example covering all `ReactAustraliaMap` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:pvoznyuk/react-australia-map.git
cd react-australia-map
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
