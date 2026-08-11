const Docs = async ({ params } : { params: Promise<{ slug?: string[] }>  }) => {
    const { slug } = await params;

    if (!slug) {
        return (
            <>
                <h1>Documentation homepage</h1>
            </>
        )
    }

    return (
        <>
            <h1>Your Path: docs {">"} { slug.map(sl => `${sl} > `) }</h1>

            <h1>Documentation</h1>

            {
                slug.map((sl, index) => {
                    return <h1 key={sl}>Section {index + 1}: {sl}</h1>
                })
            }
        </>
    );
};

export default Docs;

