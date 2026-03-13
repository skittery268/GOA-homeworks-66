import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const api_url = "http://localhost:3000/api/auth"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (formData) => {
        try {
            const res = await fetch(`${api_url}/login`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setUser(data);
            navigate("/profile");
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