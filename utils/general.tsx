import { Links } from "../app/(data)/links";
import Link from "next/link";
import { MobileMenu } from "@/components/Home.Components/client-comps";

export function NavBar() {
    return (
        <header className="bg-black flex justify-between items-center px-4 py-6 lg:px-8 lg:py-10 shadow-md lg:pr-30 sticky top-0 z-50">
            <h1 className="text-2xl text-white font-bold">Daniel Igwe</h1>

            {/* Desktop Nav - now starts at lg */}
            <nav className="hidden lg:flex gap-8 space-x-4 items-center text-base">
                {Links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={
                            link.title.toLowerCase() === "contact me"
                                ? "px-4 py-2 text-[#C1F025] border border-[#C1F025] font-bold hover:bg-[#C1F025] hover:text-black shadow-[3px_3px_0_0_rgba(193,240,37,0.7)] transition duration-200"
                                : "text-[#C1F025] hover:bg-[#C1F025] hover:text-black p-2"
                        }
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu - visible until lg */}
            <MobileMenu links={Links} />
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-black text-white text-center p-15 border-t-[2px] border-[#C1F025]">
            <p>Copyright © 2025 Daniel Igwe. All rights reserved.</p>
        </footer>
    );
}