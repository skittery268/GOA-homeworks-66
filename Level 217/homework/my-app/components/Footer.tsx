import Link from "next/link";

const linkClasses = "text-neutral-600 hover:text-neutral-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-sm">
                        <h1 className="text-sm font-semibold">Games Catalog</h1>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                            A small catalog of games with short descriptions, grouped by genre.
                        </p>
                    </div>

                    <nav className="flex flex-col gap-2 text-sm">
                        <Link className={linkClasses} href={"/"}>Home</Link>
                        <Link className={linkClasses} href={"/genres"}>Genres</Link>
                        <Link className={linkClasses} href={"/games"}>Games</Link>
                    </nav>
                </div>

                <p className="mt-6 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
                    © {new Date().getFullYear()} Games Catalog
                </p>
            </div>
        </footer>
    );
};

export default Footer;
