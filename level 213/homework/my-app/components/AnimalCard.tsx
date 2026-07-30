import Image from "next/image";

type AnimalCardProps = {
	name: string;
	image: string;
	text: string;
};

// Reused on the Home, Gallery and Blog pages.
const AnimalCard = ({ name, image, text }: AnimalCardProps) => {
	return (
		<article className="border border-gray-300 rounded bg-white">
			<Image
				src={image}
				alt={name}
				width={400}
				height={300}
				className="w-full h-48 object-cover rounded-t"
			/>

			<div className="p-4">
				<h2 className="text-lg font-bold text-gray-800">{name}</h2>
				<p className="mt-2 text-sm text-gray-600">{text}</p>
			</div>
		</article>
	);
};

export default AnimalCard;
