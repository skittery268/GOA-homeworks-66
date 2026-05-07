const EmptyPosts = () => {
    return (
        <div className="glass-card p-12 mt-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-sand mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-ink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-ink mb-1">No posts yet</h3>
            <p className="text-sm text-ink/40">
                Be the first to share something with the community
            </p>
        </div>
    );
};

export default EmptyPosts;
