"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProviders = void 0;
var _Drawer = _interopRequireDefault(require("@/context/Drawer"));
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ContextProviders = function ContextProviders(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Drawer["default"], null, children);
};
exports.ContextProviders = ContextProviders;
var element = document.getElementById('container');
if (!element) {
  throw new Error("Couldn't find root element");
}
var root = (0, _client.createRoot)(element);
root.render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(ContextProviders, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "HELLO"))));