import AboutUs from "../components/AboutUs";
import Bg from "../components/Bg";
import Cars from "../components/Cars";
import Clients from "../components/Clients";
import Home_bg_car from "../components/Home.bg.car";
import Search_car from "../components/Search.car";

const Home = () => {
    return (
        <>
            <Home_bg_car />
            <Search_car />
            <Cars />
            <AboutUs />
            <Bg />
            <Clients />
        </>
    )
}

export default Home;