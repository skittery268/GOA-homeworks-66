function Footer(props) {
    return (
        <footer style={{color: props.color, backgroundColor: props.bgColor}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </footer>
    )
}

export default Footer;