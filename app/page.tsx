import { HeroSection, ProjectSection } from "@/components/Home.Components/server-comps"
import { TransitionSection } from "@/components/Home.Components/client-comps"
import ProjectsGrid from "@/components/Home.Components/ProjectsGrid"
import Certifications from "@/components/Home.Components/Certifications"
import ExperienceTimeline from "@/components/Home.Components/ExperienceTimeline"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TransitionSection />
      <ProjectSection />
       <ProjectsGrid />
       <Certifications />
       <ExperienceTimeline />
    </main>
  )
}