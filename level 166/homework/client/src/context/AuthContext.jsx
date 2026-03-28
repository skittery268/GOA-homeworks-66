import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchGetMe, fetchLogin, fetchLogout, fetchRegister } from "../services/AuthService";
import { useNavigate } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetchGetMe();

                setUser(res.data);
                navigate("/profile");
            } catch (err) {
                console.log(err);
            }
        }

        getMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const login = async data => {
        try {
            const res = await fetchLogin(data);

            setUser(res.data);
            toast.success("Logged in successfully!");
            navigate("/profile");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const signUp = async data => {
        try {
            const res = await fetchRegister(data);

            toast.success(res.data.message);
            navigate("/login");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const logout = async () => {
        try {
            const res = await fetchLogout();

            setUser(null);
            toast.success(res.data.message);
            navigate("/login");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    )
}