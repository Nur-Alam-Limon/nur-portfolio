"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/profile";

export default function ServicesView() {
  const [open, setOpen] = useState(services[0].num);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Work with me</h1>
        <p className="text-white/60 max-w-[720px] mt-3 mb-8">
          Pick the kind of work. Each card opens the scope, then sends you to the contact form with that service already chosen.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service) => {
            const active = open === service.num;
            return (
              <article
                key={service.num}
                onMouseEnter={() => setOpen(service.num)}
                onFocus={() => setOpen(service.num)}
                className={`rounded-xl border p-6 transition duration-200 ${
                  active
                    ? "border-accent bg-[#1A2A3F] -translate-y-1 shadow-[0_12px_40px_rgba(20,129,186,0.18)]"
                    : "border-white/10 hover:border-accent hover:bg-[#1A2A3F]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(service.num)}
                  className="w-full text-left"
                >
                  <p className="text-accent text-sm">{service.num}</p>
                  <h2 className="text-2xl font-semibold mt-1">{service.title}</h2>
                  <p className="text-white/70 mt-3">{service.description}</p>
                </button>
                {active && (
                  <div className="mt-5">
                    <p className="text-sm text-white/50 mb-2">What you get</p>
                    <ul className="space-y-1 text-white/80">
                      {service.deliver.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="mt-5 flex w-full items-center justify-center text-center bg-accent text-primary rounded-full px-5 py-3 font-semibold leading-snug sm:inline-flex sm:w-auto"
                    >
                      Ask about {service.title}
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
