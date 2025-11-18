import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = (formData) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === formData.email)) {
            alert("User exist")
            return;
        }

        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
    }

    const navigate = useNavigate();

    const login = (formData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === formData.email && user.password === formData.password);

        if (!user) {
            alert("Invalid credentials!");
            return;
        }
        
        setUser(user);
        navigate("/profile");
    }

    const logOut = () => {
        setUser(null)
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ register, login, user, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}