import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-200 text-gray-700 mt-8">
			<div className="max-w-4xl mx-auto p-4 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<p>© 2026 Animal World — a Next.js learning project.</p>

				<Link href="/contact" className="underline">
					Contact us
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
