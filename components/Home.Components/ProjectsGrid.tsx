"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/(data)/projects";

export default function ProjectsGrid() {
  return (
    <section className="py-12 px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
      <p className="text-white text-md md:text-[16.5px] md:w-1/2 mt-5">Find out about my works: read through my case studies,
          have a look at final designs and try out web applications I’ve built.</p>
      <div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:-translate-y-1 transition"
          >
            {p.image && (
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/80">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-white/15"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              {p.href && (
                <Link className="underline" href={p.href} target="_blank">
                  Live
                </Link>
              )}
              {p.repo && (
                <Link className="underline" href={p.repo} target="_blank">
                  Code
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
