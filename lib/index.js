'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _australiaMapDimensions = require('./data/australia-map-dimensions');

var _australiaMapDimensions2 = _interopRequireDefault(_australiaMapDimensions);

var _State = require('./components/State');

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AustraliaMap = function (_React$Component) {
  _inherits(AustraliaMap, _React$Component);

  function AustraliaMap() {
    _classCallCheck(this, AustraliaMap);

    return _possibleConstructorReturn(this, (AustraliaMap.__proto__ || Object.getPrototypeOf(AustraliaMap)).apply(this, arguments));
  }

  _createClass(AustraliaMap, [{
    key: 'clickHandler',
    value: function clickHandler(stateAbbreviation) {
      this.props.onClick(stateAbbreviation);
    }
  }, {
    key: 'customStyle',
    value: function customStyle(state, style) {
      if (this.props.customize && this.props.customize[state] && this.props.customize[state][style]) {
        return this.props.customize[state][style];
      }

      return this.props[style];
    }
  }, {
    key: 'customLabelStyle',
    value: function customLabelStyle(state, style) {
      var dataState = _australiaMapDimensions2.default[state].label;

      if (this.props.customize && this.props.customize[state] && this.props.customize[state].label && this.props.customize[state].label[style]) {
        return this.props.customize[state].label[style];
      }

      return dataState[style] || this.props.label[style] || null;
    }
  }, {
    key: 'styleProps',
    value: function styleProps(state) {
      var styles = {
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
  }, {
    key: 'styleLabelProps',
    value: function styleLabelProps(state) {
      return {
        fill: this.customLabelStyle(state, 'fill'),
        stroke: this.customLabelStyle(state, 'stroke'),
        strokeWidth: this.customLabelStyle(state, 'strokeWidth'),
        fontSize: this.customLabelStyle(state, 'fontSize'),
        textAnchor: this.customLabelStyle(state, 'textAnchor'),
        fontFamily: this.customLabelStyle(state, 'fontFamily')
      };
    }
  }, {
    key: 'stateClickHandler',
    value: function stateClickHandler(state) {
      if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
        return this.props.customize[state].clickHandler;
      }
      return this.clickHandler.bind(this);
    }
  }, {
    key: 'buildPaths',
    value: function buildPaths() {
      var paths = [];

      for (var stateKey in _australiaMapDimensions2.default) {
        var path = _react2.default.createElement(_State2.default, _extends({
          dimensions: _australiaMapDimensions2.default[stateKey].dimensions
        }, this.styleProps(stateKey), {

          showLabels: this.customStyle(stateKey, 'showLabels'),
          labelPosition: _australiaMapDimensions2.default[stateKey].labelPosition,
          label: _australiaMapDimensions2.default[stateKey].name,

          key: stateKey,
          onClickState: this.stateClickHandler(stateKey),
          state: stateKey }));

        paths.push(path);
      }
      return paths;
    }
  }, {
    key: 'buildLabels',
    value: function buildLabels() {
      var _this2 = this;

      var labels = [];

      var _loop = function _loop(stateKey) {
        var showLabels = _this2.customStyle(stateKey, 'showLabels');

        if (showLabels) {
          var labelText = _this2.customLabelStyle(stateKey, 'name');

          var label = _react2.default.createElement(
            'text',
            _extends({
              key: stateKey,
              state: stateKey,
              x: _this2.customLabelStyle(stateKey, 'x'),
              y: _this2.customLabelStyle(stateKey, 'y')
            }, _this2.styleLabelProps(stateKey), {
              onClickState: _this2.stateClickHandler(stateKey),
              style: { userSelect: 'none', cursor: 'default' }
            }),
            _react2.default.createElement(
              'tspan',
              null,
              labelText.split("\n").map(function (item, index) {
                return _react2.default.createElement(
                  'tspan',
                  {
                    key: item,
                    x: _this2.customLabelStyle(stateKey, 'x'),
                    dy: Math.min(index, 1) + 'em' },
                  item
                );
              })
            )
          );

          labels.push(label);
        }
      };

      for (var stateKey in _australiaMapDimensions2.default) {
        _loop(stateKey);
      }
      return labels;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        {
          className: 'au-state-map',
          height: this.props.height,
          id: this.props.id || null,
          viewBox: '0 0 290 262',
          width: this.props.width,
          xmlns: 'http://www.w3.org/2000/svg' },
        _react2.default.createElement(
          'title',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'g',
          { className: 'outlines' },
          this.buildPaths(),
          this.buildLabels()
        )
      );
    }
  }]);

  return AustraliaMap;
}(_react2.default.Component);

AustraliaMap.propTypes = {
  id: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  width: _propTypes2.default.oneOfType[(_propTypes2.default.number, _propTypes2.default.string)],
  height: _propTypes2.default.oneOfType[(_propTypes2.default.number, _propTypes2.default.string)],
  title: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  showLabels: _propTypes2.default.bool,
  label: _propTypes2.default.object,
  customize: _propTypes2.default.object
};

AustraliaMap.defaultProps = {
  onClick: function onClick() {},
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

exports.default = AustraliaMap;
//# sourceMappingURL=index.js.map