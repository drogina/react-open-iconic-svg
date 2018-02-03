"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Tablet;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tablet(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.34 0c-.18 0-.34.16-.34.34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34v-7.31c0-.18-.16-.34-.34-.34h-6.31zm.66 1h5v5h-5v-5zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75z" })
  );
}