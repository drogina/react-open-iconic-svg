"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Script;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Script(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3 0c-.55 0-1 .45-1 1v5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5h-1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3h-4v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5h4v-2c0-.55-.45-1-1-1h-4z" })
  );
}