import { useAuth } from "../context/auth.context";

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <h1>User Name: {user.userName}</h1>
            <h1>User Email: {user.userEmail}</h1>
        </>
    )
}

export default Profile;