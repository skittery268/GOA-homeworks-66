import Link from "next/link";
import AnimalCard from "@/components/AnimalCard";

// SSR: this page is rendered on the server on every request.
export const dynamic = "force-dynamic";

// Simple data array, no external API needed.
const animals = [
	{
		name: "Cat",
		image: "/images/cat.jpg",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		name: "Dog",
		image: "/images/dog.jpg",
		text: "Sed do eiusmod tempor incididunt ut labore et dolore.",
	},
	{
		name: "Lion",
		image: "/images/lion.jpg",
		text: "Ut enim ad minim veniam, quis nostrud exercitation.",
	},
	{
		name: "Elephant",
		image: "/images/elephant.jpg",
		text: "Duis aute irure dolor in reprehenderit in voluptate.",
	},
	{
		name: "Tiger",
		image: "/images/tiger.jpg",
		text: "Excepteur sint occaecat cupidatat non proident.",
	},
	{
		name: "Wolf",
		image: "/images/wolf.jpg",
		text: "Sunt in culpa qui officia deserunt mollit anim id est.",
	},
];

// Route: /gallery  (app/gallery/page.tsx)
const Gallery = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-gray-800">Animal Gallery</h1>

			<p className="mt-2 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt.
			</p>

			<div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				{animals.map((animal) => (
					<AnimalCard
						key={animal.name}
						name={animal.name}
						image={animal.image}
						text={animal.text}
					/>
				))}
			</div>

			<p className="mt-6">
				<Link href="/" className="text-green-700 underline">
					Back to home
				</Link>
			</p>
		</>
	);
};

export default Gallery;
