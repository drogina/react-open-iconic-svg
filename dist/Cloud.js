"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Cloud;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cloud(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M4.5 0c-1.21 0-2.27.86-2.5 2-1.1 0-2 .9-2 2s.9 2 2 2h4.5c.83 0 1.5-.67 1.5-1.5 0-.65-.42-1.29-1-1.5v-.5c0-1.38-1.12-2.5-2.5-2.5z", transform: "translate(0 1)" })
  );
}