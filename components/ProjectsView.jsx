"use client";

import { useEffect, useMemo, useState } from "react";
import { projectGroups, projects } from "@/lib/profile";

export default function ProjectsView() {
  const [group, setGroup] = useState("All");
  const visible = useMemo(
    () => (group === "All" ? projects : projects.filter((item) => item.group === group)),
    [group]
  );
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = visible.find((item) => item.id === activeId) || visible[0];

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id || !projects.some((item) => item.id === id)) return;
    setGroup("All");
    setActiveId(id);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Selected work</h1>
        <p className="text-white/60 max-w-[720px] mt-4 mb-8">
          The old student projects are gone. This is the production record: Bevy first, then contract, product, and research.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {projectGroups.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                setGroup(name);
                const next = name === "All" ? projects : projects.filter((item) => item.group === name);
                setActiveId(next[0]?.id);
              }}
              className={`px-4 py-2 rounded-full border text-sm ${
                group === name
                  ? "bg-accent text-primary border-accent"
                  : "border-white/15 text-white/70 hover:border-accent"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
          <ul className="flex flex-col gap-2">
            {visible.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  type="button"
                  id={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full h-[96px] flex flex-col justify-center text-left rounded-xl px-4 py-3 border overflow-hidden ${
                    active?.id === item.id
                      ? "border-accent bg-[#1A2A3F]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-white/50">{item.org}</p>
                </button>
              </li>
            ))}
          </ul>

          {active && (
            <article className="rounded-xl bg-[#1A2A3F] border border-white/10 p-6 md:p-8">
              <p className="text-accent text-sm">{active.group}</p>
              <h2 className="text-3xl font-semibold mt-1">{active.title}</h2>
              <p className="text-white/50 mt-1">
                {active.org} · {active.period}
              </p>
              <p className="text-white/80 mt-5 leading-relaxed">{active.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                {active.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-black/20 p-4">
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className="text-sm text-white/60 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              {active.budget && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Built for Shopify impact budget</span>
                    <span>
                      {active.budget.used} of {active.budget.limit} points used
                    </span>
                  </div>
                  <div className="h-3 rounded bg-white/10 overflow-hidden">
                    <div
                      className="h-3 bg-accent"
                      style={{ width: `${(active.budget.used / active.budget.limit) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-white/50 mt-2">
                    Shopify allows an app to cost 10 Lighthouse points. Share Cart uses 3.7. The bar is the budget spent, not a score that fell.
                  </p>
                </div>
              )}
              <ul className="space-y-2 text-white/80">
                {active.points.map((point) => (
                  <li key={point}>— {point}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 mt-6">
                {active.stack.map((item) => (
                  <li key={item} className="text-sm px-2 py-1 rounded bg-white/10 text-accent">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-6 mt-6">
                {active.href && (
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    {active.group === "Research" ? "Open the report" : `Open ${active.title}`}
                  </a>
                )}
                {active.post && (
                  <a
                    href={active.post}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    Read the LinkedIn post
                  </a>
                )}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
