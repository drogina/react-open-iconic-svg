"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridFourUp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GridFourUp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M0 0v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm-6 2v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm-6 2v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm-6 2v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1zm2 0v1h1v-1h-1z" })
  );
}