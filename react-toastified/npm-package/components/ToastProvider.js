"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = exports.ToastProvider = exports.TOAST_TYPES = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { createContext, useContext, useState, useEffect } from "react";
// const ToastContext = createContext();
// export const TOAST_TYPES = {
//   SUCCESS: "success",
//   ERROR: "error",
//   WARNING: "warning",
//   INFO: "info",
// };
// let globalTheme = "dark";
// const getOnLeaveClassName = (position) => {
//   switch (position) {
//     case "top-center":
//       return "slide-fade-out-up";
//     case "top-right":
//       return "slide-right-fade-out";
//     case "top-left":
//       return "slide-left-fade-out";
//     case "bottom-left":
//       return "slide-left-fade-out";
//     case "bottom-center":
//       return "slide-fade-out-down";
//     case "bottom-right":
//       return "slide-right-fade-out";
//     default:
//       return "";
//   }
// };
// function ToastItem({
//   toast,
//   index,
//   visibleToasts,
//   removeToast,
//   toastContainerPosition,
//   progress,
// }) {
//   const cssClasses = `toast toast-${index} ${
//     visibleToasts.includes(toast.id) ? "show" : ""
//   } ${
//     toast.isLeaving
//       ? `fade-out ${getOnLeaveClassName(toastContainerPosition)}`
//       : ""
//   } ${toast?.theme} ${toast.rtl ? "toastifed-rtl" : "toastifed-ltr"} ${
//     toastContainerPosition.includes("top") && "unset-bottom"
//   } ${toast.classNames} ${getToastClass(toast.type)}-border `.trim();
//   function getToastClass(type, variation = "default") {
//     let baseClass = "toast-";
//     switch (type) {
//       case "success":
//         baseClass += "success";
//         break;
//       case "error":
//         baseClass += "error";
//         break;
//       case "warning":
//         baseClass += "warning";
//         break;
//       case "info":
//         baseClass += "info";
//         break;
//       default:
//         return "Invalid type";
//     }
//     if (variation !== "default") {
//       baseClass += `-${variation}`;
//     }
//     return baseClass;
//   }
//   const progressBarColor =
//     toast.theme === "light" ? "progress-bar-black" : "progress-bar-white";
//   return (
//     <div
//       key={toast.id}
//       className={`${cssClasses} ${
//         toast.theme === "colored" ? getToastClass(toast.type, "colored") : ""
//       }`}
//       style={toast.style}
//     >
//       {toast.duration && (
//         <div
//           className={`progress-bar ${
//             toast.theme !== "colored"
//               ? getToastClass(toast.type, "colored")
//               : progressBarColor
//           }`}
//           style={{ width: `${progress}%` }}
//         ></div>
//       )}
//       <div className={`message`} style={{ position: "relative", zIndex: 2 }}>
//         {toast.message}
//       </div>
//       <button
//         onClick={() => removeToast(toast.id)}
//         className="toast-center-button"
//       >
//         <CloseIcon />
//       </button>
//     </div>
//   );
// }
// export const ToastProvider = ({ children, theme = "dark" }) => {
//   const [toasts, setToasts] = useState([]);
//   const [visibleToasts, setVisibleToasts] = useState([]);
//   const [queue, setQueue] = useState([]);
//   const [toastContainerPosition, setToastContainerPosition] =
//     useState("bottom-right");
//   const [isHovered, setIsHovered] = useState(false);
//   const [progressMap, setProgressMap] = useState({});
//   globalTheme = theme;
//   useEffect(() => {
//     if (toasts.length > 3) {
//       setQueue(toasts.slice(0, -3));
//       setVisibleToasts(toasts.slice(-3).map((t) => t.id));
//     } else {
//       setVisibleToasts(toasts.map((t) => t.id));
//     }
//   }, [toasts]);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setProgressMap((prevProgressMap) => {
//           const newProgressMap = { ...prevProgressMap };
//           Object.keys(newProgressMap).forEach((toastId) => {
//             const toast = toasts.find((t) => t.id === parseInt(toastId));
//             if (toast?.duration && visibleToasts.includes(parseInt(toastId))) {
//               newProgressMap[toastId] -= 100 / (toast.duration / 100);
//               if (newProgressMap[toastId] <= 0) {
//                 removeToast(parseInt(toastId));
//                 delete newProgressMap[toastId];
//               }
//             }
//           });
//           return newProgressMap;
//         });
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, [isHovered, visibleToasts, toasts]);
//   const addToast = (message, options = {}) => {
//     const {
//       type = TOAST_TYPES.INFO,
//       style = {},
//       duration = null, // Default to null if duration is not provided
//       position,
//       theme,
//       rtl = false,
//     } = options;
//     try {
//       if (position) {
//         setToastContainerPosition(position);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//     const id = new Date().getTime();
//     setToasts([
//       ...toasts,
//       {
//         id,
//         message,
//         type,
//         style,
//         duration,
//         isLeaving: false,
//         rtl,
//         theme: theme || globalTheme,
//       },
//     ]);
//     if (duration) {
//       setProgressMap((prevProgressMap) => ({
//         ...prevProgressMap,
//         [id]: 100,
//       }));
//     }
//   };
//   const removeToast = (id) => {
//     setToasts((prevToasts) => {
//       return prevToasts.map((toast) => {
//         if (toast.id === id) {
//           return {
//             ...toast,
//             isLeaving: true,
//           };
//         } else {
//           return toast;
//         }
//       });
//     });
//     setTimeout(() => {
//       setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//       setProgressMap((prevProgressMap) => {
//         const newProgressMap = { ...prevProgressMap };
//         delete newProgressMap[id];
//         return newProgressMap;
//       });
//       if (queue.length > 0) {
//         const nextToast = queue[0];
//         setQueue((prevQueue) => prevQueue.slice(1));
//         setVisibleToasts((prevVisibleToasts) => [
//           ...prevVisibleToasts,
//           nextToast.id,
//         ]);
//       }
//     }, 500);
//   };
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   // Expose the toast object
//   toast.success = (message, options = {}) => {
//     addToast(message, { ...options, type: TOAST_TYPES.SUCCESS });
//   };
//   toast.error = (message, options = {}) => {
//     addToast(message, { ...options, type: TOAST_TYPES.ERROR });
//   };
//   toast.warning = (message, options = {}) => {
//     addToast(message, { ...options, type: TOAST_TYPES.WARNING });
//   };
//   toast.info = (message, options = {}) => {
//     addToast(message, { ...options, type: TOAST_TYPES.INFO });
//   };
//   return (
//     <ToastContext.Provider value={{ addToast, removeToast }}>
//       {children}
//       <div
//         className={`toast-container ${toastContainerPosition}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="toast-hover-wrapper">
//           {[...toasts].reverse().map((toast, index) => (
//             <ToastItem
//               key={toast.id}
//               toast={toast}
//               index={index}
//               toastContainerPosition={toastContainerPosition}
//               visibleToasts={visibleToasts}
//               removeToast={removeToast}
//               isHovered={isHovered}
//               progress={progressMap[toast.id]}
//             />
//           ))}
//         </div>
//       </div>
//     </ToastContext.Provider>
//   );
// };
// // Export toast for global use
// export const toast = {};
// function CloseIcon() {
//   return (
//     <svg
//       width={40}
//       height={40}
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
//         fill="currentColor"
//         fillRule="evenodd"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//   );
// }
// function WarningIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="size-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
//       />
//     </svg>
//   );
// }
// function InfoIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="size-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
//       />
//     </svg>
//   );
// }
// function ErrorIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="size-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//       />
//     </svg>
//   );
// }
var ToastContext = /*#__PURE__*/(0, _react.createContext)();
var TOAST_TYPES = exports.TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info"
};
var globalTheme = "dark";
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
var getDefaultIcon = function getDefaultIcon(type, isColored) {
  var color;
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      color = "#00ff00";
      return /*#__PURE__*/_react["default"].createElement(SuccessIcon, {
        color: color,
        isColored: isColored
      });
    case TOAST_TYPES.ERROR:
      color = "#ff0000";
      return /*#__PURE__*/_react["default"].createElement(ErrorIcon, {
        color: color,
        isColored: isColored
      });
    case TOAST_TYPES.WARNING:
      color = "#ffff00";
      return /*#__PURE__*/_react["default"].createElement(WarningIcon, {
        color: color,
        isColored: isColored
      });
    case TOAST_TYPES.INFO:
      color = "#00ffff";
      return /*#__PURE__*/_react["default"].createElement(InfoIcon, {
        color: color,
        isColored: isColored
      });
    default:
      return null;
  }
};
function ToastItem(_ref) {
  var toast = _ref.toast,
    index = _ref.index,
    visibleToasts = _ref.visibleToasts,
    removeToast = _ref.removeToast,
    toastContainerPosition = _ref.toastContainerPosition,
    progress = _ref.progress;
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
  var progressBarColor = toast.theme === "light" ? "progress-bar-black" : "progress-bar-white";
  return /*#__PURE__*/_react["default"].createElement("div", {
    key: toast.id,
    className: "".concat(cssClasses, " ").concat(toast.theme === "colored" ? getToastClass(toast.type, "colored") : ""),
    style: toast.style
  }, toast.duration && /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-bar ".concat(toast.theme !== "colored" ? getToastClass(toast.type, "colored") : progressBarColor),
    style: {
      width: "".concat(progress, "%")
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-toastified-message",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, toast.icon || getDefaultIcon(toast.type, toast.theme === "colored"), toast.message), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toast-close-button-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return removeToast(toast.id);
    },
    className: "toast-center-button"
  }, /*#__PURE__*/_react["default"].createElement(CloseIcon, null)), " "));
}
var ToastProvider = exports.ToastProvider = function ToastProvider(_ref2) {
  var children = _ref2.children,
    _ref2$theme = _ref2.theme,
    theme = _ref2$theme === void 0 ? "dark" : _ref2$theme,
    _ref2$newestOnTop = _ref2.newestOnTop,
    newestOnTop = _ref2$newestOnTop === void 0 ? true : _ref2$newestOnTop;
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
  globalTheme = theme;
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
      theme = options.theme,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl,
      icon = options.icon;
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
      message: message,
      type: type,
      style: style,
      duration: duration,
      isLeaving: false,
      rtl: rtl,
      theme: theme || globalTheme,
      icon: icon
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

  // Expose the toast object
  toast.success = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: TOAST_TYPES.SUCCESS
    }));
  };
  toast.error = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: TOAST_TYPES.ERROR
    }));
  };
  toast.warning = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: TOAST_TYPES.WARNING
    }));
  };
  toast.info = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addToast(message, _objectSpread(_objectSpread({}, options), {}, {
      type: TOAST_TYPES.INFO
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(ToastContext.Provider, {
    value: {
      addToast: addToast,
      removeToast: removeToast
    }
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toast-container ".concat(toastContainerPosition),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toast-hover-wrapper"
  }, newestOnTop ? _toConsumableArray(toasts).reverse().map(function (toast, index) {
    return /*#__PURE__*/_react["default"].createElement(ToastItem, {
      key: toast.id,
      toast: toast,
      index: index,
      toastContainerPosition: toastContainerPosition,
      visibleToasts: visibleToasts,
      removeToast: removeToast,
      isHovered: isHovered,
      progress: progressMap[toast.id]
    });
  }) : toasts.map(function (toast, index) {
    return /*#__PURE__*/_react["default"].createElement(ToastItem, {
      key: toast.id,
      toast: toast,
      index: index,
      toastContainerPosition: toastContainerPosition,
      visibleToasts: visibleToasts,
      removeToast: removeToast,
      isHovered: isHovered,
      progress: progressMap[toast.id]
    });
  }))));
};

// Export toast for global use
var toast = exports.toast = {};
function CloseIcon(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: 16,
    height: 16,
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
function SuccessIcon(_ref4) {
  var color = _ref4.color,
    isColored = _ref4.isColored;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg"
    // fill={color}
    ,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    width: 20,
    height: 20
    // stroke="currentColor"
    ,
    className: "size-6",
    stroke: isColored ? "currentColor" : color,
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
function ErrorIcon(_ref5) {
  var color = _ref5.color,
    isColored = _ref5.isColored;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    stroke: isColored ? "currentColor" : color,
    fill: "none"
    //  stroke="currentColor"
    // fill={color}
    ,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    width: 20,
    height: 20,
    shapeRendering: "geometricPrecision",
    className: "size-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m0 3.75h.008v.008H12v-.008Zm0-3.75h.008v.008H12v-.008ZM3.375 12a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0Z"
  }));
}

// function WarningIcon({ color }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       strokeWidth={0.5}
//       width={20}
//       height={20}
//       fill={color}
//       stroke="currentColor"
//       className="size-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
//       />
//     </svg>
//   );
// }
function WarningIcon(_ref6) {
  var color = _ref6.color,
    isColored = _ref6.isColored;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: 1,
    width: 20,
    height: 20,
    stroke: isColored ? "currentColor" : color,
    fill: "none",
    className: "size-6",
    shapeRendering: "geometricPrecision"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
    vectorEffect: "non-scaling-stroke"
  }));
}
function InfoIcon(_ref7) {
  var color = _ref7.color,
    isColored = _ref7.isColored;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg"
    // fill={color}
    ,
    stroke: isColored ? "currentColor" : color,
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5
    // stroke="currentColor"
    ,
    width: 20,
    height: 20,
    shapeRendering: "geometricPrecision",
    className: "size-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m0 3.75h.008v.008H12v-.008Zm0-3.75h.008v.008H12v-.008ZM3.375 12a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0Z"
  }));
}