import { HeroSection, ProjectSection } from "@/components/Home.Components/server-comps"
import { TransitionSection } from "@/components/Home.Components/client-comps"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TransitionSection />
      <ProjectSection />
    </main>
  )
}