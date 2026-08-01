import Link from "next/link";

const Header = () => {
	return (
		<header className="border-b border-gray-200 bg-white">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between">
				<Link href="/" className="text-xl font-bold text-gray-900">
					MyShop
				</Link>

				<nav className="flex gap-6 text-sm font-medium text-gray-600">
					<Link href="/" className="hover:text-gray-900">
						Home
					</Link>
					<Link href="/products" className="hover:text-gray-900">
						Products
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
