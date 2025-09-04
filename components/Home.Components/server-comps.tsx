import Link from "next/link";
import ContactLinks from "./ContactLinks";

export function HeroSection() {
    return (
        <section className="hero flex flex-col lg:flex-row-reverse justify-between items-center gap-12 px-4 py-12 lg:px-20 lg:py-24">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
                    Who am I?
                </h1>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    Hi, I’m Daniel Igwe—a cybersecurity undergraduate and full-stack developer with hands-on experience in both frontend and backend technologies. I hold certifications from Google and ISC², and have contributed to secure healthcare solutions at Remote Health. My portfolio includes impactful projects such as a Blog API, Task Manager API, E-commerce API, and a UNN website clone. With a strong foundation in C, Python, JavaScript, and modern frameworks, I am passionate about building secure, scalable applications that make a difference.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                    <Link href="/aboutme">
                        <button className="px-6 py-3 bg-black text-[#C1F025] font-bold border border-[#C1F025] hover:bg-[#C1F025] hover:text-black shadow-[3px_3px_0_0_rgba(193,240,37,0.7)] transition duration-200">
                            Learn more
                        </button>
                    </Link>
                    <a
                        href="/resume.pdf"
                        download="Daniel_Igwe_Resume.pdf"
                        className="px-6 py-3 bg-[#C1F025] text-black font-bold border border-[#C1F025] rounded-lg shadow-[3px_3px_0_0_rgba(193,240,37,0.7)] hover:bg-black hover:text-[#C1F025] transition duration-200"
                    >
                        Download Resume
                    </a>
                    <ContactLinks />
                </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <img 
                    src="/profile.png" 
                    alt="Daniel Igwe"
                    className="w-64 h-64 sm:w-80 sm:h-100 lg:w-[400px] lg:h-[500px] rounded-full shadow-lg object-cover"
                />
            </div>
        </section>
    );
}

