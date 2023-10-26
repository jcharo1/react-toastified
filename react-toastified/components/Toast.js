import React, { createContext, useContext, useState, useEffect } from "react";
const ToastContext = createContext();
// import "./Toast.css";

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

function ToastItem({
  toast,
  index,
  visibleToasts,
  removeToast,
  isOnCloseEffect,
}) {
  useEffect(() => {
    if (toast.duration) {
      const startTime = new Date().getTime();
      const interval = setInterval(() => {
        const elapsedTime = new Date().getTime() - startTime;
        const remainingTime = toast.duration - elapsedTime;
        if (remainingTime <= 0) {
          clearInterval(interval);
          removeToast(toast.id);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [toast, removeToast]);
  useEffect(() => {
    console.log("isOnCloseEffect");
    console.log(isOnCloseEffect);
  }, [isOnCloseEffect]);
  const cssClasses = `toast toast-${index} ${
    visibleToasts.includes(toast.id) ? "show" : ""
  } ${toast.isFadingOut ? "fade-out" : ""} toast-${toast.type} ${
    toast.rtl ? "toastifed-rtl" : "toastifed-ltr"
  } ${isOnCloseEffect ? isOnCloseEffect : ""}
  `.trim();

  return (
    <div key={toast.id} className={cssClasses} style={toast.style}>
      {/* {toast.duration && (
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      )} */}
      <div className={`message`} style={{ position: "relative", zIndex: 2 }}>
        {toast.message}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="toast-center-button"
      >
        <svg
          // width="16"
          // height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);
  const [queue, setQueue] = useState([]);
  const [toastContainerPosition, setToastContainerPosition] =
    useState("bottom-right");
  // const validPositions = [
  //   "bottom-right",
  //   "bottom-left",
  //   "top-left",
  //   "top-right",
  // ];

  // const validateAndSetPosition = (position, setToastContainerPosition) => {
  //   if (validPositions.includes(position)) {
  //     setToastContainerPosition(position); // Replace this with your actual function to set position
  //   } else {
  //     throw new Error(
  //       `Invalid position value. Allowed values are: ${validPositions.join(
  //         ", "
  //       )}`
  //     );
  //   }
  // };
  useEffect(() => {
    if (toasts.length > 3) {
      setQueue(toasts.slice(0, -3));
      setVisibleToasts(toasts.slice(-3).map((t) => t.id));
    } else {
      setVisibleToasts(toasts.map((t) => t.id));
    }
  }, [toasts]);

  const addToast = (message, options = {}) => {
    const {
      type = TOAST_TYPES.INFO,
      style = {},
      duration = null,
      position,
      rtl = false,
      onCloseEffect = false,
    } = options;
    try {
      if (position) {
        setToastContainerPosition(position);
        // validateAndSetPosition(position, setToastContainerPosition);
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
        isFadingOut: false,
        rtl,
        onCloseEffect,
      },
    ]);
  };
  const handleonCloseLeaveEffectClassName = (onCloseEffect) => {
    switch (onCloseEffect) {
      case "rotateOut":
        return "rotate-fade-out";
      case "zoomIn":
        return "zoom-in";
      case "slideUp":
        return "slide-fade-out-up";
      case "slideDown":
        return "slide-fade-out-down";
      default:
        return "";
    }
  };
  const removeToast = (id) => {
    console.log("removeToast");
    console.log(id);
    // Mark the toast for removal (setting isFadingOut property to true)
    setToasts((prevToasts) => {
      return prevToasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isFadingOut: true,
            isOnCloseEffect: toast.onCloseEffect,
          };
        } else {
          return toast;
        }
      });
    });

    setTimeout(() => {
      // Remove the toast after the animation duration
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));

      if (queue.length > 0) {
        const nextToast = queue[0];
        setQueue((prevQueue) => prevQueue.slice(1));
        setVisibleToasts((prevVisibleToasts) => [
          ...prevVisibleToasts,
          nextToast.id,
        ]);
      }
    }, 500); // Wait for 500ms to match the fade-out duration in the CSS
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, setToasts, toasts }}>
      {children}
      <div className={`toast-container ${toastContainerPosition}`}>
        {[...toasts].reverse().map((toast, index) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            index={index}
            visibleToasts={visibleToasts}
            removeToast={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
