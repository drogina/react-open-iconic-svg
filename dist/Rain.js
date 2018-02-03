"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Rain;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rain(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M4.5 0c-1.21 0-2.27.86-2.5 2-1.1 0-2 .9-2 2 0 .53.2.99.53 1.34.26-.22.6-.34.97-.34.2 0 .39.05.56.13.17-.64.74-1.13 1.44-1.13.69 0 1.27.49 1.44 1.13.17-.07.36-.13.56-.13.63 0 1.15.39 1.38.94.64-.17 1.13-.75 1.13-1.44 0-.65-.42-1.29-1-1.5v-.5c0-1.38-1.12-2.5-2.5-2.5zm-1.16 5a.5.5 0 0 0-.34.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.59-.5.5.5 0 0 0-.06 0zm-2 1a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5.5.5 0 0 0-.06 0zm4 0a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5.5.5 0 0 0-.06 0z" })
  );
}