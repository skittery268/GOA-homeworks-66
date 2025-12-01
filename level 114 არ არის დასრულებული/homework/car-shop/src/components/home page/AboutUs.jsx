import { Link } from "react-router";

const AboutUs = () => {
    return (
        <section className="h-240 w-full">
            <div className="flex justify-around items-center gap-10 mt-30">
                <div className=" h-160 w-130 relative">
                    <img src="./src/images/aboutUs1.jpg" className="h-160 w-130 rounded-xl" />
                    <img src="./src/images/aboutUs2.jpg" className="h-70 w-60 rounded-xl absolute right-[-100px] bottom-50" />
                </div>
                <div className=" h-160 w-130 flex flex-col justify-center items-start gap-10">
                    <h1 className="text-7xl">Customize your ride with our expert services today!</h1>
                    <p className="text-[18px] text-[#6A728D]">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde iste natus.</p>
                    <Link to={"/pages/about-us"} className="bg-red-600 pt-4 pb-4 pl-7 pr-7 text-white rounded-xl hover:bg-red-700">About Us</Link>
                </div>
            </div>
            <div className="flex justify-center items-center mt-30 gap-7">
                <img src="./src/icons/partner-2_2.png" className="opacity-50 hover:opacity-100 duration-400" />
                <img src="./src/icons/partner-2.png" className="opacity-50 hover:opacity-100 duration-400" />
                <img src="./src/icons/partner-3.png" className="opacity-50 hover:opacity-100 duration-400" />
                <img src="./src/icons/partner-4.png" className="opacity-50 hover:opacity-100 duration-400" />
                <img src="./src/icons/partner-5.png" className="opacity-50 hover:opacity-100 duration-400" />
                <img src="./src/icons/partner-6.webp" className="opacity-50 hover:opacity-100 duration-400" />
            </div>
        </section>
    )
}

export default AboutUs;
