"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bullhorn;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bullhorn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M6 0v6c.03.01.07 0 .09 0h.81c.05 0 .09-.04.09-.09v-5.81c0-.06-.04-.09-.09-.09h-.91zm-1 .5l-2.91 1.47c-.05.02-.13.03-.19.03h-1.81c-.06 0-.09.04-.09.09v1.81c0 .06.04.09.09.09h.91l1.03 2.72c.11.25.44.36.69.25.25-.11.36-.44.25-.69l-.75-1.78c.03-.14.13-.22.28-.22v-.03l2.5 1.25v-5z" })
  );
}