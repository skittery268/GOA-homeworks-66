function User({ isLoggedIn }) {
    if (isLoggedIn) {
        return <p>Hello User</p>
    } else {
        return <p>Please log in to your account</p>
    }
}

export default User;