import { notFound } from "next/navigation";
import posts from "../../../data/posts.json";
import Link from "next/link";

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const choosedPost = posts.find(p => p.id === parseInt(id));

    if (!choosedPost) {
        notFound();
    };

    return (
        <main className="mx-auto w-full max-w-2xl px-5 py-12 sm:px-6 sm:py-16">
            <Link
                href={"/posts"}
                className="inline-block rounded-lg border border-line px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
            >
                Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{choosedPost.title}</h1>
            <h1 className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{choosedPost.description}</h1>
        </main>
    );
};

export default Post;
