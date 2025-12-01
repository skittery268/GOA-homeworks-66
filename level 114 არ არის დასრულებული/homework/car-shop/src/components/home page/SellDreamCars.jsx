import { useState } from "react";

const SellDreamCars = () => {
    const [plus1, setPlus1] = useState(true);
    const [plus2, setPlus2] = useState(false);
    const [plus3, setPlus3] = useState(false);

    const div1 = () => {
        setPlus1(!plus1);
        setPlus2(false);
        setPlus3(false);
    }

    const div2 = () => {
        setPlus2(!plus2);
        setPlus1(false);
        setPlus3(false);
    }

    const div3 = () => {
        setPlus3(!plus3);
        setPlus1(false);
        setPlus2(false);
    }

    return (
        <section className="w-full h-200 flex">
            <div className="w-[50%] h-200 flex justify-center items-center flex-col gap-10">
                <div className="flex h-200 mt-40 flex-col gap-5">
                    <h1 className="text-6xl w-130">We are selling your dream cars</h1>
                    <div className={`min-h-15 w-110 flex flex-col gap-3 border-b transition-all duration-800 ease-out border-gray-300 ${plus1 ? "max-h-40" : "max-h-15"}`}>
                        <button onClick={div1} className="cursor-pointer text-[20px] flex items-center">{plus1 ? <span className="text-4xl mb-2 mr-[15px] ml-1 font-bold m-0 p-0">-</span> : <span className="text-4xl mb-2 mr-2 font-bold m-0 p-0">+</span>} Can I book a test drive online?</button>
                        <p className={`text-[#6A7285] transition-opacity transition-transform duration-800 overflow-hidden ease-out ${plus1 ? "opacity-100 translate-y-0 max-h-40 pb-5" : "opacity-0 translate-y-5 max-h-0 pb-0"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className={`min-h-15 w-110 flex flex-col gap-3 border-b transition-all duration-800 ease-out border-gray-300 ${plus2 ? "max-h-40" : "max-h-15"}`}>
                        <button onClick={div2} className="cursor-pointer text-[20px] flex items-center">{plus2 ? <span className="text-4xl mb-2 mr-[15px] ml-1 font-bold m-0 p-0">-</span> : <span className="text-4xl mb-2 mr-2 font-bold m-0 p-0">+</span>} Do you offer credit payments?</button>
                        <p className={`text-[#6A7285] transition-opacity transition-transform duration-800 overflow-hidden ease-out ${plus2 ? "opacity-100 translate-y-0 max-h-40 pb-5" : "opacity-0 translate-y-5 max-h-0 pb-0"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className={`min-h-15 w-110 flex flex-col gap-3 border-b transition-all duration-800 ease-out border-gray-300 ${plus3 ? "max-h-40" : "max-h-15"}`}>
                        <button onClick={div3} className="cursor-pointer text-[20px] flex items-center">{plus3 ? <span className="text-4xl mb-2 mr-[15px] ml-1 font-bold m-0 p-0">-</span> : <span className="text-4xl mb-2 mr-2 font-bold m-0 p-0">+</span>} Can I return a vehicle for a refund?</button>
                        <p className={`text-[#6A7285] transition-opacity transition-transform duration-800 overflow-hidden ease-out ${plus3 ? "opacity-100 translate-y-0 max-h-40 pb-5" : "opacity-0 translate-y-5 max-h-0 pb-0"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-200 relative flex justify-center items-center">
                <img src="./src/images/img20.jpg" className="h-150 rounded-xl" />
                <div className="h-50 w-80 bottom-33 -left-10 bg-[#030D16] rounded-xl absolute">
                    <h1 className="text-2xl mt-8 ml-8 text-white">People</h1>
                    <h1 className="text-white text-6xl mt-2 font-bold ml-8">100+</h1>
                    <h1 className="text-gray-400 mt-2 ml-8">Aliquam et tellus nunc.</h1>
                </div>
                <div className="h-50 w-80 bottom-33 right-35 bg-[#030D16] rounded-xl absolute">
                    <h1 className="text-2xl mt-8 ml-8 text-white">World Dealers</h1>
                    <h1 className="text-white text-6xl mt-2 font-bold ml-8">16</h1>
                    <h1 className="text-gray-400 mt-2 ml-8">Sed porta leo nisi, vel.</h1>
                </div>
            </div>
        </section>
    )
}

export default SellDreamCars;

