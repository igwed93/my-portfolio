export function HeroSection() {
    return (
        <section className="hero flex flex-col md:flex-row-reverse justify-between items-center gap-20 px-4 py-10 md:px-20 md:py-20 h-[100%]">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-8xl font-bold text-white mb-3">Who am I?</h1>
                <p className="text-[16.5px] text-gray-200 leading-relaxed">
                    Hi, I’m Daniel Igwe—a cybersecurity undergraduate and full-stack developer with hands-on experience in both frontend and backend technologies. I hold certifications from Google and ISC², and have contributed to secure healthcare solutions at Remote Health. My portfolio includes impactful projects such as a Blog API, Task Manager API, E-commerce API, and a UNN website clone. With a strong foundation in Python, JavaScript, and modern frameworks, I am passionate about building secure, scalable applications that make a difference.
                </p>
                <button className="mt-6 px-6 py-3 bg-black text-[#C1F025] font-bold border border-[#C1F025] hover:bg-[#C1F025] hover:text-black shadow-[3px_3px_0_0_rgba(193,240,37,0.7)] transition duration-200">
                    Learn more
                </button>
            </div>

            <div className="md:w-1/2 md:pl-30">
                <img 
                    src="/profile.png" 
                    alt="Daniel Igwe"
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg"
                />
            </div>
        </section>
    );
}
