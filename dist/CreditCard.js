"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CreditCard;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CreditCard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.25 0c-.14 0-.25.11-.25.25v.75h8v-.75c0-.14-.11-.25-.25-.25h-7.5zm-.25 2v3.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25v-3.75h-8zm1 2h1v1h-1v-1zm2 0h1v1h-1v-1z", transform: "translate(0 1)" })
  );
}