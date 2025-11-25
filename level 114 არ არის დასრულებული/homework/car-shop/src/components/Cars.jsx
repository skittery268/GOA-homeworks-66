import { useState } from "react";

const Cars = () => {
    const [button1] = useState(true);
    // const [button2, setButton2] = useState(false);
    // const [button3, setButton3] = useState(false);

    const cars1 = JSON.parse(localStorage.getItem("cars1"));
    // const cars2 = JSON.parse(localStorage.getItem("cars2"));

    console.log(cars1)
    return (
        <section className="min-h-200 w-full bg-[#EEF6FA] mt-10 flex justify-center items-center flex-col">
            <p className="text-[60px] font-bold">Featured cars</p>
            <p className="text-gray-500">Curabitur tellus leo, euismod sit amet gravida at, egestas sed.</p>

            <div>
                {
                    button1 && cars1.map((car) => {
                        return (
                            <div className="w-100 h-120 rounded-2xl mb-10 bg-amber-700">
                                <div>
                                    <img src={car.image} className="rounded-t-2xl" />
                                    <p>{car.price}</p>
                                    <p>{car.priceType === "sale" ? "SALE" : "RENT"}</p>
                                </div>
                                <div>
                                    <p>{car.title}</p>
                                    <p>{car.model} | {car.year}</p>
                                    <div>
                                        <div>
                                            <img src="./src/icons/speed.png" />
                                            <p>{car.mileage}</p>
                                        </div>
                                        <div>
                                            <img src="./src/icons/engine.png" />
                                            <p>{car.engine}</p>
                                        </div>
                                        <div>
                                            <img src="./src/icons/fuel.png" />
                                            <p>{car.fuel}</p>
                                        </div>
                                        <div>
                                            <img src="./src/icons/transmission.png" />
                                            <p>{car.transmission}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Cars;