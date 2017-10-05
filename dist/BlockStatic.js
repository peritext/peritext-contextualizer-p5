"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var thumbnailUrl = _ref.contextualizer.thumbnailUrl;

  return _react2.default.createElement(
    "figure",
    { className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-video" },
    thumbnailUrl ? _react2.default.createElement("img", { className: "contextualizer-thumbnail", src: thumbnailUrl }) : _react2.default.createElement("div", { className: "thumbnail-placeholder" })
  );
};