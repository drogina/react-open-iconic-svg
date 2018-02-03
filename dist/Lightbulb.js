"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Lightbulb;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lightbulb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M3.41 0a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 1 0 .44.88l3-1.5a.5.5 0 0 0-.31-.94zm1 1.5a.5.5 0 0 0-.13.06l-4 2a.5.5 0 1 0 .44.88l4-2a.5.5 0 0 0-.31-.94zm0 2a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 0 0 .22.94h2a.5.5 0 0 0 .16-1l1.06-.56a.5.5 0 0 0-.31-.94zm-2.56 3.5a.5.5 0 0 0 .16 1h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0z", transform: "translate(1)" })
  );
}