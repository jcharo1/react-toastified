import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
const ToastContext = createContext();

function CloseIcon() {
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

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};
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

function ToastItem({
  toast,
  index,
  visibleToasts,
  removeToast,
  toastContainerPosition,
  progress,
  coloredMode,
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

  return (
    <div
      key={toast.id}
      className={`${cssClasses} ${
        coloredMode ? getToastClass(toast.type, "colored") : ""
      }`}
      style={toast.style}
    >
      {toast.duration && (
        <div
          className={`progress-bar ${getToastClass(toast.type)}`}
          style={{ width: `${progress}%` }}
        ></div>
      )}
      <div className={`message`} style={{ position: "relative", zIndex: 2 }}>
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

export const ToastProvider = ({ children, coloredMode = false }) => {
  const [toasts, setToasts] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);
  const [queue, setQueue] = useState([]);
  const [toastContainerPosition, setToastContainerPosition] =
    useState("bottom-right");
  const [isHovered, setIsHovered] = useState(false);
  const [progressMap, setProgressMap] = useState({});

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
      theme = "dark",
      rtl = false,
      colorVariation = null,
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
        theme,
        message,
        type,
        style,
        duration,
        isLeaving: false,
        rtl,
        colorVariation,
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

  return (
    <ToastContext.Provider value={{ addToast, removeToast, setToasts, toasts }}>
      {children}
      <div
        className={`toast-container ${toastContainerPosition}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...toasts].reverse().map((toast, index) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            index={index}
            toastContainerPosition={toastContainerPosition}
            visibleToasts={visibleToasts}
            removeToast={removeToast}
            isHovered={isHovered}
            progress={progressMap[toast.id]}
            coloredMode={coloredMode}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
