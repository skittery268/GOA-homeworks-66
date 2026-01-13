const App = () => {
  const register = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { 
      userName: e.target.userName.value,
      userEmail: e.target.userEmail.value,
      userPassword: e.target.userPassword.value
    }

    register(data);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Enter your name" />
        <br />
        <input type="email" name="userEmail" placeholder="Enter your email" />
        <br />
        <input type="password" name="userPassword" placeholder="Enter your password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default App;