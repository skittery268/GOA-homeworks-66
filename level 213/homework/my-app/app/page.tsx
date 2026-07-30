import Image from "next/image";
import Link from "next/link";
import AnimalCard from "@/components/AnimalCard";

export const dynamic = "force-dynamic";

const Home = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-gray-800">Animal World</h1>

			<p className="mt-2 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>

			<Image
				src="/images/elephant.jpg"
				alt="African elephant with a baby elephant"
				width={800}
				height={400}
				className="w-full h-64 object-cover rounded border border-gray-300 mt-4"
			/>

			<h2 className="text-xl font-bold text-gray-800 mt-6">Popular animals</h2>

			<div className="grid gap-4 mt-4 sm:grid-cols-3">
				<AnimalCard
					name="Cat"
					image="/images/cat.jpg"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>
				<AnimalCard
					name="Dog"
					image="/images/dog.jpg"
					text="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
				/>
				<AnimalCard
					name="Lion"
					image="/images/lion.jpg"
					text="Duis aute irure dolor in reprehenderit in voluptate velit."
				/>
			</div>

			<p className="mt-6">
				<Link
					href="/gallery"
					className="inline-block bg-green-700 text-white px-4 py-2 rounded"
				>
					Go to gallery
				</Link>
			</p>
		</>
	);
};

export default Home;
