"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Calculator;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Calculator(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.09 0c-.06 0-.09.04-.09.09v7.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-7.81c0-.06-.04-.09-.09-.09h-6.81zm.91 1h5v2h-5v-2zm0 3h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v3h-1v-3zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1z" })
  );
}