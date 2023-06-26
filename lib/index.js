"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProviders = void 0;
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _Drawer = _interopRequireDefault(require("@/context/Drawer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// In ContextProviders.tsx

// import { ThemeProvider } from './ThemeContext';
// import { UserProvider } from './UserContext';
// import { LocaleProvider } from './LocaleContext';
// import other providers...

var ContextProviders = function ContextProviders(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Drawer["default"], null, children);
};
exports.ContextProviders = ContextProviders;
var element = document.getElementById('root');
var root = (0, _client.createRoot)(document.getElementById('container'));
root.render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(ContextProviders, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "HELLO"))));