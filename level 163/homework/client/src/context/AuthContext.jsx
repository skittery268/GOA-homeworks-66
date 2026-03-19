import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const API_URL = '/api'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const navigate = useNavigate();

    const login = async data => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok) {
                throw new Error(result.message);
            }

            setUser(result);
            navigate('/dashboard');
            toast.success('User logged in!');
        } catch(err) {
            toast.error(err.message);
        }
    };

    const signup = async data => {
        try {
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok) {
                throw new Error(result.message);
            }

            toast.success(result.message);
            navigate('/login');
        } catch(err) {
            toast.error(err.message);
        }
    };

    const logout = async () => {
        try {
            const res = await fetch(`${API_URL}/auth/logout`, {
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok) {
                throw new Error(result.message);
            }

            setUser(null);
            navigate('/login');
            toast.success(result.message)
        } catch(err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await fetch(`${API_URL}/auth/me`, {
                    credentials: 'include'
                });

                const result = await res.json();

                if(!res.ok) {
                    return;
                }

                setUser(result);
            } catch(err) {
                // Ignore request errors on initial auth probe.
            } finally {
                setIsAuthLoading(false);
            }
        };

        getMe();
    }, []);

    const changeUserData = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/auth/changedata`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok) {
                throw new Error(result.message);
            }

            toast.success(result.message);
            setUser(result.data.user);
            return true;
        } catch (err) {
            toast.error(err.message);
            return false;
        }
    }
    
    return (
        <AuthContext.Provider value={{user, isAuthLoading, login, signup, logout, changeUserData}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;