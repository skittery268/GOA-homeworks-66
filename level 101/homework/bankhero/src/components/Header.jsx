function Header() {
    return (
        <header className="flex justify-between items-center pt-10 pb-10 pr-20 pl-20 bg-gray-50 border-b-1 border-gray-200">
            <h1>BankHero</h1>
            <nav>
                <ul className="style-none text-gray-500 flex gap-10 cursor-pointer">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;