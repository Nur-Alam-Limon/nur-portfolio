import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white px-8 md:px-0">
      <div className="container mx-auto flex justify-end lg:justify-center items-center">
        {/* <Link href="/">
          <h1 className="text-3xl font-semibold">
           <span className="text-accent">Nur Alam</span>
          </h1>
        </Link> */}

        <div className="hidden lg:flex items-center justify-center gap-16">
          <Navbar />
          <Link href="/contact">
            <Button className="cursor-pointer text-lg">Hire Me</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
