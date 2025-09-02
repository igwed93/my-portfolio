import { HeroSection } from "@/components/Home.Components/server-comps"
import { TransitionSection } from "@/components/Home.Components/client-comps"
import SectionTabs from "@/components/Home.Components/SectionTabs"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TransitionSection />
      <SectionTabs />
    </main>
  )
}