"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ActionRedo;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActionRedo(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.5 0c-1.93 0-3.5 1.57-3.5 3.5 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v.5h-1l2 2 2-2h-1v-.5c0-1.93-1.57-3.5-3.5-3.5z", transform: "translate(0 1)" })
  );
}