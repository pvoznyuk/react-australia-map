import React from 'react';
import PropTypes from 'prop-types';
import data from './data/australia-map-dimensions';
import AustraliaState from './components/AustraliaState';

class AustraliaMap extends React.Component {
  clickHandler(stateAbbreviation) {
    this.props.onClick(stateAbbreviation);
  }

  customStyle(state, style) {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state][style]) {
      return this.props.customize[state][style];
    }

    return this.props[style];
  }

  stateClickHandler(state) {
    if (this.props.customize &&
        this.props.customize[state] &&
        this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler;
    }
    return this.clickHandler;
  }

  buildPaths() {
    const paths = [];

    for (const stateKey in data) {
      const path = <AustraliaState
        dimensions={data[stateKey]["dimensions"]}
        fill={this.customStyle(stateKey, 'fill')}
        stroke={this.customStyle(stateKey, 'stroke')}
        strokeWidth={this.customStyle(stateKey, 'strokeWidth')}
        key={stateKey}
        onClickState={this.stateClickHandler(stateKey)}
        state={stateKey}
        />;

      paths.push(path);
    }
    return paths;
  }

  render() {
    return (
      <svg className="au-state-map" height={this.props.height} viewBox="0 0 290 262" width={this.props.width}
        xmlns="http://www.w3.org/2000/svg">
        <title>{this.props.title}</title>
        <g className="outlines">
          {this.buildPaths()}
        </g>
      </svg>
    );
  }
}

AustraliaMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.oneOfType[PropTypes.number, PropTypes.string],
  height: PropTypes.oneOfType[PropTypes.number, PropTypes.string],
  title: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  customize: PropTypes.object
};

AustraliaMap.defaultProps = {
  onClick: () => {},
  width: '100%',
  height: 'auto',
  fill: '#D3D3D3',
  stroke: '#FFFFFF',
  strokeWidth: 0,
  title: 'Australia map',
  customize: {}
};

export default AustraliaMap;
