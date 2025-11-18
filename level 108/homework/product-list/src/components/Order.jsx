import { useState } from "react";

const Order = ({ cart, setCart, open, setOpen }) => {
    const [open2, setOpen2] = useState(false);

    const wind = () => {
        setOpen(false)
        setOpen2(true)
    }

    const startNewOrder = () => {
        setOpen2(false)
        setCart([])
    }

    return (
        <>
            {
                open && 
                <>
                    <div className="flex w-380 h-320 justify-center absolute items-center flex-col gap-5 bg-black opacity-50"></div>
                    <div className="bg-white h-70 w-140 fixed top-60 left-110 flex justify-center items-center flex-col rounded-2xl opacity-100">
                        <h1 className="text-5xl ml-10 mb-10 font-bold">Are your sure with your order?</h1>
                        <div className="flex">
                        <button onClick={wind} className="h-15 w-55 bg-[#C73A0F] rounded-4xl text-white cursor-pointer mr-2">Yes</button>
                        <button onClick={() => setOpen(false)} className="h-15 w-55 bg-white hover:bg-gray-100 border text-black border-[#C73A0F] rounded-4xl cursor-pointer">No</button>
                        </div>
                    </div>
                </>
            }

            {
                open2 && 
                <>
                    <div className="flex w-380 h-320 justify-center absolute items-center flex-col gap-5 bg-black opacity-50"></div>
                    <div className="overflow-y-auto bg-white min-h-130 max-h-160 w-140 fixed top-20 left-110 flex items-center flex-col rounded-2xl opacity-100">
                        <img src="./src/assets/images/icon-order-confirmed.svg" className="mr-105 mt-10" />
                        <h1 className="text-4xl font-bold mr-45 mt-5">Order Confirmed</h1>
                        <p className="text-[#B3928F] mr-64 mt-2">We hope you enjoy your food!</p>
                        <div className="bg-[#FCF9F7] w-115 mt-8 rounded-2xl">
                        {
                            cart.map(product => {
                            return <div className="flex justify-center items-center flex-col">
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex justify-center items-center">
                                    <img src={product.image.desktop} className="h-12 rounded-[5px] ml-5 mt-5" />
                                    <div>
                                        <h2 className="ml-5 mt-5">{product.name}</h2>
                                        <div className="flex justify-between">
                                            <div className="flex">
                                            <h2 className="ml-5 mr-5 text-amber-900">{product.quantity}x</h2>
                                            <h2 className="mr-5 text-gray-600">@ ${product.price.toFixed(2)}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <h2 className="text-gray-700 mr-5 font-bold mt-5">${(product.price * product.quantity).toFixed(2)}</h2>
                                </div>
                                <hr className="mt-5 w-[90%] border-gray-200" />
                            </div>
                            })
                        }

                        {
                            cart.length > 0 &&
                            <div>
                            <div className="flex justify-between items-center ml-5 mr-5 mt-8 mb-8">
                                <h2>Order Total</h2>
                                <h1 className="text-3xl">${cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}</h1>
                            </div>
                            <div className="flex justify-center items-center flex-col gap-5">
                                
                            </div>
                            </div>
                        }
                        </div>
                        <button onClick={startNewOrder} className="bg-[#C73A0F] text-white w-120 rounded-4xl mt-10 mb-5 p-4 cursor-pointer hover:bg-[#d04217]">Start new order</button>
                    </div>
                </>
            }
        </>
    )
}

export default Order;

