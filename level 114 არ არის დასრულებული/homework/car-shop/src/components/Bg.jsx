import { useEffect, useState } from "react";

const Bg = () => {
    const images = ["./src/images/car2.jpg", "./src/images/car3.jpg"];

    const [index, setIndex] = useState(0);
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setZoom(true);

            setTimeout(() => {
                setIndex(prev => (prev + 1) % images.length);

                setZoom(false);
            }, 5000);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="h-130 w-full relative overflow-hidden">
                <div className="h-full w-full absolute bg-black opacity-30 z-2"></div>
                <img src={images[index]} className={`h-full w-full transition-transform duration-5000 ${zoom ? "scale-110" : "scale-100"}`} />
            </div>
            <div className="mt-30 flex justify-center items-center gap-30 mb-30">
                <h1 className="text-5xl w-110 font-bold">Subscribe for the exclusive updates!</h1>
                <div className="flex flex-col left-0 gap-5">
                    <input type="email" placeholder="Enter Your Email Adress" className="w-130 border-b pb-3 flex left-0 active:outline-0 focus:outline-0" />
                    <label className="text-[#6A7281] flex items-center gap-3">
                        <input type="checkbox" />
                        I agree to the Privacy Policy.
                    </label>
                </div>
                <button className="text-xl hover:text-blue-600 cursor-pointer duration-200">Subscribe</button>
            </div>
        </>
    )
}

export default Bg;
