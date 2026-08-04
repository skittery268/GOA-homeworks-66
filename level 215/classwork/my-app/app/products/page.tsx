import Link from "next/link";
import products from "../../data/products.json";

const Products = () => {
    return (
        <>
            <h1 className="text-2xl font-bold sm:text-3xl">Products</h1>
            <p className="mt-1 text-gray-600">{products.length} items available</p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    products.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                            >
                                <div className="flex flex-1 flex-col p-4">
                                    <h1 className="font-semibold">{product.name}</h1>
                                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">{product.description}</p>
                                    <p className="mt-3 text-lg font-bold">${product.price}</p>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="mt-4 block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700"
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Products;
