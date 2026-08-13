import { games } from "@/data/games";
import { notFound } from "next/navigation";

const Genre = async ({ params }: { params: Promise<{ genre: string }> }) => {
    const { genre } = await params;

    const choosedGenreGames = games.filter(g => g.genre === decodeURIComponent(genre));

    if (choosedGenreGames.length === 0) {
        notFound();
    };

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                choosedGenreGames.map((g, index) => {
                    return (
                        <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                            <h1 className="text-base font-semibold">{g.name}</h1>
                            <h1 className="mt-2 text-sm leading-relaxed text-neutral-600">{g.description}</h1>
                            <h1 className="mt-3 text-xs text-neutral-500">{g.genre}</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Genre;
