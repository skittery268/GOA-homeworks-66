import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const wind = () => {
    setOpen(false)
    setOpen2(true)
  }

  return (
    <main className="mb-10">
      <div className="flex">
        <Products cart={cart} setCart={setCart} />

        <Cart cart={cart} setCart={setCart} open={open} setOpen={setOpen} />

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
            <div className="bg-white h-70 w-140 fixed top-60 left-110 flex justify-center items-center flex-col rounded-2xl opacity-100">
                <img src="./src/assets/images/icon-order-confirmed.svg" />
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
                <div>
                  {
                    cart.map(product => {
                      return <div className="flex justify-center items-center flex-col">
                          <div className="w-full flex justify-center items-center">
                            <img src={product.image.desktop} className="h-13" />
                            <div>
                              <h2 className="ml-5 mt-5">{product.name}</h2>
                              <div className="flex justify-between">
                                  <div className="flex">
                                  <h2 className="ml-5 mr-5 text-amber-900">{product.quantity}x</h2>
                                  <h2 className="mr-5 text-gray-600">@ ${product.price.toFixed(2)}</h2>
                                  <h2 className="text-gray-700">${(product.price * product.quantity).toFixed(2)}</h2>
                                  </div>
                              </div>
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
                        
                    </div>
                    </div>
                  }
                </div>
                <button>Start new order</button>
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default App;
