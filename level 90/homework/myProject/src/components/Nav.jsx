function Nav(props) {
    return (
        <nav>
            
            <h1 style={{color: props.textColor}}>{props.title}</h1>
            <ul style={{color: props.textColor, backgroundColor: props.bgColor}}>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>

            <h1 style={{color: props.textColor}}>{props.title}</h1>
            <ul style={{color: props.textColor, backgroundColor: props.bgColor}}>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>

            <h1 style={{color: props.textColor}}>{props.title}</h1>
            <ul style={{color: props.textColor, backgroundColor: props.bgColor}}>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>
        </nav>
    )
}

export default Nav;