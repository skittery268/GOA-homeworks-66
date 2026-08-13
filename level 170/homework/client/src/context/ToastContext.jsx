import { createContext, useCallback, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext();

let nextId = 0;

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const notify = useCallback((message, type = "info") => {
        if (!message) return;

        const id = nextId++;

        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), 4000);
    }, [removeToast]);

    const success = useCallback((message) => notify(message, "success"), [notify]);
    const error = useCallback((message) => notify(message, "error"), [notify]);

    return (
        <ToastContext.Provider value={{ toasts, notify, success, error, removeToast }}>
            {children}
        </ToastContext.Provider>
    )
}
