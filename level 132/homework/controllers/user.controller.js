let users = [];

const getAllUsers = (req, res) => {
    res.status(200).json(users);
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    res.status(200).json(user);
}

const registerUser = (req, res) => {
    const id = Date.now();

    const user = req.body;

    if (!user.userName || !user.password || !user.email) {
        return res.status(400).json({ message: "User name, email and password are required!" });
    }

    const exist = users.find(u => u.email === user.email);

    if (exist) {
        return res.status(400).json({ message: "Account in this email already exist!" });
    }

    users.push({ id, ...user });

    res.status(201).json({ id, ...user, password: undefined });
}

const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password!" });
    }

    res.status(200).json({ ...user, password: undefined });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    const updatedData = req.body;

    if (updatedData.email) {
        const exist = users.find(u => u.email === updatedData.email && u.id !== id);

        if (exist) {
            return res.status(400).json({ message: "Another account with this email already exists!" });
        }

        users[userIndex].email = updatedData.email;
    }

    if (updatedData.userName) users[userIndex].userName = updatedData.userName;
    if (updatedData.password) users[userIndex].password = updatedData.password;

    res.status(200).json({ ...users[userIndex], password: undefined });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User Not Found!" });
    }

    users.splice(userIndex, 1);

    res.status(204).send();
}

module.exports = { getAllUsers, getUserById, registerUser, loginUser, updateUser, deleteUser };