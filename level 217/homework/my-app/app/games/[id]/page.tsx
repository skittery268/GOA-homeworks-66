import { games } from "@/data/games";
import { notFound } from "next/navigation";

const Game = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const choosedGame = games.find(g => g.id === parseInt(id));

    if (!choosedGame) {
        notFound();
    }

    return (
        <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{choosedGame.name}</h1>
            <h1 className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{choosedGame.description}</h1>
            <h1 className="mt-4 inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{choosedGame.genre}</h1>
        </div>
    );
};

export default Game;
