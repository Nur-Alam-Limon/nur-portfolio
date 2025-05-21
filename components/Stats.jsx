"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3.5,
    text: "Years of Experience",
  },
  {
    num: 20,
    text: "Repositories Contributed",
  },
  {
    num: 238,
    text: "Contributions (Last Year)",
  },
  {
    num: 22,
    text: "Technologies Used",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 mt-8 md:mt-0 xl:flex xl:flex-row xl:justify-between gap-6 max-w-[90vw] xl:max-w-none mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:flex-row gap-2 xl:gap-4 text-center xl:text-left"
            >
              <CountUp
                end={item.num}
                duration={3}
                delay={1}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[120px]" : "max-w-[160px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
