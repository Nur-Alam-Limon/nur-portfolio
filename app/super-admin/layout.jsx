"use client"
import LogoutBtn from "@/components/LogoutBtn";

export default function SuperAdminLayout({ children }) {
  return (
    <section>
        <LogoutBtn/>
      {children}
    </section>
  );
}
