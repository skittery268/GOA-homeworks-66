import Link from "next/link";

const Home = () => {
	return (
		<>
			<section className="rounded-lg border border-gray-200 bg-white p-6 text-center sm:p-10">
				<h1 className="text-3xl font-bold sm:text-4xl">Welcome to MyShop</h1>
				<p className="mx-auto mt-3 max-w-xl text-gray-600">
					A small demo store with electronics and everyday gear. Browse the
					catalog and open any product to see the details.
				</p>
				<Link
					href="/products"
					className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
				>
					Browse products
				</Link>
			</section>

			<section className="mt-6 grid gap-4 sm:grid-cols-3">
				<div className="rounded-lg border border-gray-200 bg-white p-5">
					<h2 className="font-semibold">Free delivery</h2>
					<p className="mt-1 text-sm text-gray-600">
						On every order above $100, anywhere in the country.
					</p>
				</div>
				<div className="rounded-lg border border-gray-200 bg-white p-5">
					<h2 className="font-semibold">2 year warranty</h2>
					<p className="mt-1 text-sm text-gray-600">
						All items come with an official manufacturer warranty.
					</p>
				</div>
				<div className="rounded-lg border border-gray-200 bg-white p-5">
					<h2 className="font-semibold">Easy returns</h2>
					<p className="mt-1 text-sm text-gray-600">
						Changed your mind? Send it back within 30 days.
					</p>
				</div>
			</section>
		</>
	);
};

export default Home;
