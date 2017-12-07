(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactAustraliaMap"] = factory(require("react"));
	else
		root["ReactAustraliaMap"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _australiaMapDimensions = __webpack_require__(7);
	
	var _australiaMapDimensions2 = _interopRequireDefault(_australiaMapDimensions);
	
	var _State = __webpack_require__(9);
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(3)();
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(4);
	var invariant = __webpack_require__(5);
	var ReactPropTypesSecret = __webpack_require__(6);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _australiaStatesDimensions = __webpack_require__(8);
	
	var _australiaStatesDimensions2 = _interopRequireDefault(_australiaStatesDimensions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _australiaStatesDimensions2.default;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"NSW": {
			"dimensions": "M 271.2875,129.6 L 270.4125,130.225 L 269.75625,130.85 L 268.6625,130.94375 L 267.75625,131.0375 L 267.6625,131.7875 L 267.94375,132.85 L 268.6625,132.7875 L 268.00625,133.56875 L 267.88125,134.13125 L 266.85,134.6 L 266.06875,134.31875 L 265.6625,133.63125 L 265.00625,134.4125 L 264.35,135.225 L 264.0375,135.7875 L 263.35,136.225 L 262.88125,135.1625 L 262.81875,134.44375 L 262.38125,133.75625 L 261.975,133.25625 L 261.31875,132.4125 L 260.19375,132.1625 L 258.56875,132.13125 L 257.975,131.81875 L 257.225,131.5375 L 256.50625,131.6 L 256.2875,131.06875 L 255.38125,131.1625 L 253.94375,131.6625 L 252.6625,131.44375 L 251.35,131.0375 L 250.7875,131.06875 L 250.00625,132.25625 L 248.9125,132.1625 L 248.81875,133.2875 L 248.1,133.35 L 248.1625,133.88125 L 247.2875,134.35 L 194.1625,134.2875 L 194.1625,179.35 L 194.1625,179.38125 L 194.225,179.6 L 195.35,179.4125 L 197.19375,180.2875 L 198.225,179.56875 L 199.975,179.85 L 202.1,180.1 L 203.81875,181.5375 L 204.31875,183.56875 L 205.4125,184.5375 L 205.44375,183.56875 L 206.50625,183.0375 L 207.475,183.25625 L 209.19375,183.38125 L 210.19375,183.7875 L 210.81875,186.5375 L 212.25625,188.6 L 213.38125,188.63125 L 215.00625,189.31875 L 216.975,191.1 L 217.35,192.38125 L 218.63125,193.31875 L 220.25625,194.00625 L 221.56875,193.81875 L 221.31875,192.35 L 221.81875,191.69375 L 222.5375,191.6 L 223.38125,192.0375 L 225.225,191.75625 L 226.6625,192.475 L 227.56875,192.35 L 228.7875,192.9125 L 229.975,193.13125 L 230.63125,192.44375 L 231.50625,192.13125 L 232.56875,192.725 L 234.50625,193.19375 L 235.975,192.7875 L 237.0375,192.44375 L 237.7875,192.31875 L 238.50625,192.0375 L 239.4125,191.69375 L 240.81875,192.44375 L 240.63125,193.6 L 241.19375,194.81875 L 241.9125,195.85 L 242.25625,196.94375 L 242.1,198.2875 L 250.2875,202.35 L 252.00625,202.475 L 252.725,203.13125 L 253.38125,203.13125 L 253.225,203.56875 L 253.35,203.6625 L 254.44375,203.13125 L 254.225,201.4125 L 254.6625,201.19375 L 255.1,201.19375 L 254.6625,200.13125 L 253.81875,199.9125 L 254.225,199.06875 L 253.81875,198.00625 L 254.225,198.225 L 254.6625,196.725 L 255.50625,193.31875 L 255.2875,191.19375 L 255.725,189.9125 L 255.2875,189.9125 L 256.35,189.06875 L 255.725,188.225 L 256.56875,188.4125 L 258.2875,184.38125 L 259.75625,183.94375 L 259.13125,182.6625 L 259.75625,182.475 L 259.75625,183.31875 L 260.19375,183.1 L 259.75625,181.81875 L 259.35,182.0375 L 259.56875,181.6 L 258.69375,181.4125 L 260.19375,180.75625 L 260.63125,179.25625 L 260.19375,178.63125 L 260.85,178.4125 L 260.85,176.9125 L 262.5375,175.225 L 261.9125,175.00625 L 262.975,174.7875 L 261.69375,174.38125 L 263.1625,174.1625 L 263.38125,173.1 L 262.75625,173.50625 L 262.31875,173.1 L 262.975,173.31875 L 262.75625,172.6625 L 263.38125,173.1 L 263.6,171.38125 L 263.6,171.1625 L 263.1625,171.6 L 263.1625,170.975 L 262.975,171.1625 L 262.75625,170.5375 L 263.38125,170.975 L 263.6,169.9125 L 263.6,170.75625 L 264.44375,170.31875 L 264.6625,169.25625 L 264.25625,168.85 L 265.1,168.85 L 265.725,167.13125 L 265.1,167.975 L 264.88125,167.13125 L 265.50625,167.13125 L 265.50625,166.2875 L 265.725,167.13125 L 266.6,165.63125 L 266.38125,165.225 L 266.7875,165.225 L 266.7875,165.85 L 269.35,164.35 L 268.50625,164.1625 L 267.6625,164.7875 L 267.44375,164.56875 L 267.85,164.1625 L 267.6625,163.725 L 268.50625,164.1625 L 269.13125,163.725 L 269.35,164.1625 L 270.19375,162.88125 L 271.69375,162.00625 L 271.9125,160.31875 L 271.25625,160.1 L 271.25625,160.5375 L 270.4125,160.1 L 271.25625,160.1 L 271.475,160.1 L 271.69375,158.6 L 273.19375,157.35 L 275.1,151.1625 L 274.88125,146.9125 L 276.38125,143.06875 L 276.6,142.4125 L 277.225,138.81875 L 276.6,138.38125 L 277.225,138.6 L 277.0375,137.75625 L 278.725,134.5375 L 278.2875,134.5375 L 278.725,134.35 L 278.94375,132.63125 L 278.2875,131.7875 L 278.475,129.88125 L 277.50625,129.9125 L 276.6,129.81875 L 276.06875,130.225 L 275.56875,130.44375 L 275.00625,130.50625 L 274.06875,130.225 L 273.0375,130.69375 L 272.225,129.88125 L 271.2875,129.6 z M 245.94375,185.85 C 246.4011,185.83171 246.88755,185.9021 247.31875,186.1 C 247.68859,186.26974 247.81087,186.51964 247.7875,186.7875 C 247.76413,187.05536 247.56333,187.33774 247.35,187.6625 C 246.92333,188.312 246.34845,189.03293 246.38125,189.6625 C 246.30457,190.00785 245.94393,190.75511 245.44375,190.85 C 245.19366,190.89744 244.89487,190.78185 244.6,190.38125 C 244.30512,189.98065 243.99269,189.29934 243.69375,188.19375 C 243.51125,187.5188 243.72572,186.9458 244.1625,186.5375 C 244.59927,186.1292 245.25772,185.87745 245.94375,185.85 z",
			"abbreviation": "NSW",
			"label": {
				"name": "New South\nWales",
				"x": 230,
				"y": 160
			}
		},
		"NT": {
			"dimensions": "M 125.184,12.525 L 127.313,13.803 L 129.443,12.525 L 130.082,11.461 L 130.722,11.673 L 130.722,10.821 L 131.36,10.609 L 130.509,9.331 L 129.656,9.331 L 129.444,8.692 L 128.805,9.544 L 129.231,10.609 L 128.593,9.118 L 128.38,9.757 L 127.954,9.545 L 127.954,10.822 L 127.741,9.757 L 127.528,9.757 L 126.889,9.545 L 125.611,9.971 L 126.463,11.249 L 125.611,10.823 L 125.398,9.758 L 124.972,10.184 L 125.185,10.397 L 124.972,10.397 L 124.972,10.184 L 124.972,9.332 L 123.481,8.48 L 124.006,11.277 L 123.269,11.462 L 123.694,11.036 L 123.269,11.249 L 123.694,10.397 L 123.269,9.545 L 121.778,10.61 L 122.63,11.036 L 122.204,11.036 L 122.204,11.888 L 122.416,12.03 L 122.416,12.527 L 122.204,11.888 L 121.991,12.314 L 121.352,11.888 L 121.352,12.74 L 120.926,12.74 L 124.972,13.166 L 125.184,12.525 z M 113.85,33.81875 L 113.85,117.35 L 173.4125,117.35 L 173.4125,44.19375 L 172.6625,43.19375 L 170.5375,42.5375 L 167.75625,40.63125 L 167.13125,40.85 L 167.35,41.2875 L 166.2875,40.85 L 165.63125,41.06875 L 165.63125,40.19375 L 163.2875,39.13125 L 162.44375,37.44375 L 159.0375,35.31875 L 158.81875,35.5375 L 158.81875,35.1 L 158.19375,35.31875 L 157.13125,34.25625 L 156.69375,32.75625 L 157.975,32.31875 L 159.0375,29.7875 L 160.31875,29.13125 L 160.5375,27.85 L 161.6,25.50625 L 160.725,26.1625 L 160.31875,25.94375 L 160.1,24.0375 L 160.5375,24.225 L 160.94375,23.81875 L 160.31875,23.6 L 160.5375,22.975 L 161.1625,22.5375 L 161.38125,23.1625 L 162.00625,21.9125 L 162.225,22.975 L 162.44375,21.9125 L 163.06875,22.1 L 163.2875,21.475 L 163.725,22.5375 L 163.2875,23.1625 L 164.13125,22.75625 L 164.7875,21.475 L 164.13125,20.81875 L 165.4125,21.0375 L 164.13125,19.56875 L 164.56875,19.75625 L 164.7875,19.35 L 165.225,19.975 L 165.00625,19.13125 L 165.63125,19.13125 L 166.06875,18.06875 L 165.85,17.4125 L 166.2875,17.4125 L 166.2875,18.06875 L 167.56875,16.56875 L 166.2875,15.2875 L 165.63125,15.725 L 166.06875,16.13125 L 165.4125,16.13125 L 164.56875,14.225 L 164.13125,14.225 L 164.7875,13.38125 L 162.225,15.2875 L 163.725,15.725 L 163.06875,17.00625 L 162.44375,17.4125 L 161.6,17.225 L 161.1625,17.63125 L 161.1625,17.00625 L 160.725,17.00625 L 161.38125,15.94375 L 160.725,16.13125 L 160.5375,15.725 L 161.38125,14.6625 L 159.6625,15.50625 L 159.44375,16.1625 L 158.81875,15.725 L 160.5375,13.81875 L 158.19375,15.06875 L 157.975,14.6625 L 156.9125,14.88125 L 155.85,15.50625 L 156.69375,15.94375 L 155.4125,15.725 L 155.85,16.35 L 153.2875,15.2875 L 152.63125,13.81875 L 151.7875,14.88125 L 149.225,14.225 L 148.6,15.50625 L 149.0375,14.44375 L 148.6,13.6 L 148.1625,13.81875 L 147.94375,13.1625 L 147.1,13.81875 L 146.475,13.1625 L 147.1,12.5375 L 146.25625,12.31875 L 144.35,13.38125 L 144.5375,12.5375 L 144.13125,12.94375 L 143.69375,12.31875 L 143.06875,12.725 L 143.25625,12.1 L 142.00625,12.31875 L 140.50625,9.75625 L 140.06875,9.75625 L 140.2875,10.4125 L 139.85,10.19375 L 138.7875,11.0375 L 137.31875,8.9125 L 136.88125,9.5375 L 136.6625,8.25625 L 136.0375,8.69375 L 136.25625,9.31875 L 135.1625,8.25625 L 135.38125,9.5375 L 135.81875,9.75625 L 135.38125,10.4125 L 134.975,8.9125 L 134.1,8.25625 L 134.1,9.13125 L 133.0375,8.9125 L 133.25625,9.31875 L 132.85,9.75625 L 133.9125,9.5375 L 134.1,9.975 L 133.9125,10.19375 L 134.75625,10.4125 L 134.975,11.0375 L 135.81875,10.6 L 137.725,10.4125 L 137.725,10.81875 L 138.1625,10.81875 L 137.725,11.0375 L 138.38125,11.25625 L 137.94375,11.25625 L 138.38125,11.475 L 137.94375,11.6625 L 139.00625,11.6625 L 139.225,11.6625 L 138.1625,12.725 L 139.00625,13.38125 L 138.6,13.6 L 138.38125,14.88125 L 139.44375,15.2875 L 137.975,14.88125 L 137.31875,15.2875 L 137.1,16.56875 L 136.69375,15.50625 L 136.0375,15.94375 L 135.81875,15.2875 L 134.75625,16.35 L 133.69375,15.725 L 130.725,16.13125 L 129.88125,15.50625 L 129.6625,14.44375 L 129.225,15.725 L 127.5375,15.2875 L 127.94375,16.7875 L 126.88125,16.56875 L 126.475,17.00625 L 127.5375,17.85 L 126.6625,17.63125 L 127.06875,18.2875 L 126.6625,18.69375 L 126.25625,17.85 L 126.25625,18.06875 L 125.81875,18.2875 L 126.0375,17.19375 L 124.75625,17.00625 L 124.975,18.475 L 124.5375,18.475 L 125.81875,19.13125 L 125.19375,19.13125 L 125.19375,19.5375 L 124.13125,18.475 L 123.475,18.69375 L 123.69375,19.13125 L 123.25625,18.69375 L 123.25625,20.19375 L 121.7875,20.6 L 121.7875,22.1 L 123.0375,23.6 L 122.63125,23.38125 L 120.9125,24.6625 L 120.2875,24.44375 L 120.2875,24.0375 L 119.63125,24.44375 L 119.44375,26.35 L 119.85,26.1625 L 119.00625,26.7875 L 119.225,27.85 L 118.56875,28.2875 L 118.1625,27.85 L 118.56875,28.9125 L 118.1625,28.50625 L 117.725,29.35 L 117.50625,28.69375 L 116.6625,30.19375 L 116.6625,30.85 L 117.2875,31.475 L 117.725,31.0375 L 117.725,31.69375 L 118.56875,31.475 L 118.7875,31.9125 L 119.63125,31.475 L 119.44375,31.9125 L 118.38125,32.5375 L 119.00625,32.5375 L 119.00625,32.975 L 118.7875,32.975 L 118.94375,33.25625 L 119.1,33.31875 L 119.63125,32.975 L 119.44375,33.6 L 120.9125,32.75625 L 120.9125,33.38125 L 120.06875,33.38125 L 120.50625,33.81875 L 119.85,33.6 L 119.44375,33.6 L 118.56875,33.6 L 119.00625,34.44375 L 118.56875,34.0375 L 118.7875,35.5375 L 118.1625,35.725 L 117.50625,34.25625 L 116.88125,34.0375 L 117.1,35.1 L 116.225,33.81875 L 116.44375,34.25625 L 116.0375,34.25625 L 115.81875,34.25625 L 116.225,34.88125 L 115.81875,35.31875 L 116.44375,35.5375 L 115.81875,35.5375 L 115.6,36.38125 L 115.6,35.725 L 115.1625,36.6 L 115.6,35.5375 L 115.38125,35.31875 L 114.94375,34.88125 L 114.94375,34.0375 L 114.5375,34.6625 L 114.5375,33.81875 L 113.85,33.81875 z M 163.943,29.137 L 165.433,29.989 L 167.35,29.989 L 167.137,28.924 L 166.923,29.35 L 165.86,29.137 L 165.86,28.286 L 166.498,28.072 L 166.285,27.434 L 167.35,26.582 L 166.71,26.155 L 166.71,26.794 L 165.86,26.794 L 165.646,25.942 L 165.86,25.517 L 164.793,25.729 L 165.22,26.369 L 163.73,26.794 L 163.73,27.859 L 163.943,28.711 L 163.303,29.563 L 163.943,29.137 z",
			"abbreviation": "NT",
			"label": {
				"name": "Northern\nTerritory",
				"x": 144,
				"y": 70
			}
		},
		"QLD": {
			"dimensions": "M 204.81875,5.2875 L 203.975,5.50625 L 203.31875,6.7875 L 202.06875,7.19375 L 202.25625,8.25625 L 201.63125,11.0375 L 201.4125,11.0375 L 201.19375,12.5375 L 201.85,12.5375 L 201.00625,12.725 L 200.7875,14.00625 L 201.19375,14.6625 L 201.63125,14.225 L 201.19375,14.88125 L 200.7875,14.6625 L 200.56875,15.50625 L 200.35,14.00625 L 199.2875,15.725 L 199.9125,15.94375 L 199.2875,15.94375 L 198.44375,18.06875 L 199.06875,18.06875 L 198.85,17.225 L 199.50625,17.4125 L 199.06875,17.63125 L 199.9125,18.2875 L 201.00625,18.2875 L 199.9125,18.69375 L 201.00625,19.13125 L 200.56875,19.35 L 200.7875,20.4125 L 199.9125,18.9125 L 199.50625,19.975 L 198.44375,20.81875 L 199.06875,22.75625 L 198.85,23.38125 L 199.2875,23.1625 L 199.06875,23.38125 L 199.50625,23.6 L 198.6625,23.6 L 197.56875,26.7875 L 198.6625,29.13125 L 198.00625,31.25625 L 198.85,35.1 L 197.56875,38.50625 L 196.94375,41.06875 L 197.38125,42.13125 L 195.88125,46.38125 L 194.1625,48.50625 L 193.75625,51.2875 L 191.81875,52.7875 L 188.225,53.63125 L 187.7875,53.4125 L 186.50625,52.56875 L 185.00625,52.35 L 184.1625,51.2875 L 182.6625,50.63125 L 182.25625,48.725 L 181.4125,47.88125 L 178.63125,47.0375 L 175.225,46.6 L 173.4125,44.19375 L 173.4125,117.35 L 194.1625,117.35 L 194.1625,134.2875 L 247.2875,134.35 L 248.1625,133.88125 L 248.1,133.35 L 248.81875,133.2875 L 248.9125,132.1625 L 250.00625,132.25625 L 250.7875,131.06875 L 251.35,131.0375 L 252.6625,131.44375 L 253.94375,131.6625 L 255.38125,131.1625 L 256.2875,131.06875 L 256.50625,131.6 L 257.225,131.5375 L 257.975,131.81875 L 258.56875,132.13125 L 260.19375,132.1625 L 261.31875,132.4125 L 261.975,133.25625 L 262.38125,133.75625 L 262.81875,134.44375 L 262.88125,135.1625 L 263.35,136.225 L 264.0375,135.7875 L 264.35,135.225 L 265.00625,134.4125 L 265.6625,133.63125 L 266.06875,134.31875 L 266.85,134.6 L 267.88125,134.13125 L 268.00625,133.56875 L 268.6625,132.7875 L 267.94375,132.85 L 267.6625,131.7875 L 267.75625,131.0375 L 268.6625,130.94375 L 269.75625,130.85 L 270.4125,130.225 L 271.2875,129.6 L 272.225,129.88125 L 273.0375,130.69375 L 274.06875,130.225 L 275.00625,130.50625 L 275.56875,130.44375 L 276.06875,130.225 L 276.6,129.81875 L 277.50625,129.9125 L 278.475,129.88125 L 278.50625,129.44375 L 277.6625,128.6 L 277.06875,126.0375 L 276.6,124.13125 L 275.975,123.25625 L 275.31875,123.69375 L 275.75625,123.0375 L 274.88125,122.63125 L 275.5375,121.975 L 274.88125,121.35 L 275.75625,120.9125 L 275.1,120.2875 L 275.1,119.63125 L 276.1625,120.9125 L 275.5375,119.00625 L 275.31875,119.63125 L 275.75625,117.94375 L 275.31875,117.6625 L 275.5375,115.81875 L 275.1,115.81875 L 275.975,112.4125 L 275.5375,112.4125 L 275.1,111.5375 L 274.69375,112.81875 L 274.88125,111.75625 L 274.25625,111.75625 L 274.69375,111.35 L 273.81875,110.69375 L 273.81875,109.4125 L 274.475,108.7875 L 273.19375,109.19375 L 274.25625,108.7875 L 274.0375,107.725 L 271.69375,107.06875 L 272.35,106.6625 L 271.06875,105.1625 L 271.2875,104.31875 L 270.63125,103.88125 L 270.4125,104.31875 L 270.63125,103.6625 L 269.35,103.0375 L 269.35,103.25625 L 268.2875,102.19375 L 267.225,99.4125 L 266.38125,99.19375 L 266.6,98.35 L 266.1625,98.975 L 266.1625,98.35 L 265.5375,98.13125 L 265.94375,98.975 L 265.1,98.56875 L 265.1,98.975 L 264.25625,98.56875 L 264.25625,98.975 L 261.475,95.1625 L 260.85,96.00625 L 259.975,94.725 L 260.4125,94.50625 L 259.7875,93.225 L 260.19375,92.81875 L 259.56875,90.475 L 259.975,90.475 L 260.19375,88.75625 L 259.7875,87.69375 L 259.7875,88.35 L 259.35,88.13125 L 258.9125,87.2875 L 259.56875,87.50625 L 259.7875,87.2875 L 259.13125,86.225 L 259.13125,87.06875 L 258.9125,86.225 L 258.50625,86.00625 L 258.2875,86.63125 L 258.9125,87.69375 L 258.50625,87.50625 L 258.9125,88.56875 L 255.94375,86.4125 L 254.88125,84.725 L 254.6625,85.1625 L 254.0375,86.225 L 254.6625,87.69375 L 255.1,88.56875 L 254.6625,88.13125 L 253.38125,86.63125 L 252.1,88.13125 L 252.75625,86.63125 L 251.88125,86.63125 L 252.31875,86.4125 L 252.1,86.00625 L 251.25625,86.225 L 252.1,85.7875 L 250.81875,82.81875 L 251.25625,80.475 L 251.0375,80.88125 L 250.19375,80.0375 L 249.975,80.475 L 249.975,78.5375 L 249.13125,78.975 L 249.35,78.31875 L 249.13125,78.31875 L 249.5375,77.25625 L 248.69375,76.4125 L 248.06875,76.85 L 248.25625,76.00625 L 246.7875,76.00625 L 246.56875,75.35 L 247.00625,75.13125 L 245.94375,74.50625 L 246.13125,74.06875 L 245.50625,73.44375 L 246.13125,73.225 L 245.725,72.7875 L 246.35,73.00625 L 246.56875,72.56875 L 247.63125,73.44375 L 246.35,71.31875 L 245.94375,71.50625 L 245.94375,70.88125 L 245.2875,70.88125 L 245.06875,70.0375 L 244.44375,70.0375 L 244.225,70.0375 L 244.225,70.88125 L 243.6,70.6625 L 242.725,69.81875 L 242.94375,69.6 L 242.94375,69.38125 L 241.88125,68.75625 L 240.6,68.975 L 240.19375,67.475 L 239.5375,67.475 L 239.975,68.5375 L 239.1,68.31875 L 237.85,67.0375 L 238.69375,67.475 L 237.4125,64.69375 L 237.4125,65.56875 L 235.50625,65.75625 L 234.63125,63.85 L 234.44375,64.69375 L 233.7875,64.69375 L 233.1625,63.85 L 231.00625,63.00625 L 229.75625,61.50625 L 230.1625,59.1625 L 229.31875,59.1625 L 227.81875,56.6 L 228.88125,52.975 L 228.475,52.975 L 228.475,51.2875 L 227.19375,48.94375 L 227.6,47.88125 L 226.5375,48.1 L 224.00625,44.69375 L 224.00625,43.63125 L 224.4125,43.63125 L 224.4125,42.13125 L 223.56875,41.06875 L 223.35,38.725 L 222.50625,37.88125 L 223.56875,36.6 L 223.56875,36.38125 L 222.9125,36.6 L 222.725,35.5375 L 223.56875,34.475 L 223.13125,34.475 L 222.725,33.6 L 221.44375,33.4125 L 220.56875,32.13125 L 219.1,31.69375 L 218.0375,28.9125 L 216.75625,29.975 L 215.9125,29.56875 L 215.475,30.85 L 214.19375,31.475 L 213.13125,30.63125 L 212.50625,27.85 L 211.4125,26.1625 L 211.85,24.0375 L 211.225,21.9125 L 211.4125,19.975 L 210.1625,20.4125 L 210.7875,18.475 L 209.50625,17.63125 L 209.50625,16.7875 L 208.44375,16.56875 L 208.225,15.06875 L 209.50625,14.00625 L 208.44375,13.6 L 207.6,13.81875 L 206.94375,13.1625 L 206.94375,9.975 L 206.1,7.4125 L 205.475,7.4125 L 205.0375,6.56875 L 205.0375,6.975 L 204.19375,7.4125 L 205.25625,5.69375 L 205.0375,5.50625 L 204.81875,5.2875 z M 275.536,104.1 L 276.386,105.378 L 274.682,107.295 L 275.109,107.295 L 274.682,108.785 L 274.258,109.85 L 275.109,111.341 L 277.026,105.59 L 276.599,104.738 L 276.599,103.248 L 275.536,104.1 z M 183.536,45.961 L 184.173,46.174 L 184.813,44.896 L 185.026,45.535 L 185.876,45.322 L 184.813,44.258 L 183.109,44.896 L 182.045,45.961 L 183.109,46.6 L 183.536,45.961 z",
			"abbreviation": "QLD",
			"label": {
				"name": "Queensland",
				"x": 215,
				"y": 100
			}
		},
		"WA": {
			"dimensions": "M 113.85,156.31875 L 113.85,117.35 L 113.85,117.35 L 113.85,33.81875 L 112.6,33.81875 L 112.19375,33.38125 L 111.35,33.19375 L 110.06875,33.38125 L 110.9125,34.0375 L 111.13125,34.88125 L 110.2875,33.81875 L 110.9125,34.88125 L 110.69375,34.6625 L 110.475,35.1 L 110.06875,34.6625 L 109.85,35.5375 L 109.4125,34.44375 L 109.00625,35.1 L 110.06875,38.06875 L 109.63125,38.06875 L 109.4125,37.00625 L 108.35,35.94375 L 108.35,37.6625 L 107.725,38.2875 L 108.13125,37.44375 L 107.725,36.7875 L 108.13125,36.6 L 107.9125,35.31875 L 108.56875,33.81875 L 108.13125,33.81875 L 109.00625,33.6 L 108.56875,32.975 L 109.00625,32.75625 L 107.50625,31.69375 L 107.2875,32.13125 L 105.38125,29.13125 L 103.88125,28.2875 L 103.6625,27.44375 L 103.0375,27.225 L 103.25625,27.85 L 102.6,27.225 L 102.1625,27.63125 L 102.1625,27.225 L 101.75625,27.63125 L 101.31875,26.56875 L 100.0375,26.1625 L 100.0375,26.56875 L 99.19375,26.38125 L 99.63125,27.44375 L 100.475,27.85 L 100.1,27.81875 L 98.975,27.63125 L 99.19375,28.2875 L 98.75625,28.725 L 98.56875,28.2875 L 98.35,29.56875 L 97.69375,28.2875 L 97.2875,28.50625 L 97.69375,27.44375 L 96.4125,28.2875 L 96.225,28.725 L 96.63125,29.13125 L 95.7875,29.56875 L 95.56875,28.50625 L 95.1625,28.50625 L 95.56875,28.06875 L 95.1625,28.06875 L 95.56875,27.63125 L 94.94375,28.06875 L 94.2875,27.85 L 94.2875,28.2875 L 94.1,27.85 L 94.1,28.2875 L 95.35,28.9125 L 94.50625,29.56875 L 94.725,30.19375 L 94.1,30.63125 L 94.50625,31.475 L 93.6625,31.475 L 93.6625,32.5375 L 93.00625,31.9125 L 93.225,31.06875 L 92.38125,31.25625 L 92.38125,30.63125 L 91.75625,32.31875 L 91.94375,30.4125 L 92.38125,29.7875 L 91.5375,29.35 L 91.5375,31.69375 L 90.88125,31.475 L 90.475,32.31875 L 90.25625,31.69375 L 89.81875,32.13125 L 90.0375,31.25625 L 89.19375,32.13125 L 89.6,32.31875 L 88.31875,32.975 L 88.975,33.81875 L 89.6,33.81875 L 88.75625,34.475 L 90.0375,34.88125 L 90.25625,34.475 L 90.6625,34.6625 L 89.81875,35.5375 L 90.88125,35.94375 L 89.81875,35.94375 L 89.4125,35.31875 L 88.5375,35.94375 L 87.9125,34.475 L 87.475,34.6625 L 87.69375,35.5375 L 86.4125,35.725 L 86.85,35.94375 L 86.63125,36.6 L 87.9125,35.725 L 86.63125,36.81875 L 87.06875,37.225 L 88.13125,36.6 L 88.13125,37.00625 L 88.5375,37.00625 L 87.9125,37.6625 L 89.19375,38.725 L 88.13125,37.88125 L 87.69375,38.2875 L 87.25625,37.44375 L 86.4125,37.225 L 86.4125,36.7875 L 85.7875,37.225 L 85.35,38.06875 L 85.13125,37.6625 L 84.9125,38.2875 L 84.06875,38.06875 L 84.2875,38.2875 L 83.44375,38.94375 L 83.85,39.13125 L 83.225,39.35 L 84.06875,41.69375 L 84.2875,41.31875 L 84.2875,41.475 L 84.725,40.85 L 84.35,41.19375 L 84.9125,40.19375 L 85.56875,39.7875 L 85.13125,40.19375 L 85.7875,40.19375 L 84.9125,40.85 L 84.725,42.35 L 85.13125,42.35 L 84.2875,42.75625 L 84.725,42.975 L 84.2875,43.19375 L 83.85,42.13125 L 83.44375,44.0375 L 84.9125,43.81875 L 85.75625,44.25625 L 83.85,44.475 L 83.44375,44.0375 L 83.00625,44.475 L 83.38125,44.69375 L 82.38125,44.88125 L 83.00625,44.69375 L 82.38125,44.475 L 81.725,43.63125 L 80.25625,42.975 L 80.88125,43.63125 L 80.44375,43.63125 L 80.88125,44.25625 L 80.0375,43.63125 L 80.0375,43.81875 L 78.975,43.4125 L 79.38125,43.4125 L 79.1625,42.975 L 79.6,42.975 L 78.75625,42.5375 L 78.75625,42.975 L 78.1,42.75625 L 78.31875,43.19375 L 77.9125,42.75625 L 78.31875,43.4125 L 77.9125,43.63125 L 78.75625,43.81875 L 78.975,44.25625 L 78.31875,44.0375 L 78.975,44.475 L 78.5375,44.475 L 78.31875,44.475 L 77.475,44.475 L 78.5375,45.1 L 77.06875,45.1 L 77.475,45.75625 L 77.69375,45.31875 L 78.31875,45.5375 L 77.475,46.1625 L 78.975,46.6 L 79.38125,47.88125 L 80.25625,47.44375 L 80.25625,47.0375 L 80.6625,47.225 L 79.6,48.2875 L 80.0375,48.725 L 79.38125,48.50625 L 80.475,50.44375 L 78.5375,48.50625 L 77.9125,48.725 L 78.75625,50.225 L 78.31875,50.00625 L 77.9125,51.06875 L 77.9125,52.13125 L 76.63125,50.85 L 75.975,48.725 L 75.13125,48.1 L 75.13125,46.38125 L 74.50625,46.38125 L 73.85,45.75625 L 74.06875,44.88125 L 74.725,44.69375 L 74.2875,44.0375 L 73.63125,44.25625 L 72.38125,46.38125 L 73.00625,47.0375 L 71.2875,46.81875 L 71.1,47.44375 L 71.50625,48.2875 L 70.6625,47.88125 L 70.6625,48.2875 L 69.81875,48.50625 L 69.1625,49.38125 L 69.6,49.56875 L 68.5375,50.44375 L 68.31875,52.35 L 68.94375,53.85 L 68.5375,55.31875 L 70.0375,55.5375 L 70.0375,56.38125 L 67.0375,58.5375 L 66.19375,58.725 L 65.5375,59.6 L 65.975,60.225 L 64.9125,60.44375 L 65.13125,61.2875 L 64.06875,63.225 L 61.50625,66.4125 L 55.5375,68.975 L 54.0375,69.1625 L 52.56875,69.1625 L 51.9125,69.6 L 51.06875,70.225 L 50.44375,69.6 L 48.50625,69.1625 L 48.725,69.6 L 48.725,69.81875 L 48.50625,69.6 L 48.1,69.38125 L 47.88125,69.6 L 46.38125,71.50625 L 41.9125,72.38125 L 41.9125,71.94375 L 40.225,73.00625 L 40.4125,73.44375 L 39.7875,73.44375 L 39.35,74.2875 L 38.2875,74.50625 L 38.2875,74.2875 L 36.6,75.13125 L 35.31875,74.50625 L 35.1,73.85 L 33.6,74.725 L 32.975,74.50625 L 32.5375,74.2875 L 33.19375,73.225 L 32.75625,73.225 L 31.69375,74.50625 L 31.9125,74.725 L 31.475,74.725 L 29.35,75.7875 L 28.69375,75.35 L 28.50625,76.4125 L 26.7875,77.25625 L 26.1625,78.5375 L 25.1,78.75625 L 24.0375,80.475 L 19.975,81.5375 L 18.2875,82.6 L 18.06875,83.88125 L 17.63125,84.06875 L 17.19375,83.88125 L 17.4125,84.725 L 16.7875,85.7875 L 17.19375,86.225 L 16.7875,86.00625 L 17.00625,86.4125 L 16.13125,87.475 L 15.725,86.85 L 14.6625,87.475 L 15.06875,86.00625 L 14.6625,86.4125 L 14.44375,84.94375 L 15.2875,82.38125 L 13.7875,82.81875 L 11.6625,87.9125 L 12.725,90.69375 L 12.31875,91.975 L 12.5375,94.50625 L 10.38125,97.50625 L 9.975,101.31875 L 11.6625,104.1 L 11.44375,104.5375 L 11.88125,106.225 L 12.725,106.88125 L 15.06875,111.56875 L 15.725,111.75625 L 15.94375,112.81875 L 15.2875,112.81875 L 15.50625,115.1625 L 14.44375,116.44375 L 13.38125,114.75625 L 13.1625,112.4125 L 13.1625,113.475 L 12.1,114.31875 L 12.31875,111.975 L 10.6,109.225 L 9.975,110.9125 L 10.38125,111.35 L 10.38125,110.475 L 11.0375,113.69375 L 13.1625,115.38125 L 12.94375,117.31875 L 11.6625,117.94375 L 11.44375,116.44375 L 11.25625,117.725 L 10.81875,115.1625 L 10.6,116.44375 L 9.75625,113.0375 L 9.975,115.81875 L 9.31875,115.38125 L 9.31875,113.0375 L 9.13125,114.75625 L 8.25625,114.1 L 13.7875,122.19375 L 15.06875,125.6 L 14.6625,126.6625 L 15.06875,128.81875 L 17.4125,131.56875 L 18.06875,132.85 L 17.85,133.69375 L 19.75625,136.25625 L 20.63125,139.25625 L 20.4125,143.06875 L 20.4125,143.50625 L 21.0375,146.9125 L 25.2875,155.85 L 25.50625,159.0375 L 26.56875,158.4125 L 26.56875,158.81875 L 25.50625,159.0375 L 25.725,160.1 L 25.2875,160.75625 L 25.50625,162.25625 L 24.6625,163.94375 L 25.2875,168.85 L 22.975,171.6 L 21.88125,171.6 L 20.63125,170.75625 L 20.63125,175.225 L 21.475,177.56875 L 21.69375,177.1625 L 22.94375,176.94375 L 25.2875,178.225 L 27.225,181.19375 L 29.7875,182.0375 L 29.975,181.4125 L 30.85,182.0375 L 29.7875,182.0375 L 31.475,183.1 L 32.13125,182.475 L 33.38125,183.1 L 36.38125,182.69375 L 38.06875,183.75625 L 38.50625,182.88125 L 40.4125,183.5375 L 40.85,183.31875 L 39.7875,182.88125 L 40.225,182.0375 L 40.63125,181.81875 L 40.4125,182.69375 L 42.13125,182.69375 L 41.9125,182.0375 L 43.4125,181.81875 L 43.63125,180.5375 L 45.5375,179.69375 L 45.75625,178.85 L 46.81875,178.4125 L 46.38125,178.00625 L 49.1625,178.85 L 49.38125,178.00625 L 50.225,178.225 L 50.225,177.35 L 51.2875,177.56875 L 50.44375,176.725 L 53.4125,173.94375 L 54.0375,173.94375 L 56.81875,174.38125 L 57.88125,173.5375 L 63.225,172.88125 L 65.975,173.725 L 67.475,173.1 L 68.31875,174.6 L 69.38125,174.6 L 69.81875,173.725 L 71.2875,174.1625 L 71.50625,173.5375 L 74.2875,173.31875 L 74.9125,173.725 L 75.13125,174.6 L 76.63125,173.5375 L 77.69375,173.94375 L 80.6625,170.975 L 81.5375,167.56875 L 82.38125,166.69375 L 86.225,165.44375 L 93.88125,160.94375 L 95.56875,160.5375 L 98.7875,160.94375 L 102.38125,160.75625 L 109.225,158.63125 L 113.85,156.31875 z M 87.25625,44.25625 L 86.19375,44.69375 L 85.81875,44.2875 L 86.19375,44.475 L 87.25625,44.25625 z M 8.693,113.044 L 6.989,109.211 L 6.989,111.341 L 8.693,114.109 L 8.693,113.044 z",
			"abbreviation": "WA",
			"label": {
				"name": "Western\nAustralia",
				"x": 65,
				"y": 110
			}
		},
		"VIC": {
			"dimensions": "M 253.1625,203.75625 L 252.5375,203.13125 L 252.725,203.13125 L 252.00625,202.475 L 250.2875,202.35 L 242.1,198.2875 L 242.25625,196.94375 L 241.9125,195.85 L 241.19375,194.81875 L 240.63125,193.6 L 240.81875,192.44375 L 239.4125,191.69375 L 238.50625,192.0375 L 237.7875,192.31875 L 237.0375,192.44375 L 235.975,192.7875 L 234.50625,193.19375 L 232.56875,192.725 L 231.50625,192.13125 L 230.63125,192.44375 L 229.975,193.13125 L 228.7875,192.9125 L 227.56875,192.35 L 226.6625,192.475 L 225.225,191.75625 L 223.38125,192.0375 L 222.5375,191.6 L 221.81875,191.69375 L 221.31875,192.35 L 221.56875,193.81875 L 220.25625,194.00625 L 218.63125,193.31875 L 217.35,192.38125 L 216.975,191.1 L 215.00625,189.31875 L 213.38125,188.63125 L 212.25625,188.6 L 210.81875,186.5375 L 210.19375,183.7875 L 209.19375,183.38125 L 207.475,183.25625 L 206.50625,183.0375 L 205.44375,183.56875 L 205.4125,184.5375 L 204.31875,183.56875 L 203.81875,181.5375 L 202.1,180.1 L 199.975,179.85 L 198.225,179.56875 L 197.19375,180.2875 L 195.35,179.4125 L 194.225,179.6 L 194.1625,179.38125 L 194.1625,207.7875 L 194.6,207.81875 L 196.94375,209.725 L 196.94375,210.7875 L 197.6,210.56875 L 198.225,211.00625 L 199.50625,209.50625 L 202.06875,210.7875 L 203.75625,210.35 L 211.63125,214.63125 L 214.85,211.44375 L 217.38125,209.725 L 218.88125,209.725 L 219.31875,208.44375 L 217.81875,208.88125 L 216.975,208.225 L 218.0375,208.225 L 220.7875,206.1 L 222.06875,208.6625 L 220.7875,210.35 L 218.88125,209.94375 L 220.7875,211.63125 L 222.06875,210.7875 L 222.725,211.00625 L 222.9125,209.2875 L 224.4125,209.2875 L 224.85,210.56875 L 224.00625,210.7875 L 223.7875,212.06875 L 225.25625,213.13125 L 226.75625,212.9125 L 226.975,213.35 L 226.35,213.13125 L 227.4125,215.0375 L 228.25625,214.4125 L 229.1,214.85 L 228.88125,214.19375 L 229.75625,215.9125 L 230.81875,216.975 L 231.225,214.19375 L 229.94375,215.0375 L 229.5375,213.35 L 231.6625,213.35 L 234.19375,212.50625 L 238.25625,208.225 L 241.0375,206.5375 L 237.63125,208.00625 L 239.5375,206.75625 L 239.475,206.6625 L 238.9125,206.1 L 240.38125,206.5375 L 242.1,205.88125 L 241.88125,206.31875 L 251.25625,205.475 L 253.1625,203.75625 z ",
			"abbreviation": "VIC",
			"label": {
				"name": "Victoria",
				"x": 220,
				"y": 204
			}
		},
		"SA": {
			"dimensions": "M 194.1625,207.7875 L 194.1625,179.38125 L 194.1625,179.35 L 194.1625,134.2875 L 194.1625,117.35 L 173.4125,117.35 L 173.4125,117.35 L 113.85,117.35 L 113.85,156.31875 L 114.31875,156.06875 L 120.9125,155.4125 L 121.975,155.19375 L 126.25625,155.63125 L 128.6,154.35 L 132.63125,156.475 L 135.63125,158.81875 L 137.5375,158.81875 L 137.31875,158.4125 L 137.75625,158.19375 L 139.225,158.19375 L 141.7875,160.31875 L 144.35,160.31875 L 143.69375,159.69375 L 144.13125,159.475 L 144.56875,159.88125 L 144.975,159.25625 L 147.31875,161.6 L 146.69375,161.81875 L 146.69375,162.88125 L 147.975,162.225 L 148.81875,162.44375 L 149.6625,164.1625 L 149.0375,165.00625 L 149.25625,164.35 L 148.19375,164.35 L 148.6,165.225 L 148.19375,165.85 L 149.0375,166.06875 L 148.6,166.69375 L 149.88125,167.975 L 149.475,166.69375 L 150.1,167.975 L 150.725,167.56875 L 152.00625,168.4125 L 151.38125,167.7875 L 152.44375,167.975 L 152.00625,168.4125 L 153.2875,170.13125 L 153.2875,171.38125 L 155.63125,173.5375 L 156.9125,179.2875 L 157.13125,178.63125 L 157.35,179.2875 L 157.75625,179.475 L 156.9125,179.69375 L 156.475,178.85 L 156.69375,178.63125 L 155.85,178.4125 L 155.85,178.00625 L 155.19375,179.2875 L 156.06875,178.85 L 158.63125,182.0375 L 159.69375,181.4125 L 160.75625,182.69375 L 161.1625,180.35 L 159.69375,180.975 L 160.31875,180.5375 L 160.5375,178.85 L 161.38125,178.4125 L 161.81875,178.85 L 161.81875,177.35 L 165.00625,173.725 L 167.56875,172.44375 L 166.9125,172.6625 L 167.35,171.81875 L 167.7875,172.25625 L 169.25625,171.81875 L 170.75625,167.56875 L 172.0375,166.06875 L 172.88125,166.50625 L 172.88125,162.225 L 173.94375,164.56875 L 174.1625,166.50625 L 174.7875,167.13125 L 173.1,168.63125 L 174.38125,170.975 L 171.81875,173.5375 L 171.19375,175.44375 L 170.75625,175.6625 L 171.19375,176.94375 L 170.5375,178.19375 L 170.975,178.00625 L 171.19375,179.25625 L 170.75625,181.81875 L 170.31875,182.25625 L 167.7875,181.6 L 166.69375,184.81875 L 168.85,184.6 L 170.5375,183.31875 L 172.0375,183.94375 L 172.88125,183.5375 L 172.44375,183.1 L 173.50625,180.75625 L 173.725,178.63125 L 175.00625,175.6625 L 178.00625,180.81875 L 178.19375,181.19375 L 177.7875,181.4125 L 177.56875,180.75625 L 177.35,185.44375 L 175.00625,187.56875 L 178.00625,187.7875 L 179.25625,186.725 L 180.35,186.94375 L 183.5375,189.475 L 180.35,187.1625 L 183.1,189.2875 L 184.9125,191.63125 L 183.5375,189.50625 L 184.6,190.35 L 185.88125,193.13125 L 185.31875,192.25625 L 186.94375,196.5375 L 186.725,197.6 L 185.6625,198.6625 L 186.50625,199.94375 L 186.1,200.56875 L 187.7875,202.9125 L 190.25625,206.225 L 190.35,206.5375 L 191.63125,207.6 L 194.1625,207.7875 z M 172.887,189.499 L 173.1,188.433 L 171.608,188.433 L 172.035,187.156 L 165.007,188.646 L 164.581,189.711 L 165.86,191.202 L 167.777,190.989 L 169.267,190.563 L 170.97,191.415 L 171.822,190.776 L 172.035,189.923 L 174.804,189.923 L 175.229,189.072 L 173.738,188.433 L 172.887,189.499 z ",
			"abbreviation": "SA",
			"label": {
				"name": "South\nAustralia",
				"x": 155,
				"y": 135
			}
		},
		"TAS": {
			"dimensions": "M 214.201,220.804 L 213.563,222.082 L 213.776,224.637 L 213.776,225.489 L 214.201,225.915 L 215.48,224.637 L 215.267,221.656 L 214.201,220.804 z M 240.397,223.785 L 240.397,224.637 L 241.248,225.489 L 241.887,226.98 L 243.59,226.34 L 243.165,225.276 L 242.738,225.702 L 243.165,224.637 L 243.377,224.211 L 242.525,224.211 L 240.821,222.082 L 239.544,223.573 L 240.397,223.785 z M 239.118,250.619 L 238.693,251.897 L 239.544,252.109 L 239.118,252.536 L 239.757,253.387 L 240.397,253.174 L 240.397,252.322 L 241.248,253.387 L 240.821,251.47 L 239.757,251.683 L 239.118,250.619 z M 243.377,238.692 L 242.952,237.415 L 243.59,235.711 L 242.952,235.073 L 243.59,233.368 L 241.887,231.239 L 240.821,231.026 L 240.397,232.304 L 239.118,231.665 L 237.627,233.368 L 236.563,232.729 L 235.498,233.582 L 234.646,233.156 L 233.156,233.794 L 234.22,234.86 L 234.006,235.285 L 232.729,233.794 L 231.666,234.646 L 231.876,235.499 L 231.452,234.433 L 229.536,234.86 L 224.637,231.877 L 223.359,231.877 L 222.932,230.813 L 222.932,231.665 L 222.082,231.452 L 222.082,231.877 L 219.1,230.387 L 219.314,232.09 L 218.674,233.368 L 219.525,236.989 L 221.017,239.119 L 220.59,239.544 L 222.721,242.313 L 222.721,244.229 L 223.359,243.59 L 224.424,245.507 L 224.849,245.507 L 224.424,246.998 L 224.211,245.721 L 222.294,244.016 L 222.932,247.85 L 223.572,248.063 L 224.637,251.257 L 225.702,251.683 L 226.766,254.026 L 227.406,254.026 L 226.979,253.813 L 227.406,252.96 L 227.832,254.239 L 229.536,254.239 L 229.322,254.665 L 227.832,254.239 L 227.832,254.877 L 227.406,254.665 L 228.044,256.369 L 229.536,255.729 L 231.876,256.156 L 231.666,255.517 L 232.516,257.007 L 233.793,257.007 L 234.646,255.729 L 234.006,255.09 L 234.86,255.304 L 235.073,254.452 L 234.433,254.239 L 235.286,253.813 L 234.433,252.749 L 234.646,252.322 L 234.646,252.96 L 235.073,253.387 L 235.286,252.749 L 235.286,253.387 L 236.136,253.813 L 236.35,251.47 L 236.99,251.683 L 236.99,250.406 L 235.923,248.702 L 237.414,250.619 L 237.84,250.406 L 237.414,251.683 L 238.267,251.044 L 238.053,249.98 L 238.693,249.767 L 237.627,249.128 L 238.693,249.34 L 239.118,250.406 L 239.97,250.193 L 241.035,248.276 L 240.397,247.211 L 241.248,246.785 L 241.46,245.082 L 240.821,245.294 L 241.887,243.165 L 242.525,243.165 L 241.887,242.952 L 242.738,241.674 L 242.313,242.952 L 243.377,243.377 L 243.377,244.656 L 243.804,244.016 L 243.165,242.526 L 243.377,238.692 z M 241.248,228.257 L 243.377,228.257 L 243.59,228.897 L 244.442,228.257 L 243.59,227.192 L 241.248,228.257 z",
			"abbreviation": "TAS",
			"label": {
				"textAnchor": "right",
				"name": "Tasmania",
				"x": 155,
				"y": 245,
				"fill": "black"
			}
		},
		"ACT": {
			"dimensions": "M 245.95389,185.84376 C 246.41125,185.82547 246.88157,185.90065 247.31277,186.09855 C 247.68261,186.26829 247.80326,186.51013 247.77989,186.77799 C 247.75652,187.04585 247.56857,187.345 247.35524,187.66976 C 246.92856,188.31926 246.34574,189.03605 246.37854,189.66562 C 246.30185,190.01096 245.94449,190.75975 245.44431,190.85464 C 245.19422,190.90208 244.88988,190.78812 244.59501,190.38752 C 244.30013,189.98692 244.00218,189.28493 243.70324,188.17934 C 243.52074,187.5044 243.73358,186.9315 244.17036,186.5232 C 244.60713,186.1149 245.26786,185.87121 245.95389,185.84376 z",
			"abbreviation": "ACT",
			"label": {
				"name": "Australian\nCapital\nTerritory",
				"x": 260,
				"y": 190,
				"fill": "black",
				"textAnchor": "left"
			}
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-australia-map.js.map