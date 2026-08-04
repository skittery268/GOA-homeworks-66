"use client"

import posts from "../../data/posts.json";
import { useRouter } from "next/navigation";

const Posts = () => {
    const router = useRouter();

    return (
        <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
            <h1 className="mb-8 text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl">Posts</h1>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map(p => {
                        return (
                            <div
                                key={p.id}
                                className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-muted"
                            >
                                <h1 className="text-lg font-semibold tracking-tight">{p.title}</h1>
                                <h1 className="mt-2 grow text-sm leading-relaxed text-muted">{p.description}</h1>
                                <button
                                    onClick={() => router.push(`/posts/${p.id}`)}
                                    className="mt-5 w-fit cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                >
                                    View
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
};

export default Posts;
