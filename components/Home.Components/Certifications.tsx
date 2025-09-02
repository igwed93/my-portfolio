import { certs } from "@/app/(data)/certifications";

export default function Certifications() {
  return (
    <section className="py-12 px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Certifications</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition"
          >
            <p className="text-lg font-semibold">{c.name}</p>
            <p className="text-sm text-white/70">Issuer: {c.issuer}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
