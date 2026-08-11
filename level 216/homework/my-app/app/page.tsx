import Link from "next/link";

const Home = () => {
	return (
		<main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
			<h1 className="text-2xl font-semibold sm:text-3xl">My App</h1>
			<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
				Simple product catalog.
			</p>
			<Link
				href="/shop"
				className="mt-6 inline-block rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:border-neutral-700 dark:hover:bg-neutral-900"
			>
				Go to shop
			</Link>
		</main>
	);
};

export default Home;
