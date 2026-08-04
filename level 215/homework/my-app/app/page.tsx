import Link from "next/link";

const Home = () => {
	return (
		<main className="mx-auto flex w-full max-w-2xl grow flex-col items-center justify-center px-5 py-16 text-center sm:px-6">
			<h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Posts</h1>
			<p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
				A small collection of short articles about web development.
			</p>
			<Link
				href={"/posts"}
				className="mt-8 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				Browse posts
			</Link>
		</main>
	);
};

export default Home;
