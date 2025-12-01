const PurCars = () => {
    return (
        <section className="relative">
            <div className="relative bg-[url('./src/images/bgCar.jpg')] w-full h-200 bg-cover bg-center"></div>
            <div className="absolute top-0 bg-black/30 h-200 text-white w-full">
                <h1 className="text-6xl w-200 z-50 text-white mt-45 ml-30 font-bold">We make purchasing cars easy and comfortable</h1>
                <div className="flex items-center gap-10 mt-15 ml-30">
                    <div className="h-60 w-60 bg-[#EEF6FA] rounded-xl flex flex-col justify-end text-black">
                        <img src="./src/icons/carInsurance.png" className="h-17 w-17 ml-3 mb-5" />
                        <p className="mb-7 ml-5 text-xl">Sale Contracts</p>
                    </div>
                    <div className="h-60 w-60 bg-[#EEF6FA] rounded-xl flex flex-col justify-end text-black">
                        <img src="./src/icons/carService.png" className="h-17 w-17 ml-3 mb-5" />
                        <p className="mb-7 ml-5 text-xl">Car inspections</p>
                    </div>
                    <div className="h-60 w-60 bg-[#EEF6FA] rounded-xl flex flex-col justify-end text-black">
                        <img src="./src/icons/carKey.png" className="h-17 w-17 ml-3 mb-5" />
                        <p className="mb-7 ml-5 text-xl">Owner's guide</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-50 bg-blue-600 flex justify-between items-center">
                <h1 className="text-5xl w-120 text-white ml-20">Automotive excellence in every respect</h1>
                <button className="cursor-pointer bg-[#1B2333] h-15 w-30 hover:bg-[#252D40] text-white rounded-xl mr-20">View More</button>
            </div>
        </section>
    )
}

export default PurCars;