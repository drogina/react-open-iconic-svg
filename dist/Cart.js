"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Cart;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M.34 0a.5.5 0 0 0 .16 1h1.5l.09.25.41 1.25.41 1.25c.04.13.21.25.34.25h3.5c.14 0 .3-.12.34-.25l.81-2.5c.04-.13-.02-.25-.16-.25h-4.44l-.38-.72a.5.5 0 0 0-.44-.28h-2a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0zm3.16 5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z", transform: "translate(0 1)" })
  );
}