"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Dashboard;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dashboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M4 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-1.66 1a.5.5 0 0 0-.19.84l.91.91c-.02.08-.06.16-.06.25 0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1c-.09 0-.17.04-.25.06l-.91-.91a.5.5 0 0 0-.44-.16.5.5 0 0 0-.06 0zm3.16 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z" })
  );
}