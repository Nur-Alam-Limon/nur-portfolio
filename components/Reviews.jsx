"use client";

import { useState } from "react";

const tones = ["#1481BA", "#0E6A99", "#11B5E4", "#0B5F88", "#1493C9"];
const visibleCount = 3;

export default function Reviews({ items }) {
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState({});
  const count = Math.min(visibleCount, items.length);
  const visible = Array.from({ length: count }, (_, offset) => items[(start + offset) % items.length]);

  const go = (step) => {
    setStart((current) => (current + step + items.length) % items.length);
  };

  return (
    <div className="pb-12">
      <div className="mb-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Teammates, in their words</h2>
          <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => go(-1)}
            className="h-10 w-10 rounded-full border border-white/20 text-lg hover:border-accent hover:text-accent"
            aria-label="Previous recommendations"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="h-10 w-10 rounded-full border border-white/20 text-lg hover:border-accent hover:text-accent"
            aria-label="Next recommendations"
          >
            &gt;
          </button>
          </div>
        </div>
        <p className="text-white/60 mt-2">LinkedIn recommendations, quoted as they were written.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {visible.map((item, offset) => {
          const expanded = Boolean(open[item.name]);
          return (
            <article
              key={item.name}
              className={`min-w-0 rounded-2xl border border-white/10 bg-[#122033] p-5 flex flex-col ${
                offset === 0 ? "" : "hidden md:flex"
              }`}
            >
              <span className="text-4xl leading-none text-accent/80" aria-hidden>
                “
              </span>
              <p className={`text-sm text-white/90 leading-relaxed mt-2 break-words ${expanded ? "" : "line-clamp-3"}`}>
                {item.quote}
              </p>
              <button
                type="button"
                onClick={() =>
                  setOpen((current) => ({
                    ...current,
                    [item.name]: !current[item.name],
                  }))
                }
                className="mt-3 text-accent text-sm text-left w-fit hover:underline"
              >
                {expanded ? "See less" : "See more"}
              </button>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                  style={{ backgroundColor: tones[items.indexOf(item) % tones.length] }}
                >
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold leading-tight">{item.name}</span>
                  <span className="block text-xs text-white/50 leading-snug mt-1">{item.role}</span>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function initials(name) {
  const parts = name
    .replace(/\./g, "")
    .split(" ")
    .filter((part) => /[A-Za-z]/.test(part));
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}
