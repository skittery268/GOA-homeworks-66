const Clients = () => {
    return (
        <section className="h-200 w-full bg-[#EEF6FA]">
            <div className="h-65 flex justify-center items-center flex-col">
                <h1 className="text-[60px] mb-2 mt-5">What our clients say</h1>
                <p className="text-[#777F8D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae porta.</p>
            </div>
            <div className="h-110 w-full flex justify-center  gap-7">
                <div className="h-[80%] w-[40%] flex justify-center bg-white rounded-xl items-center hover:-translate-y-1 duration-200">
                    <div className="h-[70%] w-[80%] hover:text-black">
                        <h1 className="m-0 p-0 text-6xl text-blue-600">❝</h1>
                        <p className="text-[17.5px] text-[#333A49]">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut rspiciatis unde omnis iste natus. Sed ut perspiciatis.</p>
                        <div className="flex items-center gap-5 mt-7">
                            <img src="./src/images/avatar1.jpg" className="h-18 w-18 rounded-full" />
                            <div>
                                <p className="font-bold text-xl">David Harris</p>
                                <p className="text-[#B2B6BE]">Phoenix, AZ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[80%] w-[40%] flex justify-center bg-white rounded-xl items-center hover:-translate-y-1 duration-200">
                    <div className="h-[70%] w-[80%]">
                        <h1 className="m-0 p-0 text-6xl text-blue-600">❝</h1>
                        <p className="text-[17.5px] text-[#333A49]">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut rspiciatis unde omnis iste natus. Sed ut perspiciatis.</p>
                        <div className="flex items-center gap-5 mt-7">
                            <img src="./src/images/avatar2.jpg" className="h-18 w-18 rounded-full" />
                            <div>
                                <p className="font-bold text-xl">Kate White</p>
                                <p className="text-[#B2B6BE]">Chicago, IL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;
