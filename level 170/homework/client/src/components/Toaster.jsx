import { useToast } from "../hooks/useToast";

const Toaster = () => {
    const { toasts, removeToast } = useToast();

    if (!toasts.length) return null;

    return (
        <div className="toaster">
            {
                toasts.map((toast) => (
                    <div key={toast.id} className={`toast toast-${toast.type}`} onClick={() => removeToast(toast.id)}>
                        <span>{toast.message}</span>
                        <button type="button" className="toast-close" aria-label="Close">×</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Toaster;
