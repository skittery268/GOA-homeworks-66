import { games } from "@/data/games";
import Link from "next/link";

const Home = () => {
	const genres = games.reduce<string[]>((acc, cur) => {
		if (!acc.includes(cur.genre)) {
			acc.push(cur.genre);
		};

		return acc;
	}, []);

	return (
		<div className="space-y-10">
			<section>
				<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Games Catalog</h1>
				<p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
					A small catalog of {games.length} games with short descriptions, grouped by {genres.length} genres.
				</p>

				<div className="mt-5 flex flex-wrap gap-3">
					<Link
						className="rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
						href={"/games"}
					>
						Browse games
					</Link>
					<Link
						className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
						href={"/genres"}
					>
						Browse genres
					</Link>
				</div>
			</section>

			<section>
				<h2 className="text-lg font-semibold tracking-tight">Genres</h2>

				<div className="mt-4 flex flex-wrap gap-2">
					{
						genres.map((g, index) => {
							return (
								<Link
									key={index}
									className="inline-block rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
									href={`/genres/${g}`}
								>
									{g}
								</Link>
							)
						})
					}
				</div>
			</section>

			<section>
				<h2 className="text-lg font-semibold tracking-tight">Featured games</h2>

				<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{
						games.slice(0, 6).map((g, index) => {
							return (
								<div key={index} className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4">
									<h3 className="text-base font-semibold">{g.name}</h3>
									<p className="mt-2 text-sm leading-relaxed text-neutral-600">{g.description}</p>
									<p className="mt-3 text-xs text-neutral-500">{g.genre}</p>
									<div className="mt-auto pt-4">
										<Link
											className="inline-block rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
											href={`/games/${g.id}`}
										>
											View
										</Link>
									</div>
								</div>
							)
						})
					}
				</div>
			</section>
		</div>
	);
};

export default Home;
