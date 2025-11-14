const Search = ({ them, setUser }) => {
    const searchUserName = async (userName) => {
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const result = await res.json();

            setUser({...result});
        } catch(err) {
            console.log(err)
        }
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        
        const inpValue = e.target.search.value;

        searchUserName(inpValue)
    }

    return (
        <>
            <form onSubmit={hanldeSubmit} className={(them === "light" ? "flex justify-between items-center w-165 rounded-2xl shadow-xl h-15 bg-white" : "flex justify-between items-center w-165 rounded-2xl shadow-xl h-15 bg-[#1E2B48]") + " duration-500"}>
                <div className="flex">
                    {them === "light" ? <img src="./src/images/search.png" className="h-10 ml-3" /> : <img src="./src/images/search2.png" className="h-10 ml-3" />}
                    <input type="text" name="search" placeholder="Search Github Username . . ." className={(them === "light" ? "w-120 focus:outline-0" : "w-120 focus:outline-0 text-white") + " duration-500"}/>
                </div>
                <button type="submit" className="bg-blue-500 text-white h-10 w-20 mr-2 rounded-[7px] cursor-pointer hover:bg-blue-400">Search</button>
            </form>
        </>
    )
}

export default Search;

