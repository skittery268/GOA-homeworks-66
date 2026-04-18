import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";

const Feed = () => {
    const { posts } = usePosts();
    
    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
            {
                posts.length > 0 ? (
                    posts.map(post => {
                        return <PostCard key={post._id} feed={true} post={post} />
                    })
                ) : (
                    <h1 className="glass-card p-10 text-center text-2xl font-display font-bold text-ink tracking-tight">
                        No posts yet!
                    </h1>
                )
            }
        </section>
    )
}

export default Feed;