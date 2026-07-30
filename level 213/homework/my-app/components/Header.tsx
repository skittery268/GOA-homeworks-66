import Link from "next/link";

// Server Component: no "use client" and no hooks are needed here.
const Header = () => {
	return (
		<header className="bg-green-700 text-white">
			<div className="max-w-4xl mx-auto p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<Link href="/" className="text-xl font-bold">
					Animal World
				</Link>

				<nav className="flex gap-4 text-sm">
					<Link href="/" className="hover:underline">
						Home
					</Link>
					<Link href="/about" className="hover:underline">
						About
					</Link>
					<Link href="/gallery" className="hover:underline">
						Gallery
					</Link>
					<Link href="/blog" className="hover:underline">
						Blog
					</Link>
					<Link href="/contact" className="hover:underline">
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
