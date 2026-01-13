const Profile = () => {
    const thisUser = JSON.parse(localStorage.getItem("thisUser"));

    return (
        <section>
            <h1>User Name: {thisUser.userName}</h1>
            <h1>User Email: {thisUser.userEmail}</h1>
            <h1>User Password: {thisUser.userPassword}</h1>
        </section>
    )
}

export default Profile;