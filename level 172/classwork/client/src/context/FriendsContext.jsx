const { createContext } = require("react");

export const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
    
    return (
        <FriendsContext.Provider>
            {children}
        </FriendsContext.Provider>
    )
};