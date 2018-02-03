"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LoopCircular;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoopCircular(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M4 0c-1.65 0-3 1.35-3 3h-1l1.5 2 1.5-2h-1c0-1.11.89-2 2-2v-1zm2.5 1l-1.5 2h1c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3h1l-1.5-2z", transform: "translate(0 1)" })
  );
}