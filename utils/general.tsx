import { Links } from "../app/(data)/static"
import Link from "next/link"

export function NavBar() {
    return (
        <header className="bg-black flex justify-between items-center px-4 py-6 md:px-8 md:py-10
         shadow-md md:pr-30 sticky top-0 z-50">
            <h1 className="text-2xl text-white font-bold">Daniel Igwe</h1>
            <nav className=" hidden md:flex gap-8 space-x-4 items-center text-[16.5px]">   
                {Links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={
                            link.title.toLowerCase() === "contact me"
                                ? "px-4 py-2 text-[#C1F025] border border-[#C1F025] font-bold hover:bg-yellow-200 shadow-[3px_3px_0_0_rgba(193,240,37,0.7)] transition duration-200"
                                : "text-[#C1F025] hover:bg-[#C1F025] hover:text-black p-2"
                        }
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
            <button className="flex md:hidden text-3xl">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    )
}

export function Footer() {
    return (
        <footer className="bg-black text-white text-center p-15 border-t-[2px] border-[#C1F025]">
            <p>Copyright © 2025 Daniel Igwe. All rights reserved.</p>
        </footer>
    )
}