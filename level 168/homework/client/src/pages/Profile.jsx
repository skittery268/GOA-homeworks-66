import { useAuth } from "../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <h1>Profile</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </>
    )
}

export default Profile;