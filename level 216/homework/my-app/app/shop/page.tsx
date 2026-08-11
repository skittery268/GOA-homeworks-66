import { products } from "@/data/products";
import Link from "next/link";

const Shop = () => {
    const categoryes = products.reduce<string[]>((acc, cur) => {
        if (!acc.includes(cur.category)) {
            acc.push(cur.category);
        }

        return acc;
    }, []);
    
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
            <h1 className="text-2xl font-semibold sm:text-3xl">Shop</h1>
            <div className="mt-6 flex flex-wrap gap-2">
                {
                    categoryes.map((c, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    href={`/shop/${c}`}
                                    className="inline-flex rounded-md border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
                                >
                                    {c}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    products.map((p, index) => {
                        return (
                            <div
                                key={index}
                                className="rounded-lg border border-neutral-200 p-4 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
                            >
                                <h2 className="text-base font-medium">{p.name}</h2>
                                <p className="mt-1 text-lg font-semibold">{p.price}</p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                    <p className="rounded border border-neutral-200 px-2 py-0.5 dark:border-neutral-800">{p.category}</p>
                                    <p className="rounded border border-neutral-200 px-2 py-0.5 dark:border-neutral-800">{p.subcategory}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
};

export default Shop;
