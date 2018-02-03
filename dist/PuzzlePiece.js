"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PuzzlePiece;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PuzzlePiece(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3 0c-.28 0-.54.1-.72.28-.18.18-.28.44-.28.72 0 .28.18.48.28.72.03.06.03.16.03.28h-2.31v6h2.31c0-.12-.01-.22-.03-.28-.1-.24-.28-.44-.28-.72 0-.28.1-.54.28-.72.18-.18.44-.28.72-.28.28 0 .54.1.72.28.18.18.28.44.28.72 0 .28-.18.48-.28.72-.03.06-.03.16-.03.28h2.31v-2.31c.12 0 .22.01.28.03.24.1.44.28.72.28.28 0 .54-.1.72-.28.18-.18.28-.44.28-.72 0-.28-.1-.54-.28-.72-.18-.18-.44-.28-.72-.28-.28 0-.48.18-.72.28-.06.03-.16.03-.28.03v-2.31h-2.31c0-.12.01-.22.03-.28.1-.24.28-.44.28-.72 0-.28-.1-.54-.28-.72-.18-.18-.44-.28-.72-.28z" })
  );
}