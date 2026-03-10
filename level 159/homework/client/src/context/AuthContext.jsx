import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const api_url = "http://localhost:3000/api/auth"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isLogged = JSON.parse(localStorage.getItem("user"));

        if (isLogged) {
            setUser(isLogged);
            navigate("/profile");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async (formData) => {
        try {
            const res = await fetch(`${api_url}/login`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            setUser(data);
            navigate("/profile");
            localStorage.setItem("user", JSON.stringify(data));
        } catch (err) {
            console.log(err);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetch(`${api_url}/signup`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            alert(data.message);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    }

    const logOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}