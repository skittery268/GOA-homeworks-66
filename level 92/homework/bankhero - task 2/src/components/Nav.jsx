import User from "./User";

function Nav({ isLoggedIn }) {
    return (
        <User isLoggedIn={isLoggedIn} />
    )
}

export default Nav;