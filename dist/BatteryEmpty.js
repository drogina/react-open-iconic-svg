"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BatteryEmpty;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BatteryEmpty(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.09 0c-.06 0-.09.04-.09.09v5.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-1.91h1v-2h-1v-1.91c0-.06-.04-.09-.09-.09h-6.81zm.91 1h5v4h-5v-4z", transform: "translate(0 1)" })
  );
}