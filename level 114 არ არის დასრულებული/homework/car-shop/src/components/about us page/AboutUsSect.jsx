import { Link } from "react-router";
import aboutUs1 from "../../images/aboutUs1.jpg";
import aboutUs2 from "../../images/aboutUs2.jpg";

const AboutUsSect = () => {
    return (
        <section className="h-190 w-full">
            <div className="flex justify-around items-center gap-10 mt-30">
                <div className=" h-160 w-130 relative">
                    <img src={aboutUs1} className="h-160 w-130 rounded-xl" />
                    <img src={aboutUs2} className="h-70 w-60 rounded-xl absolute right-[-100px] bottom-50" />
                </div>
                <div className=" h-160 w-130 flex flex-col justify-center items-start gap-10">
                    <h1 className="text-7xl">Customize your ride with our expert services today!</h1>
                    <p className="text-[18px] text-[#6A728D]">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde iste natus.</p>
                    <Link to={"/pages/our-services"} className="bg-red-600 pt-4 pb-4 pl-7 pr-7 text-white rounded-xl hover:bg-red-700">Our Services</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSect;
