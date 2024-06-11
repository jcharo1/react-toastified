"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = exports.toast = void 0;
var _react = require("react");
var _ToastProvider = require("./ToastProvider");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var toast = exports.toast = {
  success: function success(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  },
  error: function error(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  },
  warning: function warning(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  },
  info: function info(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  }
};
var useToast = exports.useToast = function useToast() {
  var _useContext = (0, _react.useContext)(_ToastProvider.ToastContext),
    addToast = _useContext.addToast;
  toast.success = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: _ToastProvider.TOAST_TYPES.SUCCESS
    }));
  };
  toast.error = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: _ToastProvider.TOAST_TYPES.ERROR
    }));
  };
  toast.warning = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: _ToastProvider.TOAST_TYPES.WARNING
    }));
  };
  toast.info = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: _ToastProvider.TOAST_TYPES.INFO
    }));
  };
  return toast;
};