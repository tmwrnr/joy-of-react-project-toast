import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) =>
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variant },
    ]);

  const removeToast = (id) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts]
  );

  return <ToastContext value={value}>{children}</ToastContext>;
}

export function useToasts() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastProvider");
  }
  return context;
}

export default ToastProvider;
