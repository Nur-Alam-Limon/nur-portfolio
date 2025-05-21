import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaMediumM } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nur-Alam-Limon" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nur-alam04/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/nuralam008/" },
  { icon: <FaMediumM />, path: "https://medium.com/@nuralam201425" },
];

export default function Social() {
  return (
    <footer className="shadow-inner shadow-[#11b5e4]/20 text-white py-10 mt-16">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-accent">
          Connect with me
        </h2>

        <div className="flex gap-6">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-2xl border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:!text-white transition-all duration-300"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-2 text-center">
          © {new Date().getFullYear()} Nur Alam Chowdhury. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
