"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-16">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all text-lg`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
