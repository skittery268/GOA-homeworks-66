import { useState } from "react";

const Account = () => {
    const [account, setAccount] = useState({
        name: "Saba",
        password: "1234"
    })

    const changeName = () => {
        setAccount({...account, name: "Giorgi"});
    };

    const resetName = () => {
        setAccount({...account, name: "Saba"});
    }

    return (
        <>
            <h1>Account: </h1>
            <p>name: {account.name}</p>
            <p>password: {account.password}</p>
            <button onClick={changeName}>Change name</button>
            <button onClick={resetName}>Reset name</button>
        </>
    )
}

export default Account;