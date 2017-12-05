import React from 'react';

const AustraliaState = props =>
  <path
    className={`${props.state} state`}
    d={props.dimensions}
    data-name={props.state}
    fill={props.fill}
    stroke={props.stroke}
    strokeWidth={props.strokeWidth}
    onClick={props.onClickState} />;


export default AustraliaState;
