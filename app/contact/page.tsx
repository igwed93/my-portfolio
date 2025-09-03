import ContactForm from "@/components/Home.Components/ContactForm";
import ContactLinks from "@/components/Home.Components/ContactLinks";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact Me</h1>
      <ContactForm />
      <ContactLinks showContactForm={false} />
    </main>
  );
}