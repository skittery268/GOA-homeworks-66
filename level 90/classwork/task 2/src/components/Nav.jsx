function Nav({ textColor, title, bgColor}) {
    return (
        <nav>
            <h1 style={{color: textColor}}>{title}</h1>
            <ul style={{color: textColor, backgroundColor: bgColor}}>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>
        </nav>
    )
}

export default Nav;