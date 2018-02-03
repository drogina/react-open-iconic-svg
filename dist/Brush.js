"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Brush;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Brush(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M7.44.03c-.03 0-.04.02-.06.03l-3.75 2.66c-.04.03-.1.11-.13.16l-.13.25c.72.23 1.27.78 1.5 1.5l.25-.13c.05-.03.12-.08.16-.13l2.66-3.75c.03-.05.04-.09 0-.13l-.44-.44c-.02-.02-.04-.03-.06-.03zm-4.78 3.97c-.74 0-1.31.61-1.31 1.34 0 .99-.55 1.85-1.34 2.31.39.22.86.34 1.34.34 1.47 0 2.66-1.18 2.66-2.66 0-.74-.61-1.34-1.34-1.34z" })
  );
}