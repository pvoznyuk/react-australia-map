import React from 'react';
import PropTypes from 'prop-types';

const State = props =>
  <path
    className={`${props.state} state`}
    d={props.dimensions}
    data-name={props.state}
    fill={props.fill}
    onClick={props.onClickState}
    stroke={props.stroke}
    strokeWidth={props.strokeWidth} />;

State.propTypes = {
  dimensions: PropTypes.string,
  fill: PropTypes.string,
  onClickState: PropTypes.func,
  state: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

export default State;
