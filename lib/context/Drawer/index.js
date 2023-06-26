"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Drawer["default"];
  }
});
exports.useDrawerContext = useDrawerContext;
var _react = require("react");
var _Context = _interopRequireDefault(require("./Context"));
var _Drawer = _interopRequireDefault(require("./Drawer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// src/context/Drawer/index.tsx:

function useDrawerContext() {
  return (0, _react.useContext)(_Context["default"]);
}