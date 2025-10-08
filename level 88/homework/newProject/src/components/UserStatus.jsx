import AboutMe from "./AboutMe";

function UserStatus() {
    const isLoggedIn = true;
    return (
        <section>{isLoggedIn ? AboutMe() : "You are not logged in to your account"}</section>
    )
}

export default UserStatus;

