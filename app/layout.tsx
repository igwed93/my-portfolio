import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/utils/general";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Igwe – Cybersecurity & Full-Stack Developer",
  description:
    "Portfolio of Daniel Igwe: cybersecurity student (ISC² CC, Google Foundations of Cybersecurity) and full-stack developer building secure, scalable web apps.",
  metadataBase: new URL("https://your-domain.com"), // ← update when deployed
  openGraph: {
    title: "Daniel Igwe – Cybersecurity & Full-Stack Developer",
    description:
      "Cybersecurity + full-stack development (Node.js, Express.js, Next.js). Projects: Blog API, Task Manager API, E-commerce API, UNN site clone.",
    url: "https://your-domain.com",
    siteName: "Daniel Igwe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }], // provide image
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Igwe – Cybersecurity & Full-Stack Developer",
    description:
      "Secure systems + full-stack builds. Backend @ Remote Health (telemedicine).",
    images: ["/og-image.png"], // provide image
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="w-[100%] h-auto m-auto text-base bg-black text-white overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
