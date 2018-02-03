"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BritishPound;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BritishPound(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3 0c-.62 0-1.16.26-1.5.69-.34.43-.5.99-.5 1.56 0 .69.16 1.25.25 1.75h-1.25v1h1.22c-.11.45-.37.96-1.06 1.66l-.16.13v1.22h6v-1h-4.91c.64-.73.98-1.4 1.13-2h1.78v-1h-1.72c-.08-.68-.28-1.24-.28-1.75 0-.39.11-.73.28-.94.17-.21.37-.31.72-.31.39 0 .61.11.75.25s.25.36.25.75h1c0-.58-.17-1.1-.53-1.47-.37-.37-.89-.53-1.47-.53z", transform: "translate(1)" })
  );
}