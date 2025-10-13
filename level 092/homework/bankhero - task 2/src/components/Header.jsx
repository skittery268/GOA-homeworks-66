import Nav from "./Nav";

function Header({ isLoggedIn }) {
    return (
        <Nav isLoggedIn={isLoggedIn} />
    )
}

export default Header;