"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PieChart;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PieChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.5 0c-.97 0-1.84.4-2.47 1.03l2.97 2.97v-3.97c-.16-.02-.33-.03-.5-.03zm1.5 1.06v3.41l-2.72 2.72c.61.5 1.37.81 2.22.81 1.93 0 3.5-1.57 3.5-3.5 0-1.76-1.31-3.19-3-3.44zm-4.09 1.31c-.56.54-.91 1.29-.91 2.13 0 .96.46 1.79 1.16 2.34l2.13-2.13-2.38-2.34z" })
  );
}