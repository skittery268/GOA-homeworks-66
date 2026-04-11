import { createContext, useEffect, useState } from "react";
import { fetchLogin, fetchMe, fetchRegister } from "../services/AuthService";
import { useNavigate } from "react-router";

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
    }, []);

    const login = async (formData) => {
        try {
            const res = await fetchLogin(formData);

            setUser(res.data.data.user);
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetchRegister(formData);

            alert(res.data.message);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}