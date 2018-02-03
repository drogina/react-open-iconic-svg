"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Clipboard;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clipboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.5 0c-.28 0-.5.22-.5.5v.5h-.75c-.14 0-.25.11-.25.25v.75h3v-.75c0-.14-.11-.25-.25-.25h-.75v-.5c0-.28-.22-.5-.5-.5zm-3.25 1c-.14 0-.25.11-.25.25v6.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-6.5c0-.14-.11-.25-.25-.25h-.75v2h-5v-2h-.75z" })
  );
}