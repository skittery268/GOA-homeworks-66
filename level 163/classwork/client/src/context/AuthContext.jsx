import { useEffect } from "react";
import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const api_url = "http://localhost:3000/api/auth"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const updateToken = async () => {
        try {
            const res = await fetch(`${api_url}/updatetoken`, {
                method: "POST",
                credentials: "include"
            })

            const data = await res.json();

            if (!res.ok) {
                return null;
            }

            localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
            return data.accessToken;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        const tryAutoLogin = async () => {
            const token = JSON.parse(localStorage.getItem("accessToken"));
            if (!token) return;

            const fetchMe = async (accessToken) => {
                const res = await fetch(`${api_url}/me`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                    credentials: "include"
                });

                if (!res.ok) return null;
                const data = await res.json();
                return data.user;
            };

            const userFromToken = await fetchMe(token);
            if (userFromToken) {
                setUser(userFromToken);
                navigate("/profile");
                return;
            }

            const newToken = await updateToken();
            if (!newToken) {
                localStorage.removeItem("accessToken");
                return;
            }

            const userFromNewToken = await fetchMe(newToken);
            if (userFromNewToken) {
                setUser(userFromNewToken);
                navigate("/profile");
                return;
            }

            localStorage.removeItem("accessToken");
        }

        tryAutoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

            setUser(data.user);
            localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
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
        localStorage.removeItem("accessToken");
        
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logOut, updateToken }}>
            {children}
        </AuthContext.Provider>
    )
}