import { useState } from "react";
import { createContext } from "react";
import { fetchLogin, fetchLogout, fetchMe, fetchRegister } from "../services/AuthService";
import { useNavigate } from "react-router";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetchMe();

                setUser(res.data.data.user);
                navigate("/profile");
            } catch (err) {
                console.log(err);
            }
        }

        getMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const login = async (formData) => {
        try {
            const res = await fetchLogin(formData);

            alert(res.data.message);
            setUser(res.data.data.user);
            navigate("/profile");
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetchRegister(formData);

            alert(res.data.message);
            navigate("/login");
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    const logout = async () => {
        try {
            const res = await fetchLogout();

            alert(res.data.message);
            setUser(null);
            navigate("/login")
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}