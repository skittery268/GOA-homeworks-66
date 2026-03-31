import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const API_URL = "http://localhost:3000/api/auth"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetch(`${API_URL}/me`, {
                    credentials: "include"
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || "Error");
                }

                setUser(data.data.user);
            } catch (err) {
                console.log(err);
            }
        }

        getMe();
    }, []);

    const login = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error");
            }

            setUser(data.data.user);
            alert(data.message);
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error");
            }

            setUser(data.data.user);
            alert(data.message);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    const logout = async () => {
        try {
            const res = await fetch(`${API_URL}/logout`, {
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error");
            }

            setUser(null);
            alert(data.message);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
