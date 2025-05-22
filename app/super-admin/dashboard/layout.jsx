"use client";
import LogoutBtn from "@/components/LogoutBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SuperAdminLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/super-admin/dashboard", label: "Dashboard" },
    { href: "/super-admin/dashboard/projects", label: "Projects" },
    { href: "/super-admin/dashboard/education", label: "Education" },
    { href: "/super-admin/dashboard/experience", label: "Experience" },
    { href: "/super-admin/dashboard/blog", label: "Blogs" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#11b5e4]/50 text-white p-12">
        <h2 className="text-xl font-bold text-accent text-center mb-12 border-b pb-6">
          Admin Panel
        </h2>
        <nav className="space-y-8 text-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block transition hover:text-accent ${
                pathname === link.href ? "text-accent font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LogoutBtn/>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 text-white p-6">{children}</main>
    </div>
  );
}
