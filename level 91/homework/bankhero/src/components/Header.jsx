import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1>BankHero</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;