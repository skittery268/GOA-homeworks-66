import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ( { children }) => {
    const login = ({ email, password }) => {
        const accounts = JSON.parse(localStorage.getItem("accounts"));
        const thisUser = accounts.find(account => account.email === email && account.password === password);

        if (thisUser) {
            localStorage.setItem("isLogged", JSON.stringify(true));
            localStorage.setItem("thisUser", JSON.stringify(thisUser));
            alert("Successful");
        } else {
            alert("Incorrect account information");
        }
    }

    if (JSON.parse(localStorage.getItem("accounts")) === null) {
        localStorage.setItem("accounts", JSON.stringify([]));
    }

    if (JSON.parse(localStorage.getItem("thisUser")) === null) {
        localStorage.setItem("thisUser", JSON.stringify({}));
    }

    if (JSON.parse(localStorage.getItem("isLogged")) === null) {
        localStorage.setItem("isLogged", JSON.stringify(false));
    }

    const signUp = ({ userName, email, password }) => {
        const accounts = JSON.parse(localStorage.getItem("accounts"));

        const acc = accounts.find(account => account.email === email);

        if (acc) {
            alert("An account with this email already exists.");
        } else {
            const newUser = {userName, email, password};

            accounts.push(newUser);

            localStorage.setItem("accounts", JSON.stringify(accounts));
            localStorage.setItem("isLogged", JSON.stringify(true));
            localStorage.setItem("thisUser", JSON.stringify(newUser));
            alert("Successful");
        }
    }

    const logout = () => {
        localStorage.setItem("isLogged", JSON.stringify(false));
        localStorage.setItem("thisUser", JSON.stringify({}))
    }

    return (
        <AuthContext.Provider value={{ login, signUp, logout }} >
            {children}
        </AuthContext.Provider>
    )
}