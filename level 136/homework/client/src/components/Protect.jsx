import { Navigate } from "react-router";

const Protect = ({ children }) => {
    const thisUser = JSON.parse(localStorage.getItem("thisUser"));

    return thisUser ? children : Navigate("/login");
}

export default Protect;