'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'peritext-contextualizer',
  id: 'p5',
  name: 'p5 (processing js) player',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true
  },
  model: {
    acceptedResourceTypes: [{
      // type: 'codefiles'
      test: function test(resource) {
        if (resource.metadata.type === 'codefiles') {
          var code = resource.data && resource.data.code;
          if (!code || (0, _keys2.default)(code).length !== 1) {
            return null;
          }
          try {
            var sketch = void 0;
            if (code) {
              var finalCode = (0, _keys2.default)(code).reduce(
              // joining all the code files into one
              function (finalCode, key) {
                return finalCode + code[key] + '\n';
              }, '');
              eval('sketch = ' + finalCode);
              return typeof sketch === 'function';
            }
            return false;
          } catch (e) {
            return false;
          }
        }
      }
    }],
    block: {
      options: [{
        id: 'thumbnailUrl',
        title: {
          fr: 'Vignette (pour les contextualisations statiques)',
          en: 'Thumbnail (for static contextualizations)'
        },
        type: 'imageUrl'
      }]
    }
  }
};