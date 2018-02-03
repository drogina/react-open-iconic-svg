"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Dollar;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dollar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M2 0v1h-.75c-.68 0-1.25.57-1.25 1.25v.5c0 .68.44 1.24 1.09 1.41l2.56.66c.14.04.34.29.34.44v.5c0 .14-.11.25-.25.25h-2.5c-.12 0-.21-.04-.25-.06v-.94h-1v1c0 .34.2.63.44.78.23.16.52.22.81.22h.75v1h1v-1h.75c.69 0 1.25-.56 1.25-1.25v-.5c0-.68-.44-1.24-1.09-1.41l-2.56-.66c-.14-.04-.34-.29-.34-.44v-.5c0-.14.11-.25.25-.25h2.5c.11 0 .21.04.25.06v.94h1v-1c0-.34-.2-.63-.44-.78-.23-.16-.52-.22-.81-.22h-.75v-1h-1z", transform: "translate(1)" })
  );
}