import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Loader from "./Loader";

const GuestRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <Loader label="Checking your session..." />;

    return user ? <Navigate to="/groups" replace /> : children;
}

export default GuestRoute;
