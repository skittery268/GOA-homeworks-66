import Image from "next/image";
import Link from "next/link";

// SSR: this page is rendered on the server on every request.
export const dynamic = "force-dynamic";

// Route: /contact  (app/contact/page.tsx)
const Contact = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-gray-800">Contact</h1>

			<p className="mt-2 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore.
			</p>

			<Image
				src="/images/parrot.jpg"
				alt="Scarlet macaw parrot in flight"
				width={800}
				height={400}
				className="w-full h-64 object-cover rounded border border-gray-300 mt-4"
			/>

			<div className="border border-gray-300 rounded bg-white p-4 mt-6">
				<h2 className="text-lg font-bold text-gray-800">Our contacts</h2>

				<ul className="mt-2 text-gray-600 text-sm">
					<li>Email: info@animalworld.test</li>
					<li>Phone: +000 000 00 00</li>
					<li>Address: Lorem ipsum street 12</li>
				</ul>
			</div>

			<p className="mt-6">
				<Link href="/" className="text-green-700 underline">
					Back to home
				</Link>
			</p>
		</>
	);
};

export default Contact;
