import productList from "./ProductList"

const Products = ({ cart, setCart }) => {
    const addToCart = (thisProduct) => {
        setCart(prev => {
        const prod = prev.find(product => product.name === thisProduct.name)

        if (prod) {
            return prev.map(product => product.name === thisProduct.name ? { ...product, quantity: product.quantity + 1 } : product)
        } else {
            return [ ...prev, { ...thisProduct, quantity: 1 } ]
        }
        })
    }

    const decreaseToCart = (product) => {
        setCart(prev => {
        const prod = prev.find(p => p.name === product.name);

        if (prod.quantity > 1) {
            return prev.map(pr => pr.name === product.name ? { ...prod, quantity: prod.quantity - 1 } : pr);
        } else {
            const newCart = cart.filter(obj => obj !== prod);

            return newCart
        }
        })
    }

    return (
        <section>
            <h1 className="text-5xl mt-25 ml-36 font-bold">Desserts</h1>
            <div className="flex justify-center items-center flex-wrap mt-5 ml-30 gap-5 w-210">
                {
                    productList.map(product => {
                    const quantityInCart = cart.find(p => p.name === product.name)?.quantity || 0;
                    return (
                    <>
                        <div>
                        <div className="flex justify-center items-center flex-col relative h-70">
                            {
                            quantityInCart === 0 ?
                            <img src={product.image.desktop} width={250} className="rounded-xl"/>
                            :
                            <img src={product.image.desktop} width={250} className="rounded-xl border-3 border-[#C73A0F]"/>
                            }
                            {
                            quantityInCart === 0 ? 
                            <button onClick={() => addToCart(product)} className="border bg-white hover:bg-gray-100 cursor-pointer border-[#C73A0F] rounded-3xl flex justify-center items-center h-10 w-40 absolute bottom-0"><img src="./src/assets/images/icon-add-to-cart.svg"/>Add to Cart</button>
                            :
                            <div className="rounded-3xl flex justify-evenly items-center h-10 w-40 absolute bottom-0 bg-[#C73A0F] text-white">
                                <button onClick={() => decreaseToCart(product)} className="cursor-pointer border rounded-full w-5 h-5 flex justify-center items-center"><img src="./src/assets/images/icon-decrement-quantity.svg" /></button>
                                <p>{cart.find(p => product.name === p.name).quantity}</p>
                                <button onClick={() => addToCart(product)} className="cursor-pointer border rounded-full w-5 h-5 flex justify-center items-center"><img src="./src/assets/images/icon-increment-quantity.svg" /></button>
                            </div>
                            }
                        </div>
                        <p className="text-gray-300 text-xs">{product.category}</p>
                        <h4 className="text-black">{product.name}</h4>
                        <h4 className="text-orange-600">{product.price.toFixed(2)}</h4>
                        </div>
                    </>
                    )
                    })
                }
            </div>
        </section>
    )
}

export default Products;

