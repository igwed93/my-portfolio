"use client";

import { useState } from "react";
import Link from "next/link";

export function TransitionSection() {
    return (
        <section>
            <div className=" relative mt-10 flex flex-col w-full">
                <img
                    src="/transition_photo.png"
                    alt="coding photo"
                    className="mx-auto"
                    width="80%"
                    height="100%"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl md:text-7xl font-bold">Featured Projects</h1>
                    <div className="flex justify-center cursor-pointer mt-10">
                        <span
                            className="material-symbols-outlined text-5xl text-white animate-bounce transition-transform duration-300 hover:scale-200 hover:text-yellow-500 cursor-pointer"
                            onClick={() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            south
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function MobileMenu({ links }: { links: { title: string; href: string }[] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden relative">
            <button className="text-3xl" onClick={() => setOpen(!open)}>
                <span className={`material-symbols-outlined ${open ? "text-[#C1F025]" : "text-white"}`}>
                    menu
                </span>
            </button>
            {open && (
                <div className="fixed top-0 right-0 w-[50vw] h-full bg-black z-40 flex flex-col items-center py-6 shadow-lg opacity-90">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-[#C1F025] py-2 px-4 w-full text-center border-b border-gray-800 hover:bg-yellow-200 hover:text-black transition"
                            onClick={() => setOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}