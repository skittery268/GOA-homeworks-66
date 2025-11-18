import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useColorContext = () => useContext(ColorContext)

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("#FF0000");

    const randomColor= () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    const handleClick = () => {
        const hex = randomColor();
        setColor(hex);
    }

    return (
        <ColorContext.Provider value={{ color, handleClick }}>
            {children}
        </ColorContext.Provider>
    )
}