'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P5Wrapper = void 0;
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();
if (inBrowser) {
  P5Wrapper = require('react-p5-wrapper');
}

exports.default = function (_ref) {
  var code = _ref.resource.data.code;

  if (!code || (0, _keys2.default)(code).length !== 1 || !inBrowser) {
    return null;
  }
  var sketch = void 0;
  var finalCode = (0, _keys2.default)(code).reduce(
  // joining all the code files into one
  function (finalCode, key) {
    return finalCode + code[key] + '\n';
  }, '');
  try {
    eval('sketch = ' + finalCode);
    return _react2.default.createElement(
      'figure',
      {
        className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-p5'
      },
      _react2.default.createElement(P5Wrapper, { sketch: sketch })
    );
  } catch (e) {
    console.log('error', e);
    return _react2.default.createElement(
      'figure',
      {
        className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-p5'
      },
      '\u2620\u2620\u2620\u2620'
    );
  }
};