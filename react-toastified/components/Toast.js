import { useContext } from "react";
import { ToastContext, TOAST_TYPES } from "./ToastProvider";

const toast = {
  success: (message, options = {}) => {},
  error: (message, options = {}) => {},
  warning: (message, options = {}) => {},
  info: (message, options = {}) => {},
};

const useToast = () => {
  const { addToast } = useContext(ToastContext);

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

  return toast;
};

export { useToast, toast };
