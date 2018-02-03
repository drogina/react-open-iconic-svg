"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = HardDrive;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HardDrive(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.19 0c-.11 0-.19.08-.19.19v3.31c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-3.31c0-.11-.08-.19-.19-.19h-6.63zm-.19 4.91v2.91c0 .11.08.19.19.19h6.63c.11 0 .19-.08.19-.19v-2.91c-.16.06-.32.09-.5.09h-6c-.18 0-.34-.04-.5-.09zm5.5 1.09c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z" })
  );
}