const Cart = ({ cart, setCart, open, setOpen }) => {
    

    const removeElementInCart = (product) => {
        const newCart = cart.filter(prod => prod !== product);

        setCart(newCart)
    }

    return (
        <>
            <div className="w-100 h-100 bg-white rounded-xl mt-30">
                <h1 className="mt-5 ml-5 text-orange-700 text-2xl font-bold">Your Cart ({cart.reduce((acc, cur) => acc + cur.quantity, 0)})</h1>
                {
                    cart.length === 0 ? 
                    <div className="flex flex-col justify-center items-center ">
                        <img src="./src/assets/images/illustration-empty-cart.svg" alt="" className="mt-5" />
                        <p className="text-orange-900 mt-5">Your added items will appear here</p>
                    </div> : 
                    
                    cart.map(product => {
                    return <div className="flex justify-center items-center flex-col">
                        <div className="w-full">
                        <h2 className="ml-5 mt-5">{product.name}</h2>
                        <div className="flex justify-between">
                            <div className="flex">
                            <h2 className="ml-5 mr-5 text-amber-900">{product.quantity}x</h2>
                            <h2 className="mr-5 text-gray-600">@ ${product.price.toFixed(2)}</h2>
                            <h2 className="text-gray-700">${(product.price * product.quantity).toFixed(2)}</h2>
                            </div>
                            <button onClick={() => removeElementInCart(product)} className="mr-5 border border-amber-900 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer"><img src="./src/assets/images/icon-remove-item.svg" /></button>
                        </div>
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
                        <h1 className="text-3xl">{cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-5">
                        <div className="bg-[#FCF9F7] w-[80%] h-15 rounded-[10px] flex justify-center items-center">
                        <p className="flex justify-center items-center"><img src="./src/assets/images/icon-carbon-neutral.svg" /> This is a carbon neutral delivery</p>
                        </div>
                        <button onClick={() => setOpen(!open)} className="bg-[#C73A0F] w-[80%] h-15 rounded-full text-white cursor-pointer hover:bg-[#d04217]">Confirm Order</button>
                    </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;

