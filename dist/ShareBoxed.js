"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ShareBoxed;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShareBoxed(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-1.25h-1v1h-4v-5h2v-1h-2.25zm5.25 0v1c-2.05 0-3.7 1.54-3.94 3.53.21-.88.99-1.53 1.94-1.53h2v1l2-2-2-2z" })
  );
}