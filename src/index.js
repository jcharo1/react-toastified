import React, { createContext, useContext, useState, useEffect } from "react";
import "./Toast.css";
const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    if (toasts.length > 3) {
      setQueue(toasts.slice(0, -3));
      setVisibleToasts(toasts.slice(-3).map((t) => t.id));
    } else {
      setVisibleToasts(toasts.map((t) => t.id));
    }
  }, [toasts]);

  const addToast = (message) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));

    if (queue.length > 0) {
      const nextToast = queue[0];
      setQueue(queue.slice(1));
      setVisibleToasts((prevVisibleToasts) => [
        ...prevVisibleToasts,
        nextToast.id,
      ]);
    }
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {[...toasts].reverse().map((toast, index) => (
          <div
            key={toast.id}
            className={`toast toast-${index} ${
              visibleToasts.includes(toast.id) ? "show" : ""
            }`}
          >
            <div className="message">{toast.message}</div>
            <button onClick={() => removeToast(toast.id)}>
              <svg
                width="16"
                height="16"
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
        ))}
      </div>
    </ToastContext.Provider>
  );
};
