"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Book;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Book(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: 8, height: 8, viewBox: "0 0 8 8" }, props),
    _react2.default.createElement("path", { d: "M1 0c-.07 0-.13.01-.19.03-.39.08-.7.39-.78.78-.03.06-.03.12-.03.19v5.5c0 .83.67 1.5 1.5 1.5h5.5v-1h-5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5.5v-5.5c0-.28-.22-.5-.5-.5h-.5v3l-1-1-1 1v-3h-3z" })
  );
}