import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <p>{user?.fullname}</p>
            <p>{user?.email}</p>
        </>
    );
};

export default Profile;