function User(props) {
    return (
        <main>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </main>
    )
}

export default User;