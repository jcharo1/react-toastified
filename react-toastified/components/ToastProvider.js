// import React, { createContext, useContext, useState, useEffect } from "react";

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
import React, { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext();

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

let globalTheme = "dark";

const getOnLeaveClassName = (position) => {
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

const getDefaultIcon = (type) => {
  let color;
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      color = "#00ff00";
      return <SuccessIcon color={color} />;
    case TOAST_TYPES.ERROR:
      color = "#ff0000";
      return <ErrorIcon color={color} />;
    case TOAST_TYPES.WARNING:
      color = "#ffff00";
      return <WarningIcon color={color} />;
    case TOAST_TYPES.INFO:
      color = "#00ffff";
      return <InfoIcon color={color} />;
    default:
      return null;
  }
};

function ToastItem({
  toast,
  index,
  visibleToasts,
  removeToast,
  toastContainerPosition,
  progress,
}) {
  const cssClasses = `toast toast-${index} ${
    visibleToasts.includes(toast.id) ? "show" : ""
  } ${
    toast.isLeaving
      ? `fade-out ${getOnLeaveClassName(toastContainerPosition)}`
      : ""
  } ${toast?.theme} ${toast.rtl ? "toastifed-rtl" : "toastifed-ltr"} ${
    toastContainerPosition.includes("top") && "unset-bottom"
  } ${toast.classNames} ${getToastClass(toast.type)}-border `.trim();

  function getToastClass(type, variation = "default") {
    let baseClass = "toast-";

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
      baseClass += `-${variation}`;
    }

    return baseClass;
  }

  const progressBarColor =
    toast.theme === "light" ? "progress-bar-black" : "progress-bar-white";
  return (
    <div
      key={toast.id}
      className={`${cssClasses} ${
        toast.theme === "colored" ? getToastClass(toast.type, "colored") : ""
      }`}
      style={toast.style}
    >
      {toast.duration && (
        <div
          className={`progress-bar ${
            toast.theme !== "colored"
              ? getToastClass(toast.type, "colored")
              : progressBarColor
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      )}
      <div
        className={`react-toastified-message`}
        style={{ position: "relative", zIndex: 2 }}
      >
        {toast.icon || getDefaultIcon(toast.type)}
        {toast.message}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="toast-center-button"
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export const ToastProvider = ({
  children,
  theme = "dark",
  newestOnTop = true,
}) => {
  const [toasts, setToasts] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);
  const [queue, setQueue] = useState([]);
  const [toastContainerPosition, setToastContainerPosition] =
    useState("bottom-right");
  const [isHovered, setIsHovered] = useState(false);
  const [progressMap, setProgressMap] = useState({});
  globalTheme = theme;

  useEffect(() => {
    if (toasts.length > 3) {
      setQueue(toasts.slice(0, -3));
      setVisibleToasts(toasts.slice(-3).map((t) => t.id));
    } else {
      setVisibleToasts(toasts.map((t) => t.id));
    }
  }, [toasts]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setProgressMap((prevProgressMap) => {
          const newProgressMap = { ...prevProgressMap };

          Object.keys(newProgressMap).forEach((toastId) => {
            const toast = toasts.find((t) => t.id === parseInt(toastId));
            if (toast?.duration && visibleToasts.includes(parseInt(toastId))) {
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

    return () => clearInterval(interval);
  }, [isHovered, visibleToasts, toasts]);

  const addToast = (message, options = {}) => {
    const {
      type = TOAST_TYPES.INFO,
      style = {},
      duration = null, // Default to null if duration is not provided
      position,
      theme,
      rtl = false,
      icon,
    } = options;

    try {
      if (position) {
        setToastContainerPosition(position);
      }
    } catch (error) {
      console.error(error.message);
    }

    const id = new Date().getTime();
    setToasts([
      ...toasts,
      {
        id,
        message,
        type,
        style,
        duration,
        isLeaving: false,
        rtl,
        theme: theme || globalTheme,
        icon,
      },
    ]);
    if (duration) {
      setProgressMap((prevProgressMap) => ({
        ...prevProgressMap,
        [id]: 100,
      }));
    }
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => {
      return prevToasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isLeaving: true,
          };
        } else {
          return toast;
        }
      });
    });

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      setProgressMap((prevProgressMap) => {
        const newProgressMap = { ...prevProgressMap };
        delete newProgressMap[id];
        return newProgressMap;
      });

      if (queue.length > 0) {
        const nextToast = queue[0];
        setQueue((prevQueue) => prevQueue.slice(1));
        setVisibleToasts((prevVisibleToasts) => [
          ...prevVisibleToasts,
          nextToast.id,
        ]);
      }
    }, 500);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Expose the toast object
  toast.success = (message, options = {}) => {
    addToast(message, { ...options, type: TOAST_TYPES.SUCCESS });
  };

  toast.error = (message, options = {}) => {
    addToast(message, { ...options, type: TOAST_TYPES.ERROR });
  };

  toast.warning = (message, options = {}) => {
    addToast(message, { ...options, type: TOAST_TYPES.WARNING });
  };

  toast.info = (message, options = {}) => {
    addToast(message, { ...options, type: TOAST_TYPES.INFO });
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        className={`toast-container ${toastContainerPosition}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="toast-hover-wrapper">
          {newestOnTop
            ? [...toasts]
                .reverse()
                .map((toast, index) => (
                  <ToastItem
                    key={toast.id}
                    toast={toast}
                    index={index}
                    toastContainerPosition={toastContainerPosition}
                    visibleToasts={visibleToasts}
                    removeToast={removeToast}
                    isHovered={isHovered}
                    progress={progressMap[toast.id]}
                  />
                ))
            : toasts.map((toast, index) => (
                <ToastItem
                  key={toast.id}
                  toast={toast}
                  index={index}
                  toastContainerPosition={toastContainerPosition}
                  visibleToasts={visibleToasts}
                  removeToast={removeToast}
                  isHovered={isHovered}
                  progress={progressMap[toast.id]}
                />
              ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
};

// Export toast for global use
export const toast = {};

function CloseIcon({ color }) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function SuccessIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={20}
      height={20}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function ErrorIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={20}
      height={20}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0 3.75h.008v.008H12v-.008Zm0-3.75h.008v.008H12v-.008ZM3.375 12a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0Z"
      />
    </svg>
  );
}

function WarningIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      width={20}
      height={20}
      fill={color}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

function InfoIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={20}
      height={20}
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0 3.75h.008v.008H12v-.008Zm0-3.75h.008v.008H12v-.008ZM3.375 12a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0Z"
      />
    </svg>
  );
}
