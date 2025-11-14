import { useState } from "react";

const Search = () => {
    const [obj, setObj] = useState({});

    const searchUserName = async (userName) => {
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const result = await res.json();

            setObj({...result});
        } catch(err) {
            alert(`cant find ${userName}`)
            console.log(err)
        }
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        
        const inpValue = e.target.search.value;

        searchUserName(inpValue)
    }

    console.log(obj)

    return (
        <>
            <form onSubmit={hanldeSubmit}>
                <input type="text" name="search" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Search;

