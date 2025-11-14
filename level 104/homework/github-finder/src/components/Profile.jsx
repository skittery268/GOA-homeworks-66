const Profile = ({ them, user }) => {
    console.log(user)
    console.log(them)
    return (
        <>
            {user.login ? 
                <div className={(them === "light" ? "flex justify-center items-center w-165 min-h-80 mt-5 rounded-2xl shadow-2xl bg-white" : "flex justify-center items-center w-165 min-h-80 mt-5 rounded-2xl shadow-2xl bg-[#1E2B48]") + " duration-500"}>
                    <div className="w-[90%] h-[80%]">
                        <div className="flex justify-between gap-8 w-full">
                            <div className="flex">
                                <img src={user.avatar_url} className="rounded-[100%] h-25" />
                                <div className="ml-10">
                                    <h1 className={(them === "light" ? "text-2xl flex justify-between items-center gap-20" : "text-2xl flex justify-between items-center text-white gap-20") + " duration-500"}>{user.name} <span className="text-[20px]">Joined 25 Jan 2011</span></h1>
                                    <a href={`https://github.com/${user.login}`} target="_blank" className="text-blue-500">@{user.login}</a>
                                    <p className="text-gray-500 mt-5 mb-5">{user.bio}</p>
                                </div>
                            </div>
                        </div> 
                        <div className={(them === "light" ? "w-120 h-25 ml-30 rounded-2xl bg-[#F5F7FF] flex justify-around items-center" : "w-120 h-25 ml-30 rounded-2xl bg-[#141D2E] flex justify-around items-center") + " duration-500"}>
                            <div>
                                <p className={(them === "light" ? "text-[#4B699B]" : "text-white") + " duration-500"}>Repos</p>
                                <p className={(them === "light" ? "font-bold" : "font-bold text-white") + " duration-500"}>{user.public_repos}</p>
                            </div>
                            <div>
                                <p className={(them === "light" ? "text-[#4B699B]" : "text-white") + " duration-500"}>Followers</p>
                                <p className={(them === "light" ? "font-bold" : "font-bold text-white") + " duration-500"}>{user.followers}</p>
                            </div>
                            <div>
                                <p className={(them === "light" ? "text-[#4B699B]" : "text-white") + " duration-500"}>Following</p>
                                <p className={(them === "light" ? "font-bold" : "font-bold text-white") + " duration-500"}>{user.following}</p>
                            </div>
                        </div>
                        <div className="flex gap-10 mt-7 ml-30 h-35">
                            <div>
                                <div className="flex items-center">
                                    {them === "dark" ? <img src="./src/images/location.png" className="h-7" /> : <img src="./src/images/location2.png" className="h-7" />}
                                    <p className={them === "light" ? "text-[#4B6A9B]" : "text-white"}>{user.location === null ? "Not available" : user.location}</p>
                                </div>
                                <div className="flex items-center">
                                    {them === "dark" ? <img src="./src/images/link.png" className="h-7" /> : <img src="./src/images/link2.png" className="h-7" />}
                                    <a href={user.blog === "" ? "" : user.blog} target="_blank" className={them === "light" ? "text-[#4B6A9B]" : "text-white"}>{user.blog === "" || user.blog === undefined ? "Not available" : user.blog.slice(8, -1)}</a>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    {them === "dark" ? <img src="./src/images/twitter.png" className="h-7" /> : <img src="./src/images/twitter2.png" className="h-7" />}
                                    <p className={them === "light" ? "text-[#4B6A9B]" : "text-white"}>{user.twitter_username === null ? "Not available" : user.twitter_username}</p>
                                </div>
                                <div className="flex items-center">
                                    {them === "dark" ? <img src="./src/images/company.png" className="h-7" /> : <img src="./src/images/company2.png" className="h-7" />}
                                    <p className={them === "light" ? "text-[#4B6A9B]" : "text-white"}>{user.company === null ? "Not available" : user.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :

                <div className={(them === "light" ? "flex justify-center items-center w-165 min-h-80 mt-5 rounded-2xl shadow-2xl bg-white" : "flex justify-center items-center w-165 min-h-80 mt-5 rounded-2xl shadow-2xl bg-[#1E2B48]") + " duration-500"}>
                    
                </div>
            }
        </>
    )
}

export default Profile;