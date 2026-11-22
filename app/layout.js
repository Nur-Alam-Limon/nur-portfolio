
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Social from "@/components/Social";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Nur Alam Chowdhury · Senior Software Engineer",
  description:
    "Senior software engineer with 5+ years shipping production commerce systems, contract products, and applied AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={JetBrainsMono.variable}>
      <body className={JetBrainsMono.className}>
        <Header />
        {children}
        <Social/>
      </body>
    </html>
  );
}
