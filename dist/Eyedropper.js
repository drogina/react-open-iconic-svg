"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Eyedropper;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Eyedropper(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.31 0a.5.5 0 0 0-.19.84l.63.63-3.59 3.66-.16.16v2.7199999999999998h2.69l.16-.16 3.66-3.66.63.66a.5.5 0 1 0 .72-.69l-.94-.94.66-.66c.59-.58.59-1.54 0-2.13-.57-.57-1.56-.57-2.13 0l-.66.66-.94-.94a.5.5 0 0 0-.47-.16.5.5 0 0 0-.06 0zm1.16 2.19l1.31 1.31-3.16 3.16-1.28-1.31 3.13-3.16z" })
  );
}