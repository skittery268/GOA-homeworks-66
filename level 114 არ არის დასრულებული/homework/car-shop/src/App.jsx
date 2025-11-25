import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Pages from "./pages/Pages"
import Cars from "./pages/Cars"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"

const App = () => {
  const cars = [
  {
    title: "Porsche 911 GT3",
    price: 200000,
    priceType: "sale",
    model: "Coupe",
    year: 2019,
    mileage: "5K mi",
    engine: "6.0L TS+",
    fuel: "Gasoline",
    transmission: "Tiptronic",
    city: "Chicago",
    agent: "Amy Walker",
    added: "23.02.24",
    image: "./src/images/porsche911GT3.jpg"
  },
  {
    title: "Audi A4",
    price: 800,
    priceType: "rent per week",
    model: "Sedan",
    year: 2018,
    mileage: "18K mi",
    engine: "2.5L TD+",
    fuel: "Diesel",
    transmission: "Automatic",
    city: "Detroit",
    agent: "Frank Lewis",
    added: "22.02.24",
    image: "./src/images/audiA4.jpg"
  },
  {
    title: "Audi RS6",
    price: 14500,
    priceType: "sale",
    model: "Wagon",
    year: 2018,
    mileage: "20K mi",
    engine: "1.6L CPNA",
    fuel: "Gasoline",
    transmission: "Manual",
    city: "Seattle",
    agent: "Amy Walker",
    added: "21.02.24",
    image: "./src/images/audiRS6.jpg"
  },
  {
    title: "Audi RS7",
    price: 88000,
    priceType: "sale",
    model: "Coupe",
    year: 2012,
    mileage: "15K mi",
    engine: "6.0L TS+",
    fuel: "Gasoline",
    transmission: "Automatic",
    city: "Miami",
    agent: "Frank Lewis",
    added: "20.02.24",
    image: "./src/images/audiRS7.jpg"
  },
  {
    title: "Toyota C-HR",
    price: 1000,
    priceType: "rent per week",
    model: "Hatchback",
    year: 2014,
    mileage: "50K mi",
    engine: "4.0L Turbo",
    fuel: "Gasoline",
    transmission: "Automatic",
    city: "Seattle",
    agent: "Amy Walker",
    added: "19.02.24",
    image: "./src/images/toyotaC-HR.jpg"
  },
  {
    title: "BMW 1 Series",
    price: 70000,
    priceType: "sale",
    model: "Hatchback",
    year: 2017,
    mileage: "10K mi",
    engine: "3.0L TDI+",
    fuel: "Gasoline",
    transmission: "Automatic",
    city: "Miami",
    agent: "Frank Lewis",
    added: "18.02.24",
    image: "./src/images/BMW1Series.jpg"
  },

  // ---- второй блок ----

  {
    title: "Audi R8",
    price: 100000,
    priceType: "sale",
    model: "Coupe",
    year: 2016,
    mileage: "50K mi",
    engine: "4.2L FSI",
    fuel: "Gasoline",
    transmission: "Automatic",
    city: "Chicago",
    agent: "Amy Walker",
    added: "17.02.24",
    image: "./src/images/audiR8.jpg"
  },
  {
    title: "BMW M4",
    price: 800,
    priceType: "rent per week",
    model: "Coupe",
    year: 2004,
    mileage: "100K mi",
    engine: "5.4L TS+",
    fuel: "Gasoline",
    transmission: "Tiptronic",
    city: "Seattle",
    agent: "Frank Lewis",
    added: "16.02.24",
    image: "./src/images/BMWM4.jpg"
  },
  {
    title: "Porsche 718",
    price: 200000,
    priceType: "sale",
    model: "Sport",
    year: 2019,
    mileage: "100K mi",
    engine: "3.9L Turbo",
    fuel: "Gasoline",
    transmission: "Tiptronic",
    city: "Seattle",
    agent: "Amy Walker",
    added: "15.02.24",
    image: "./src/images/porsche718.jpg"
  },
  {
    title: "Mercedes AMG 35",
    price: 90000,
    priceType: "sale",
    model: "Sedan",
    year: 2024,
    mileage: "10K mi",
    engine: "6.5L Turbo",
    fuel: "Gasoline",
    transmission: "Automatic",
    city: "Detroit",
    agent: "Jim Carter",
    added: "14.02.24",
    image: "./src/images/mercedesAMG35.jpg"
  },
  {
    title: "BMW M3",
    price: 20000,
    priceType: "sale",
    model: "Wagon",
    year: 2008,
    mileage: "54K mi",
    engine: "3.1L Turbo",
    fuel: "Diesel",
    transmission: "Automatic",
    city: "Chicago",
    agent: "Jim Carter",
    added: "13.02.24",
    image: "./src/images/BMWM3.jpg"
  },
  {
    title: "BMW M2",
    price: 80000,
    priceType: "sale",
    model: "Coupe",
    year: 2018,
    mileage: "94K mi",
    engine: "4.4L Turbo",
    fuel: "Gasoline",
    transmission: "Tiptronic",
    city: "Detroit",
    agent: "Jim Carter",
    added: "12.02.24",
    image: "./src/images/BMWM2.jpg"
  }
];

localStorage.setItem("cars2", JSON.stringify(cars));
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
