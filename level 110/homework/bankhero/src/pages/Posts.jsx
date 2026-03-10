import { usePosts } from "../context/PostsContext"

const Posts = () => {
    const { posts } = usePosts();

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto space-y-6">
                {posts.map((p, index) => {
                    return (
                        <article key={index} className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                            <p className="text-gray-700">{p.content}</p>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default Posts;