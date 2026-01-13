import { createContext, useContext } from "react";
import { useNavigate } from "react-router";

const authContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const register = async (data) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await res.json();
            if (result.user) {
                navigate("/login");
            }
            console.log(result);
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    const login = async (data) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (result.user) {
                localStorage.setItem("thisUser", JSON.stringify(result.user));
                navigate("/profile");
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = () => {
        localStorage.setItem("thisUser", null);
        navigate("/login");
    }

    return (
        <authContext.Provider value={{ register, login, logOut }}>
            {children}
        </authContext.Provider>
    )
}