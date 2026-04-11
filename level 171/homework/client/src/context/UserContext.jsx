import { createContext, useState } from "react";
import { fetchUser, fetchUsers } from "../services/UserService";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [receiver, setReceiver] = useState(null);

    const getAllUsers = async () => {
        try {
            const res = await fetchUsers();

            setUsers(res.data.data.users);
        } catch (err) {
            console.log(err);
        }
    }

    const getUser = async (userId) => {
        try {
            const res = await fetchUser(userId);

            setReceiver(res.data.data.user);
        } catch (err) {
            console.log(err.response.message);
        }
    }
    
    return (
        <UserContext.Provider value={{ receiver, users, getAllUsers, getUser }}>
            {children}
        </UserContext.Provider>
    )
}