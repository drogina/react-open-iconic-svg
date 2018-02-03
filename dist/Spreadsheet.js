"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Spreadsheet;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spreadsheet(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75h-6.5zm.25 1h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1z" })
  );
}