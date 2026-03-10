import { useState } from "react";

const Cars = () => {
    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);

    const cars1 = JSON.parse(localStorage.getItem("cars1"));
    const cars2 = JSON.parse(localStorage.getItem("cars2"));
    const cars3 = JSON.parse(localStorage.getItem("cars3"));

    const reverseButton1 = () => {
        setButton1(false);
        setButton2(true);
    }

    const reverseButton2 = () => {
        setButton2(false);
        setButton3(true)
    }
    
    return (
        <section className="min-h-200 w-full bg-[#EEF6FA] mt-10 flex justify-center items-center flex-col">
            <p className="text-[60px] font-bold mt-20">Featured cars</p>
            <p className="text-gray-500">Curabitur tellus leo, euismod sit amet gravida at, egestas sed.</p>

            <div className={button3 ? "flex flex-wrap justify-center items-center w-full mb-30 gap-10 mt-10" : "flex flex-wrap justify-center items-center w-full gap-10 mt-10"}>
                {
                    button1 && cars1.map((car) => {
                        return (
                            <div className="w-99 h-120 rounded-2xl mb-10 bg-white">
                                <div className="relative rounded-t-2xl overflow-hidden">
                                    <img src={car.image} className="rounded-t-2xl hover:scale-107 duration-500 cursor-pointer" />
                                    <p className="absolute bottom-7 left-5 text-white text-2xl text-shadow-2xs">${car.price}</p>
                                    <p className="absolute top-5 pt-[5px] text-[13px] pl-[15px] rounded-[10px] pr-[15px] pb-[5px] bg-red-600 text-white left-5">{car.priceType === "sale" ? "SALE" : "RENT"}</p>
                                </div>
                                <div className="border pb-8 rounded-b-2xl border-[#D3E5EE]">
                                    <div>
                                        <p className="mt-5 ml-5 text-2xl cursor-pointer hover:text-blue-600 duration-200">{car.title}</p>
                                        <p className="ml-5 text-[#9E95B5]">{car.model} ‧ {car.year}</p>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                        <div className="flex justify-center items-center gap-10 mt-4 mb-4">
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/speed.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.mileage}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/engine.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.engine}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/fuel.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.fuel}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/transmission.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.transmission}</p>
                                            </div>
                                        </div>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                    </div>
                                    <div className="flex gap-5 justify-center items-center mt-5">
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">City:</span> {car.city}</p>
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">Agent:</span> {car.agent}</p>
                                        <p className="text-[#8F95A0] text-[13px]">Added: {car.added}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    button2 && cars2.map((car) => {
                        return (
                            <div className="w-99 h-120 rounded-2xl mb-10 bg-white">
                                <div className="relative rounded-t-2xl overflow-hidden">
                                    <img src={car.image} className="rounded-t-2xl hover:scale-107 duration-500 cursor-pointer" />
                                    <p className="absolute bottom-7 left-5 text-white text-2xl text-shadow-2xs">${car.price}</p>
                                    <p className="absolute top-5 pt-[5px] text-[13px] pl-[15px] rounded-[10px] pr-[15px] pb-[5px] bg-red-600 text-white left-5">{car.priceType === "sale" ? "SALE" : "RENT"}</p>
                                </div>
                                <div className="border pb-8 rounded-b-2xl border-[#D3E5EE]">
                                    <div>
                                        <p className="mt-5 ml-5 text-2xl cursor-pointer hover:text-blue-600 duration-200">{car.title}</p>
                                        <p className="ml-5 text-[#9E95B5]">{car.model} ‧ {car.year}</p>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                        <div className="flex justify-center items-center gap-10 mt-4 mb-4">
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/speed.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.mileage}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/engine.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.engine}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/fuel.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.fuel}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/transmission.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.transmission}</p>
                                            </div>
                                        </div>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                    </div>
                                    <div className="flex gap-5 justify-center items-center mt-5">
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">City:</span> {car.city}</p>
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">Agent:</span> {car.agent}</p>
                                        <p className="text-[#8F95A0] text-[13px]">Added: {car.added}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    button3 && cars3.map((car) => {
                        return (
                            <div className="w-99 h-120 rounded-2xl mb-10 bg-white">
                                <div className="relative rounded-t-2xl overflow-hidden">
                                    <img src={car.image} className="rounded-t-2xl hover:scale-107 duration-500 cursor-pointer" />
                                    <p className="absolute bottom-7 left-5 text-white text-2xl text-shadow-2xs">${car.price}</p>
                                    <p className="absolute top-5 pt-[5px] text-[13px] pl-[15px] rounded-[10px] pr-[15px] pb-[5px] bg-red-600 text-white left-5">{car.priceType === "sale" ? "SALE" : "RENT"}</p>
                                </div>
                                <div className="border pb-8 rounded-b-2xl border-[#D3E5EE]">
                                    <div>
                                        <p className="mt-5 ml-5 text-2xl cursor-pointer hover:text-blue-600 duration-200">{car.title}</p>
                                        <p className="ml-5 text-[#9E95B5]">{car.model} ‧ {car.year}</p>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                        <div className="flex justify-center items-center gap-10 mt-4 mb-4">
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/speed.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.mileage}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/engine.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.engine}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/fuel.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.fuel}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="./src/icons/transmission.png" className="h-10" />
                                                <p className="text-[#989898] text-[13px] mt-1">{car.transmission}</p>
                                            </div>
                                        </div>
                                        <div className="w-[90%] mt-2.5 ml-2.5 border-gray-300 h-0 border-[0.5px] border-dashed"></div>
                                    </div>
                                    <div className="flex gap-5 justify-center items-center mt-5">
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">City:</span> {car.city}</p>
                                        <p className="text-[13px] cursor-pointer duration-200 hover:text-blue-600"><span className="text-[#8F95A0] text-[13px]">Agent:</span> {car.agent}</p>
                                        <p className="text-[#8F95A0] text-[13px]">Added: {car.added}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                button1 && <button onClick={reverseButton1} className="mb-30 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl w-[150px] h-[50px]">Load More</button>
            }
            {
                button2 && <button onClick={reverseButton2} className="mb-30 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl w-[150px] h-[50px]">Load More</button>
            }
        </section>
    )
}

export default Cars;