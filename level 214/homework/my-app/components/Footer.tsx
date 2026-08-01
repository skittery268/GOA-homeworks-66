const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:justify-between">
				<p>© {new Date().getFullYear()} MyShop</p>
				<p>A learning project built with Next.js and Tailwind CSS</p>
			</div>
		</footer>
	);
};

export default Footer;
