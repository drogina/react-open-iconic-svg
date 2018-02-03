"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bluetooth;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bluetooth(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M1.5 0v2.5l-.75-.75-.75.75 1.5 1.5-1.5 1.5.75.75.75-.75v2.5h.5l3.5-2.5-2.25-1.53 2.25-1.47-3.5-2.5h-.5zm1 1.5l1.5 1-1.5 1v-2zm0 3l1.5 1-1.5 1v-2z", transform: "translate(1)" })
  );
}