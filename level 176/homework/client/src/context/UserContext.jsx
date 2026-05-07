import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

const API_URL = 'http://localhost:3000/api';

const UserProvider = ({ children }) => {
    const [selectedUser, setUser] = useState(null);

    const getUser = async (userId) => {
        try {
            const res = await fetch(`${API_URL}/users/${userId}`);

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setUser(data.data.user);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <UserContext.Provider value={{ selectedUser, getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;