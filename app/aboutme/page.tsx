import AboutMe  from "@/components/Home.Components/AboutMe";
import ContactLinks from "@/components/Home.Components/ContactLinks";
import { ShowerHead } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen py-12 container mx-auto px-4">
      <AboutMe />
      <ContactLinks showContactForm={true} />
    </main>
  );
}