"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Dial;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dial(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M4 0c-2.2 0-4 1.8-4 4h1c0-1.66 1.34-3 3-3s3 1.34 3 3h1c0-2.2-1.8-4-4-4zm-.59 2.09c-.81.25-1.41 1.01-1.41 1.91 0 1.11.9 2 2 2 1.11 0 2-.89 2-2 0-.9-.59-1.65-1.41-1.91l-.59.88-.59-.88z", transform: "translate(0 1)" })
  );
}