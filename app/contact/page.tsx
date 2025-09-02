import ContactForm from "@/components/Home.Components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
      <ContactForm />
    </main>
  );
}