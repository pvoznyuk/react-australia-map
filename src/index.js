import React from 'react';
import PropTypes from 'prop-types';
import data from './data/australia-map-dimensions';
import State from './components/State';

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

  customLabelStyle(state, style) {
    const dataState = data[state].label;

    if (this.props.customize &&
        this.props.customize[state] &&
        this.props.customize[state].label &&
        this.props.customize[state].label[style]) {
      return this.props.customize[state].label[style];
    }

    return dataState[style] || this.props.label[style] || null;
  }

  styleProps(state) {
    const styles = {
      fill: this.customStyle(state, 'fill'),
      stroke: this.customStyle(state, 'stroke'),
      strokeWidth: this.customStyle(state, 'strokeWidth')
    };

    if (styles.strokeWidth === 0) {
      styles.stroke = styles.fill;
      styles.strokeWidth = 1;
    }

    return styles;
  }

  styleLabelProps(state) {
    return {
      fill: this.customLabelStyle(state, 'fill'),
      stroke: this.customLabelStyle(state, 'stroke'),
      strokeWidth: this.customLabelStyle(state, 'strokeWidth'),
      fontSize: this.customLabelStyle(state, 'fontSize'),
      textAnchor: this.customLabelStyle(state, 'textAnchor'),
      fontFamily: this.customLabelStyle(state, 'fontFamily')
    };
  }

  stateClickHandler(state) {
    if (this.props.customize &&
        this.props.customize[state] &&
        this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler;
    }
    return this.clickHandler.bind(this);
  }


  buildPaths() {
    const paths = [];

    for (const stateKey in data) {
      const path = (<State
        dimensions={data[stateKey].dimensions}
        {...this.styleProps(stateKey)}

        showLabels={this.customStyle(stateKey, 'showLabels')}
        labelPosition={data[stateKey].labelPosition}
        label={data[stateKey].name}

        key={stateKey}
        onClickState={this.stateClickHandler(stateKey)}
        state={stateKey}/>);

      paths.push(path);
    }
    return paths;
  }

  buildLabels() {
    const labels = [];

    for (const stateKey in data) {
      const showLabels = this.customStyle(stateKey, 'showLabels');

      if (showLabels) {
        const labelText = this.customLabelStyle(stateKey, 'name');

        const label =
          <text
            key={stateKey}
            state={stateKey}
            x={this.customLabelStyle(stateKey, 'x')}
            y={this.customLabelStyle(stateKey, 'y')}
            {...this.styleLabelProps(stateKey)}
            onClickState={this.stateClickHandler(stateKey)}
            style={{ userSelect: 'none', cursor: 'default'}}
          >
            <tspan>
              { labelText.split("\n").map((item, index) => {
                return <tspan
                  key={item}
                  x={this.customLabelStyle(stateKey, 'x')}
                  dy={`${Math.min(index, 1)}em`}>
                  { item }
                </tspan>;
              })}
            </tspan>
          </text>;

        labels.push(label);
      }
    }
    return labels;
  }

  render() {
    return (
      <svg
        className="au-state-map"
        height={this.props.height}
        id={this.props.id || null}
        viewBox="0 0 290 262"
        width={this.props.width}
        xmlns="http://www.w3.org/2000/svg">
        <title>{this.props.title}</title>
        <g className="outlines">
          {this.buildPaths()}
          {this.buildLabels()}
        </g>
      </svg>
    );
  }
}

AustraliaMap.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.oneOfType[PropTypes.number, PropTypes.string],
  height: PropTypes.oneOfType[PropTypes.number, PropTypes.string],
  title: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  showLabels: PropTypes.bool,
  label: PropTypes.object,
  customize: PropTypes.object
};

AustraliaMap.defaultProps = {
  onClick: () => {},
  width: '100%',
  height: 'auto',
  fill: '#D3D3D3',
  stroke: '#D3D3D3',
  strokeWidth: 1,
  title: 'Australia map',
  showLabels: false,
  label: {
    textAnchor: 'middle',
    fill: 'white',
    fontSize: 11,
    fontFamily: 'Verdana'
  },
  customize: {}
};

export default AustraliaMap;
