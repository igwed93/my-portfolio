import { ProjectCardProps } from "@/types/types";
import { FeaturedProjects } from "@/utils/static";

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


export function ProjectSection() {
    return (
        <section id="projects" className="px-4 md:px-30 bg-black py-3 pt-10">
            <div className="flex flex-col w-full">
                <h2 className="text-white text-2xl md:text-4xl font-bold">My Projects</h2>
                <p className="text-white text-md md:text-[16.5px] md:w-1/2 mt-5">Find out about my works: read through my case studies,
                 have a look at final designs and try out web applications I’ve built.</p>
            </div>
            <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
                {FeaturedProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}


function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
        <div className="bg-black shadow-lg p-6 flex flex-col items-center text-center border border-[#C1F025] rounded-3xl">
            <h1 className="text-2xl text-white font-bold mb-2">{title}</h1>
            <div className="w-full h-[400px] rounded-md mb-4 overflow-hidden flex items-center justify-center">
                <img 
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white mb-4">{description}</p>
            <a href={link} className="mt-6 px-6 py-3 bg-[#C1F025] text-black font-bold rounded shadow-lg hover:border-[#C1F025] hover:border-1 hover:bg-black hover:text-[#C1F025] shadow-[3px_3px_0_0_rgba(234,179,8,0.7)] transition duration-300">Learn more</a>
        </div>
    );
}