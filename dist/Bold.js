"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bold;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bold(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M0 0v1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1v1h5.5c1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.44-2.25.27-.34.44-.78.44-1.25 0-1.1-.89-2-2-2h-5zm3 1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v-2zm0 3h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.5v-3z" })
  );
}