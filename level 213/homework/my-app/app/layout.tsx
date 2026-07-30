import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Animal World",
	description: "A small Next.js App Router project about animals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col bg-gray-50">
				<Header />

				<main className="flex-1 w-full max-w-4xl mx-auto p-4">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
