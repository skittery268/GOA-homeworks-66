"use client"

import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="border-t border-t-gray-400 h-20 flex justify-center items-center gap-10">
            <button onClick={router.back} className="cursor-pointer border p-2">Back</button>
            <button onClick={() => router.push("/")} className="cursor-pointer border p-2">Home</button>
            <button onClick={router.forward} className="cursor-pointer border p-2">Foreward</button>
        </footer>
    );
};

export default Footer;