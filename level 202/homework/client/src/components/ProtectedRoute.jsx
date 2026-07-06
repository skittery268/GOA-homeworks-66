import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />
}

export default ProtectedRoute;