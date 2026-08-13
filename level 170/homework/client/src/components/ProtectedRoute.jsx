import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth"
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // Redirecting while the session is still being checked would log
    // everybody out on every page refresh.
    if (loading) return <Loader label="Checking your session..." />;

    return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
