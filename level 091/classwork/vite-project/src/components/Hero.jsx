function Hero(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
        </section>
    )
}

export default Hero;