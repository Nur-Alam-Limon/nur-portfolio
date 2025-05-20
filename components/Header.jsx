import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Nur <span className="text-accent">Alam</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
