"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = VerticalAlignTop;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerticalAlignTop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M0 0v1h8v-1h-8zm.09 2c-.06 0-.09.04-.09.09v4.81c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-4.81c0-.06-.04-.09-.09-.09h-1.81zm3 0c-.06 0-.09.04-.09.09v2.81c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-2.81c0-.06-.04-.09-.09-.09h-1.81zm3 0c-.05 0-.09.04-.09.09v4.81c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-4.81c0-.06-.04-.09-.09-.09h-1.81z" })
  );
}