
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
  title: "Portfolio",
  description: "Portfolio Website of Nur Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.variable}
      >
        <Header />
        {children}
        <Social/>
      </body>
    </html>
  );
}
