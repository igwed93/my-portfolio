import { experience } from "@/app/(data)/experience";

export default function ExperienceTimeline() {
  return (
    <section className="py-12 px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
      <ol className="relative border-s border-white/10">
        {experience.map((e) => (
          <li key={e.company} className="ms-4 mb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[#C1F025] border border-black" />
            <h3 className="text-xl font-semibold">{e.role} — {e.company}</h3>
            <p className="text-sm text-white/70">{e.period}</p>
            <ul className="mt-2 list-disc ps-5 space-y-1 text-white/90">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
