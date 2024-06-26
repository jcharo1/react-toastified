"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = exports.ToastProvider = exports.TOAST_TYPES = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
    "default": e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n["default"] = e, t && t.set(e, n), n;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var ToastContext = /*#__PURE__*/(0, _react.createContext)();
function CloseIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: 40,
    height: 40,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
var useToast = exports.useToast = function useToast() {
  var context = (0, _react.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
var TOAST_TYPES = exports.TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info"
};
var getOnLeaveClassName = function getOnLeaveClassName(position) {
  switch (position) {
    case "top-center":
      return "slide-fade-out-up";
    case "top-right":
      return "slide-right-fade-out";
    case "top-left":
      return "slide-left-fade-out";
    case "bottom-left":
      return "slide-left-fade-out";
    case "bottom-center":
      return "slide-fade-out-down";
    case "bottom-right":
      return "slide-right-fade-out";
    default:
      return "";
  }
};
function ToastItem(_ref) {
  var toast = _ref.toast,
    index = _ref.index,
    visibleToasts = _ref.visibleToasts,
    removeToast = _ref.removeToast,
    toastContainerPosition = _ref.toastContainerPosition,
    progress = _ref.progress,
    coloredMode = _ref.coloredMode;
  var cssClasses = "toast toast-".concat(index, " ").concat(visibleToasts.includes(toast.id) ? "show" : "", " ").concat(toast.isLeaving ? "fade-out ".concat(getOnLeaveClassName(toastContainerPosition)) : "", " ").concat(toast === null || toast === void 0 ? void 0 : toast.theme, " ").concat(toast.rtl ? "toastifed-rtl" : "toastifed-ltr", " ").concat(toastContainerPosition.includes("top") && "unset-bottom", " ").concat(toast.classNames, " ").concat(getToastClass(toast.type), "-border ").trim();
  function getToastClass(type) {
    var variation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
    var baseClass = "toast-";
    switch (type) {
      case "success":
        baseClass += "success";
        break;
      case "error":
        baseClass += "error";
        break;
      case "warning":
        baseClass += "warning";
        break;
      case "info":
        baseClass += "info";
        break;
      default:
        return "Invalid type";
    }
    if (variation !== "default") {
      baseClass += "-".concat(variation);
    }
    return baseClass;
  }
  var progressBarColor = coloredMode ? toast.theme === "light" ? "black" : "white" : getToastClass(toast.type);
  return /*#__PURE__*/_react["default"].createElement("div", {
    key: toast.id,
    className: "".concat(cssClasses, " ").concat(coloredMode ? getToastClass(toast.type, "colored") : ""),
    style: toast.style
  }, toast.duration && /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-bar ".concat(getToastClass(toast.type)),
    style: {
      width: "".concat(progress, "%"),
      backgroundColor: progressBarColor
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "message",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, toast.message), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return removeToast(toast.id);
    },
    className: "toast-center-button"
  }, /*#__PURE__*/_react["default"].createElement(CloseIcon, null)));
}
var ToastProvider = exports.ToastProvider = function ToastProvider(_ref2) {
  var children = _ref2.children;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    visibleToasts = _useState4[0],
    setVisibleToasts = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    queue = _useState6[0],
    setQueue = _useState6[1];
  var _useState7 = (0, _react.useState)("bottom-right"),
    _useState8 = _slicedToArray(_useState7, 2),
    toastContainerPosition = _useState8[0],
    setToastContainerPosition = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isHovered = _useState10[0],
    setIsHovered = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    progressMap = _useState12[0],
    setProgressMap = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    coloredMode = _useState14[0],
    setColormode = _useState14[1];
  (0, _react.useEffect)(function () {
    if (toasts.length > 3) {
      setQueue(toasts.slice(0, -3));
      setVisibleToasts(toasts.slice(-3).map(function (t) {
        return t.id;
      }));
    } else {
      setVisibleToasts(toasts.map(function (t) {
        return t.id;
      }));
    }
  }, [toasts]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      if (!isHovered) {
        setProgressMap(function (prevProgressMap) {
          var newProgressMap = _objectSpread({}, prevProgressMap);
          Object.keys(newProgressMap).forEach(function (toastId) {
            var toast = toasts.find(function (t) {
              return t.id === parseInt(toastId);
            });
            if (toast !== null && toast !== void 0 && toast.duration && visibleToasts.includes(parseInt(toastId))) {
              newProgressMap[toastId] -= 100 / (toast.duration / 100);
              if (newProgressMap[toastId] <= 0) {
                removeToast(parseInt(toastId));
                delete newProgressMap[toastId];
              }
            }
          });
          return newProgressMap;
        });
      }
    }, 100);
    return function () {
      return clearInterval(interval);
    };
  }, [isHovered, visibleToasts, toasts]);
  var addToast = function addToast(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$type = options.type,
      type = _options$type === void 0 ? TOAST_TYPES.INFO : _options$type,
      _options$style = options.style,
      style = _options$style === void 0 ? {} : _options$style,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? null : _options$duration,
      position = options.position,
      _options$theme = options.theme,
      theme = _options$theme === void 0 ? "dark" : _options$theme,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl,
      _options$colorVariati = options.colorVariation,
      colorVariation = _options$colorVariati === void 0 ? null : _options$colorVariati;
    if (theme === "colored") setColormode(true);else {
      setColormode(false);
    }
    try {
      if (position) {
        setToastContainerPosition(position);
      }
    } catch (error) {
      console.error(error.message);
    }
    var id = new Date().getTime();
    setToasts([].concat(_toConsumableArray(toasts), [{
      id: id,
      theme: theme,
      message: message,
      type: type,
      style: style,
      duration: duration,
      isLeaving: false,
      rtl: rtl,
      colorVariation: colorVariation
    }]));
    if (duration) {
      setProgressMap(function (prevProgressMap) {
        return _objectSpread(_objectSpread({}, prevProgressMap), {}, _defineProperty({}, id, 100));
      });
    }
  };
  var removeToast = function removeToast(id) {
    setToasts(function (prevToasts) {
      return prevToasts.map(function (toast) {
        if (toast.id === id) {
          return _objectSpread(_objectSpread({}, toast), {}, {
            isLeaving: true
          });
        } else {
          return toast;
        }
      });
    });
    setTimeout(function () {
      setToasts(function (prevToasts) {
        return prevToasts.filter(function (toast) {
          return toast.id !== id;
        });
      });
      setProgressMap(function (prevProgressMap) {
        var newProgressMap = _objectSpread({}, prevProgressMap);
        delete newProgressMap[id];
        return newProgressMap;
      });
      if (queue.length > 0) {
        var nextToast = queue[0];
        setQueue(function (prevQueue) {
          return prevQueue.slice(1);
        });
        setVisibleToasts(function (prevVisibleToasts) {
          return [].concat(_toConsumableArray(prevVisibleToasts), [nextToast.id]);
        });
      }
    }, 500);
  };
  var handleMouseEnter = function handleMouseEnter() {
    setIsHovered(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setIsHovered(false);
  };
  return /*#__PURE__*/_react["default"].createElement(ToastContext.Provider, {
    value: {
      addToast: addToast,
      removeToast: removeToast,
      setToasts: setToasts,
      toasts: toasts
    }
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toast-container ".concat(toastContainerPosition),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toast-hover-wrapper"
  }, _toConsumableArray(toasts).reverse().map(function (toast, index) {
    return /*#__PURE__*/_react["default"].createElement(ToastItem, {
      key: toast.id,
      toast: toast,
      index: index,
      toastContainerPosition: toastContainerPosition,
      visibleToasts: visibleToasts,
      removeToast: removeToast,
      isHovered: isHovered,
      progress: progressMap[toast.id],
      coloredMode: coloredMode
    });
  }))));
};