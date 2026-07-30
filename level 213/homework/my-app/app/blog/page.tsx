import Link from "next/link";
import AnimalCard from "@/components/AnimalCard";

// SSR: this page is rendered on the server on every request.
export const dynamic = "force-dynamic";

const posts = [
	{
		name: "Cats at home",
		image: "/images/cat.jpg",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		name: "Dogs and people",
		image: "/images/dog.jpg",
		text: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
	},
	{
		name: "Wild animals",
		image: "/images/tiger.jpg",
		text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
	},
];

// Route: /blog  (app/blog/page.tsx)
const Blog = () => {
	return (
		<>
			<h1 className="text-2xl font-bold text-gray-800">Animal Blog</h1>

			<p className="mt-2 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>

			<div className="grid gap-4 mt-4 sm:grid-cols-3">
				{posts.map((post) => (
					<AnimalCard
						key={post.name}
						name={post.name}
						image={post.image}
						text={post.text}
					/>
				))}
			</div>

			<p className="mt-6">
				<Link href="/about" className="text-green-700 underline">
					About us
				</Link>
			</p>
		</>
	);
};

export default Blog;
