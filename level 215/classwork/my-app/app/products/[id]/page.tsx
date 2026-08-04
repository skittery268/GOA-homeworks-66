import { product } from "@/types/product";
import products from "../../../data/products.json";
import { notFound } from "next/navigation";
import Link from "next/link";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const choosedProduct: product | undefined = products.find(prod => prod.id === parseInt(id));

    if (!choosedProduct) {
        notFound();
    }

    return (
        <section>
            <Link href={"/products"} className="text-sm text-gray-600 hover:text-gray-900">
                ← Go back
            </Link>

            <div className="mt-4 grid gap-8 rounded-lg border border-gray-200 bg-white p-4 sm:p-6 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">{choosedProduct.name}</h1>
                    <p className="mt-4 leading-relaxed text-gray-600">{choosedProduct.description}</p>
                    <p className="mt-6 text-3xl font-bold">${choosedProduct.price}</p>
                </div>
            </div>
        </section>
    );
};

export default Product;
