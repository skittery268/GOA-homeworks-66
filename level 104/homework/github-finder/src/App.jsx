import { useState } from "react"
import Search from "./components/Search"
import Profile from "./components/Profile";

function App() {
  const [them, setThem] = useState("light");
  const [user, setUser] = useState({});
  return (
    <main className={(them === "light" ? "bg-[#F5F7FF] flex justify-center items-center flex-col h-screen" : "bg-[#141D2E] flex justify-center items-center flex-col h-screen") + " duration-500"}>
      <div className="flex justify-between items-center mb-5 w-165">
        <h1 className={(them === "light" ? "text-4xl text-[#4B699B]" : "text-4xl text-white") + " duration-500"}>devfinder</h1>
        <div className="flex flex-col items-end">
          <button onClick={() => setThem(them === "light" ? "dark" : "light")} className={(them === "light" ? "text-[#697C9A] cursor-pointer" : "text-white cursor-pointer") + " duration-500 flex justify-center items-center gap-3"}>{them === "light" ? "DARK" : "LIGHT"} {them === "light" ? <img src="./src/images/moon.png" className="h-6" /> : <img src="./src/images/sun.png" className="h-6" />}</button>
          {user.message && <p className="text-red-600">User not found</p>}
        </div>
      </div>
      <Search them={them} setUser={setUser} />
      <Profile them={them} user={user} />
    </main>
  )
}

export default App
