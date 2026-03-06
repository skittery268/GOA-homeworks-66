import { useState } from "react";
import { useContext, createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [reg, setReg] = useState(false);
    const navigate = useNavigate();

    const login = async (formData) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setUser(data);
        } catch (err) {
            console.error(err);
        }
    }

    const register = async (formData) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            setReg(true);
        } catch (err) {
            console.error(err);
        }
    }

    const verifyAcc = async (code) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/verify", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ code })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            navigate("/login")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider value={{ reg, user, login, register, verifyAcc }}>
            {children}
        </AuthContext.Provider>
    )
}