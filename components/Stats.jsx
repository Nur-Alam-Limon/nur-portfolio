"use client";

import CountUp from "react-countup";

export default function Stats({ items }) {
  return (
    <section className="pt-4 pb-8">
      <div className="container mx-auto px-4">
        <p className="text-center xl:text-left text-white/50 text-sm mb-6">
          These four numbers are the public GitHub profile. They refresh on their own.
        </p>
        <div className="grid grid-cols-2 xl:flex xl:flex-row xl:justify-between gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center xl:flex-row gap-2 xl:gap-4 text-center xl:text-left"
            >
              {item.value == null ? (
                <span className="text-4xl xl:text-6xl font-extrabold text-white/40">—</span>
              ) : (
                <CountUp
                  end={item.value}
                  duration={1.6}
                  suffix={item.suffix || ""}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              )}
              <p className="max-w-[150px] leading-snug text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
