"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProviders = void 0;
var _react = _interopRequireDefault(require("react"));
var _Drawer = _interopRequireDefault(require("@/context/Drawer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ContextProviders = function ContextProviders(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Drawer["default"], null, children);
};
exports.ContextProviders = ContextProviders;