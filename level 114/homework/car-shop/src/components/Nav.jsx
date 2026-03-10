import { Link } from "react-router";
import DropDownMenu from "./utils/DropDownMenu";

const Nav = () => {
    return (
        <>
            <div className="mt-30"></div>
            <nav className="fixed top-0 left-0 right-0 z-1000 flex justify-between items-center pr-20 pt-7 pb-7 pl-20 bg-white">
                <Link to={"/home"} className="text-4xl font-bold">Cars</Link>
                <ul className="flex gap-10 justify-center items-center">
                    <li><Link to={"/home"} className="font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">Home</Link></li>
                    <DropDownMenu title={"Pages"} items={[{label: "About Us", to: "/pages/about-us"}, {label: "Our Services", to: "/pages/our-services"}, {label: "Our Agents", to: "/pages/our-agents"}, {label: "FAQs", to: "/pages/faqs"}, {label: "Pricing", to: "/pages/pricing"}, {label: "Contacts", to: "/pages/contacts"}]} height={"h-70"} />
                    <li><Link to={"/cars"} className="font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">Cars</Link></li>
                    <li><Link to={"/portfolio"} className="font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">Portfolio</Link></li>
                    <li><Link to={"/blog"} className="font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">Blog</Link></li>
                    <li><Link to={"/shop"} className="font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-black after:duration-300 hover:after:w-full">Shop</Link></li>
                    <img src="./src/icons/cart.png" className="h-7 cursor-pointer" />
                    <img src="./src/icons/search.png" className="h-7 cursor-pointer" />
                    <Link to={"/contact"} className="flex justify-center items-center h-15 rounded-xl w-30 hover:bg-blue-700 bg-blue-600 text-white font-bold">Let's Talk</Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav;