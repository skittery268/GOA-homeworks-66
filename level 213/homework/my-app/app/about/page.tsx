import Image from "next/image";
import Link from "next/link";

// SSR: this page is rendered on the server on every request.
export const dynamic = "force-dynamic";

// Route: /about  (app/about/page.tsx)
const About = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-gray-800">About Animal World</h1>

			<p className="mt-2 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>

			<Image
				src="/images/panda.jpg"
				alt="Giant panda near a tree"
				width={800}
				height={400}
				className="w-full h-64 object-cover rounded border border-gray-300 mt-4"
			/>

			<h2 className="text-xl font-bold text-gray-800 mt-6">Our goal</h2>

			<p className="mt-2 text-gray-600">
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat.
			</p>

			<ul className="list-disc list-inside mt-4 text-gray-600">
				<li>Lorem ipsum dolor sit amet</li>
				<li>Consectetur adipiscing elit</li>
				<li>Sed do eiusmod tempor</li>
			</ul>

			<p className="mt-6">
				<Link href="/blog" className="text-green-700 underline">
					Read our blog
				</Link>
			</p>
		</>
	);
};

export default About;
