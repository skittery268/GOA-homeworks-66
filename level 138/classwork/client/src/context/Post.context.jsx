import { createContext, useContext } from "react";
import { useAuth } from "./auth.context";

const postContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(postContext);

export const PostProvider = ({ children }) => {
    const { user } = useAuth();

    const createPost = async (formData) => {
        try {
            const res = await fetch("http://localhost:3000/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, userId: user.id })
            })

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <postContext.Provider value={{ createPost }}>
            {children}
        </postContext.Provider>
    )
}