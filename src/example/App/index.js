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
      code={`<AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={200} />`}>
      <AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={200} />
    </Panel>

    <Panel
      title="Styled map click handler."
      code={`<AustraliaMap fill="#ffcb03" stroke="#ffffff" strokeWidth={1} width={200} />`}>
      <AustraliaMap fill="#5238f1" stroke="#ffffff" strokeWidth={1} width={200} onClick={(event) => console.log(event)} />
    </Panel>

  </div>;

export default App;
