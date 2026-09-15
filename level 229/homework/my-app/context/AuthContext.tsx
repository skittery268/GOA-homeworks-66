import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/userType";
import { router } from "expo-router";

type AuthContextType = {
    user: User | null;
    error: string | null;

    register: (name: string, email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("Something went wrong!");
    };

    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>("");
    const [user, setUser] = useState<User | null>(null);

    const register = (name: string, email: string, password: string) => {
        const isExist = users.find(u => u.email === email);

        if (isExist) {
            setError("User with this email already exists!");
            return;
        };

        const newUser: User = { id: Date.now(), name: name.trim(), email: email.trim(), password: password.trim() };

        setUsers(prev => [...prev, newUser]);
        router.replace("(auth)/login");
    };

    const login = (email: string, password: string) => {
        const isExist = users.find(u => u.email === email);

        if (!isExist) {
            setError("Credentials is incorrect!");
            return;
        };

        if (isExist.password !== password) {
            setError("Credentials is incorrect!");
            return;
        };

        setUser(isExist);
        router.replace("(protected)/profile");
    };

    const logout = () => {
        setUser(null);
        router.replace("(auth)/login");
    };

    return (
        <AuthContext value={{ user, error, register, login, logout }}>
            {children}
        </AuthContext>
    );
};