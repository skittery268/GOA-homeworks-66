import { games } from "@/data/games";
import Link from "next/link";

const Games = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Games</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    games.map((g, index) => {
                        return (
                            <div key={index} className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4">
                                <h1 className="text-xs font-medium uppercase tracking-wide text-neutral-400">No {index + 1}</h1>
                                <h1 className="mt-1 text-base font-semibold">{g.name}</h1>
                                <h1 className="mt-2 text-sm leading-relaxed text-neutral-600">{g.description}</h1>
                                <h1 className="mt-3 text-xs text-neutral-500">{g.genre}</h1>
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
        </div>
    );
};

export default Games;
