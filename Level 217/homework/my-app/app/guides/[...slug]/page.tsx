const Guides = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = await params;

    return (
        <p className="text-sm text-neutral-600">
            {slug.join(" > ")}
        </p>
    );
};

export default Guides;
