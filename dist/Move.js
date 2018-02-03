"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Move;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Move(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.5 0l-1.5 1.5h1v1.5h-1.5v-1l-1.5 1.5 1.5 1.5v-1h1.5v1.5h-1l1.5 1.5 1.5-1.5h-1v-1.5h1.5v1l1.5-1.5-1.5-1.5v1h-1.5v-1.5h1l-1.5-1.5z" })
  );
}