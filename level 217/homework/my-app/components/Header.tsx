import Link from "next/link"

const linkClasses = "rounded-md px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const Header = () => {
    return (
        <header className="border-b border-neutral-200 bg-white">
            <nav className="mx-auto flex w-full max-w-5xl items-center gap-1 px-4 py-3 sm:px-6">
                <Link className={linkClasses} href={"/"}>Home</Link>
                <Link className={linkClasses} href={"/genres"}>Genres</Link>
                <Link className={linkClasses} href={"/games"}>Games</Link>
            </nav>
        </header>
    );
};

export default Header;
