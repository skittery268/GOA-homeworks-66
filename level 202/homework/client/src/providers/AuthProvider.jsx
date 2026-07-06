import { useEffect, useState } from "react"
import { AuthContext } from "../context/authContext";
import { fetchLogin, fetchLogout, fetchMe, fetchRegister } from "../services/AuthService";
import { useNavigate } from "react-router";

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
            console.log(err.response.data.message);
        }
    };

    const register = async (formData) => {
        try {
            await fetchRegister(formData);

            navigate("/login");
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    const logout = async () => {
        try {
            await fetchLogout();

            navigate("/login");
            setUser(null);
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}