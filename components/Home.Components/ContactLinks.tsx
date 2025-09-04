import Link from "next/link";
import { FaTwitter, FaWhatsapp, FaLinkedin, FaEnvelope, FaWpforms } from "react-icons/fa";

export default function ContactLinks({ showContactForm = true }) {
  return (
    <div className="mt-4 text-sm text-gray-400 flex flex-col gap-2 items-center mx-6">
      <h2 className="text-xl">Let&apos;s get in touch!</h2>
      <div className="flex gap-4 mt-2">
        {/* Twitter */}
        <Link
          href="https://twitter.com/ewgi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-transform transform hover:scale-125 hover:text-[#1DA1F2]"
        >
          <FaTwitter className="text-[#1DA1F2] text-2xl" />
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/+2347050548689"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition-transform transform hover:scale-125 hover:text-[#25D366]"
        >
          <FaWhatsapp className="text-[#25D366] text-2xl" />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/daniel-igwe-a283aa168"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform transform hover:scale-125 hover:text-[#0077B5]"
        >
          <FaLinkedin className="text-[#0077B5] text-2xl" />
        </Link>

        {/* Email */}
        <a
          href="mailto:your@email.com?subject=Contact%20from%20Portfolio"
          aria-label="Email"
          className="transition-transform transform hover:scale-125 hover:text-[#C1F025]"
        >
          <FaEnvelope className="text-[#C1F025] text-2xl" />
        </a>
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <Link
          href="/contact"
          className="text-[#C1F025] hover:underline mt-2 inline-flex items-center gap-1"
        >
          <FaWpforms className="text-[#C1F025] text-lg" />
          Contact Form
        </Link>
      )}
    </div>
  );
}
