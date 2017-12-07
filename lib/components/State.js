'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var State = function State(props) {
  return _react2.default.createElement('path', {
    className: props.state + ' state',
    d: props.dimensions,
    'data-name': props.state,
    fill: props.fill,
    onClick: props.onClickState,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth });
};

State.propTypes = {
  dimensions: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  onClickState: _propTypes2.default.func,
  state: _propTypes2.default.string,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number
};

exports.default = State;
//# sourceMappingURL=State.js.map