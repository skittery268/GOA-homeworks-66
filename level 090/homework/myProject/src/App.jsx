import Footer from "./components/Footer"
import Nav from "./components/Nav"
import User from "./components/User"

function App() {
    return (
        <>
            <Nav title="Hello world" textColor="yellow" bgColor="red" />
            <User name="Saba" age="16" email="sabadzidzikashvili6@gmail.com" />
            <Footer color="red" bgColor="black" title="FOOTER" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ipsa!" />
        </>
    )
}

export default App
