"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CloseOutlined = _interopRequireDefault(require("@mui/icons-material/CloseOutlined"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _Fab = _interopRequireDefault(require("@mui/material/Fab"));
var _system = require("@mui/system");
var _Context = _interopRequireDefault(require("./Context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // src/context/Drawer/Drawer.tsx
/**
 * This is a customizable Drawer component.
 *
 * openDrawer function can be used to open the drawer. It takes in the following parameters:
 * - content: the ReactNode to be displayed in the drawer
 * - anchor: the anchor position of the drawer ('left' | 'right' | 'top' | 'bottom'). Defaults to 'right'.
 * - width: width of the drawer as a percentage of the viewport width. Defaults to 80.
 * - backdropClickClose: if true, clicking on the backdrop will close the drawer. Defaults to true.
 *
 * closeDrawer function can be used to close the drawer.
 */

var Drawer = function Drawer(_ref) {
  var children = _ref.children;
  var R = _react["default"];
  var theme = (0, _system.useTheme)();
  var _ref2 = theme || {},
    direction = _ref2.direction;
  var _useState = (0, _react.useState)(direction === 'rtl' ? 'left' : 'right'),
    _useState2 = _slicedToArray(_useState, 2),
    anchor = _useState2[0],
    setAnchor = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(80),
    _useState8 = _slicedToArray(_useState7, 2),
    width = _useState8[0],
    setWidth = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    backdropClickClose = _useState10[0],
    setBackdropClickClose = _useState10[1];
  var openDrawer = function openDrawer(content) {
    var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
    var backdropClickClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    setContent(content);
    anchor && setAnchor(anchor);
    setWidth(width);
    backdropClickClose && setBackdropClickClose(backdropClickClose);
    setOpen(true);
  };
  var closeDrawer = function closeDrawer() {
    return setOpen(false);
  };
  var drawerValue = {
    state: {
      anchor: anchor,
      content: content,
      open: open,
      width: width,
      backdropClickClose: backdropClickClose
    },
    actions: {
      openDrawer: openDrawer,
      closeDrawer: closeDrawer,
      setWidth: setWidth,
      setContent: setContent,
      setAnchor: setAnchor,
      setBackdropClickClose: setBackdropClickClose
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Context["default"].Provider, {
    value: _objectSpread(_objectSpread({}, drawerValue.actions), drawerValue.state)
  }, children, /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    keepMounted: true,
    onClose: closeDrawer,
    open: open,
    anchor: anchor,
    PaperProps: {
      sx: {
        width: "".concat(width, "%")
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Fab["default"], {
    color: "default",
    sx: function sx(theme) {
      return {
        display: {
          xs: 'block',
          md: 'block'
        },
        position: 'fixed',
        top: '1.45em',
        right: '.75em',
        width: '2.5em',
        height: '2.5em',
        bgcolor: "".concat(theme.palette.grey[300], "95")
      };
    },
    size: 'small',
    onClick: closeDrawer
  }, /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], {
    color: "success",
    sx: {
      mb: '-.3em'
    }
  })), content));
};
var _default = Drawer;
exports["default"] = _default;