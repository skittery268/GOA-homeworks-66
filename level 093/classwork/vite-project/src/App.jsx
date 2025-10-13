// 1) მოიძიეთ ინფორმაცია useState შესახებ, App კომპონენტში გამოიყენეთ ეს კაუჭი, შექმენით click მდგომარეობა, რომლის საწყისი მნიშვნელობა იქნება 0, როდესაც ღილეკაზე მოხდება დაწკაბება შეცვლაეთ მდგომარეობა (ანუ ერთით დააპლიუსეთ)

import { useState } from "react"


function App() {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)
  }

  return (
    <>
      <p>{click}</p>
      <button onClick={handleClick}>CLick here</button>
    </>
  )
}

export default App
