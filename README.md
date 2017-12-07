# react-australia-map

This is a simple customizable SVG map of Australia on HTML. This maps shows states delimitations. D3 is not needed.

## Installation

It requires `react` 15.4.2 or higher, compatible with React 16.0.0

### NPM
```sh
npm install --save react react-australia-map
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.

## Demo

[http://pvoznyuk.github.io/react-australia-map](http://pvoznyuk.github.io/react-australia-map)


## Usage

Customizable map example with `onClick` event.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {AustraliaMap} from 'react-australia-map';

const mapHandler = event => {
  alert(event.target.dataset.name);
};

const App = () => (
  <div>
    <AustraliaMap fill="#54788b" strokeWidth={1} width={350} height={250}  onClick={mapHandler} />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

Custom regions styling and labels.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {AustraliaMap} from 'react-australia-map';

const customStyling = {
  'NSW': {
    'fill': '#86D9E1',
    'showLabels': true,
    'label': {
      'name': '42%',
      'textAnchor': 'middle',
      'x': 230,
      'y': 167,
      'fill': 'black',
      'fontSize': 18,
      'fontFamily': 'Courier New'
    }
  },
  'NT': {
    'fill': '#1e2032',
    'showLabels': true,
    'label': {
      'name': '13%\n(average)',
      'textAnchor': 'middle',
      'fill': 'white',
      'fontSize': 12,
      'fontFamily': 'Arial'
    }
  }
};

const App = () => (
  <div>
    <AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={350} height={250} customize={customStyling} />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

|prop|description|
|----|-----------|
|`title`| Content for the Title attribute on the `svg`|
|`width`| The `width` for rendering, numeric, no `px` suffix|
|`height`| The `height` for rendering, numeric, no `px` suffix|
|`fill`| The color for filling (by default: `#D3D3D3`)|
|`stroke`| The color for stroke (by default: `#D3D3D3`)|
|`strokeWidth`| The width for stroke (by default: `1`)|
|`showLabels`| Show/hide labels (by default: `false`)|
|`label`| It is an object for default label options|
|`customize`| Optional customization of filling per state |

Label options
|prop|description|
|----|-----------|
|`textAnchor`| text-anchor for the label (left, right or middle)|
|`fill`| label's color (by default: `white`)|
|`fontSize`| label's font size (by default: `11`)|
|`fontFamily`| label's font name (by default: `Verdana`)|

Custom regions' labels can have some extra options
|prop|description|
|----|-----------|
|`name`| Label's copy (by default it is state's name)|
|`x`| Label's x position|
|`y`| Label's y position|

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

## TODO
* Fix bug on clicking on the text labels
* Add hovering styles
* Allow to send `width` and `height` in `%`

## License

MIT
