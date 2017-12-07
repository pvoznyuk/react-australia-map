import React from 'react';
import Highlight from 'react-highlight.js';
import AustraliaMap from '../..';
import css from './App.css';

const Panel = ({title, code, children}) =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title" role="presentation">
        { title }
      </h4>
    </div>
    <div className="panel-body">
      <h6>Code:</h6>
      <Highlight language={'jsx'}>
        {code}
      </Highlight>
      <h6>Output:</h6>
      {children}
    </div>
  </div>
;

const mapHandler = event => {
  alert(event.target.dataset.name);
};

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

const App = () =>
  <div className={css.app}>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css" />

    <h1>Australia Map</h1>
    <p><a href="https://github.com/pvoznyuk/react-australia-map">https://github.com/pvoznyuk/react-australia-map</a></p>

    <Panel
      title="Default Australia map."
      code="<AustraliaMap width={200} />">
      <AustraliaMap width={200} />
    </Panel>

    <Panel
      title="Styled map."
      code={'<AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={200} />'}>
      <AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={200} />
    </Panel>

    <Panel
      title="Default Labels and click handler."
      code={'<AustraliaMap showLabels={true} fill="#54788b" strokeWidth={1} width={350} height={250} onClick={mapHandler} />'}>
      <AustraliaMap showLabels={true} fill="#54788b" strokeWidth={1} width={350} height={250} onClick={mapHandler} />
    </Panel>

    <Panel
      title="Custom regions styling and labels."
      code={`
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
      'name': '13%\\n(average)',
      'textAnchor': 'middle',
      'fill': 'white',
      'fontSize': 12,
      'fontFamily': 'Arial'
    }
  }
};

<AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={350} height={250} customize={customStyling}  />`}>
      <AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={350} height={250} customize={customStyling} />
    </Panel>

  </div>;

export default App;
