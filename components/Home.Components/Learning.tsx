import { learnings } from "@/app/(data)/learning";

export default function Learning() {
    return (
        <section className="py-12 px-12 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Learning</h2>
            <ol className="relative border-s border-white/10">
                {learnings.map((learning) => (
                    <li key={learning.title} className="ms-4 mb-8">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[#C1F025] border border-black" />
                        <h3 className="text-xl font-semibold">{learning.title}</h3>
                        <p className="text-sm text-white/70">{learning.provider}</p>
                        <a
                            href={learning.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/90 underline mt-2 inline-block"
                        >
                            View Certificate
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}
