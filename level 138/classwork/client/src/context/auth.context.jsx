import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const authContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) return;

         
        setUser(storedUser);
        navigate("/profile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            if (!res.ok) {
                alert(result.message);
                return;
            }
            
            alert(result.message);
            navigate("/login");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    const login = async (data) => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await res.json();
            if (!res.ok) {
                alert(result.message);
                return;
            }

            localStorage.setItem('user', JSON.stringify(data));

            setUser(result);
            navigate("/profile");
            alert("Login successfull");
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <authContext.Provider value={{ login, logout, register, user }}>
            {children}
        </authContext.Provider>
    )
}