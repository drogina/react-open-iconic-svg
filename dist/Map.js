"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Map;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Map(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M0 0v8h8v-2.38a.5.5 0 0 0 0-.22v-5.41h-8zm1 1h6v4h-1.5a.5.5 0 0 0-.09 0 .5.5 0 1 0 .09 1h1.5v1h-6v-6zm2.5 1c-.83 0-1.5.67-1.5 1.5 0 1 1.5 2.5 1.5 2.5s1.5-1.5 1.5-2.5c0-.83-.67-1.5-1.5-1.5zm0 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z" })
  );
}