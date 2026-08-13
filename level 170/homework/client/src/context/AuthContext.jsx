import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
    fetchChangePassword,
    fetchLogin,
    fetchLogout,
    fetchMe,
    fetchRegister,
    fetchUpdateMe
} from "../services/AuthService";
import { connectSocket, disconnectSocket, socket } from "../config/socket";
import { getErrorMessage } from "../utils/getErrorMessage";
import { useToast } from "../hooks/useToast";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Without this the protected routes bounce to /login before /auth/me answers.
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetchMe();

                setUser(res.data.data.user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        getMe();
    }, []);

    // The socket lives exactly as long as the session does.
    useEffect(() => {
        if (user) {
            connectSocket();
        } else {
            disconnectSocket();
        }
    }, [user]);

    useEffect(() => {
        const handleConnectError = (err) => {
            if (err?.message === "Unauthorized!") return;

            toast.error("Realtime connection failed, messages may be delayed.");
        }

        socket.on("connect_error", handleConnectError);

        return () => socket.off("connect_error", handleConnectError);
    }, [toast]);

    const login = async (formData) => {
        setSubmitting(true);

        try {
            const res = await fetchLogin(formData);

            setUser(res.data.data.user);
            toast.success(res.data.message);
            navigate("/groups");

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not log in!"));

            return false;
        } finally {
            setSubmitting(false);
        }
    }

    const register = async (formData) => {
        setSubmitting(true);

        try {
            const res = await fetchRegister(formData);

            toast.success(res.data.message);
            navigate("/login");

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not register!"));

            return false;
        } finally {
            setSubmitting(false);
        }
    }

    const logout = async () => {
        try {
            await fetchLogout();
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not log out!"));
        } finally {
            setUser(null);
            navigate("/login");
        }
    }

    const updateProfile = async (formData) => {
        setSubmitting(true);

        try {
            const res = await fetchUpdateMe(formData);

            setUser(res.data.data.user);
            toast.success(res.data.message);

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not update the profile!"));

            return false;
        } finally {
            setSubmitting(false);
        }
    }

    const changePassword = async (formData) => {
        setSubmitting(true);

        try {
            const res = await fetchChangePassword(formData);

            toast.success(res.data.message);

            return true;
        } catch (err) {
            toast.error(getErrorMessage(err, "Could not change the password!"));

            return false;
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, submitting, login, register, logout, updateProfile, changePassword }}>
            {children}
        </AuthContext.Provider>
    )
}
