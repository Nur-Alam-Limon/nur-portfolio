import BarChart from "@/components/BarChart";
import HomeHero from "@/components/HomeHero";
import Stats from "@/components/Stats";
import { getGithubStats } from "@/lib/github";
import { productionCommits, profile, projects, recommendations, yearsPlus } from "@/lib/profile";
import Reviews from "@/components/Reviews";
import Link from "next/link";

export const revalidate = 21600;

export default async function Home() {
  const github = await getGithubStats();
  const years = yearsPlus(profile.experienceStart);
  const highlights = [
    projects.find((item) => item.id === "lbd"),
    projects.find((item) => item.id === "share-cart"),
    projects.find((item) => item.id === "jobsyo"),
  ].filter(Boolean);

  const stats = [
    { value: years, label: "Years of experience", suffix: "+" },
    { value: github.repos, label: "Public repositories" },
    { value: github.contributions, label: "Public contributions, last year" },
    { value: github.followers, label: "GitHub followers" },
  ];

  return (
    <section className="h-full py-10">
      <div className="container mx-auto h-full">
        <HomeHero years={years} />
        <Stats items={stats.map((item) => (item.label.startsWith("Years") ? { ...item, suffix: "+" } : item))} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-8">
          {(github.months || []).length > 0 && (
            <BarChart
              title="Strongest public months"
              note="Public GitHub only. Private repos are in the chart beside this one."
              items={topCounts(
                github.months.map((item) => ({ name: item.month, count: item.count })),
                5
              )}
            />
          )}
          <BarChart
            title="Largest production repos"
            note="Private repos I led, including Bevy. These counts are not part of the GitHub numbers above."
            items={topCounts(productionCommits, 4)}
          />
        </div>
        <div className="pb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-white/60 mt-1">Three with a number attached. The rest are on the Projects page.</p>
            </div>
            <Link href="/projects" className="text-accent hover:underline">
              All projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <Link
                key={item.id}
                href={`/projects#${item.id}`}
                className="rounded-xl border border-white/10 bg-[#1A2A3F] p-6 hover:border-accent transition flex flex-col"
              >
                <p className="text-accent text-sm">{item.org}</p>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-white/70 mt-3 text-sm leading-relaxed flex-1">{item.summary}</p>
                <div className="flex gap-6 mt-5">
                  {item.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="min-w-0">
                      <p className="text-2xl font-bold text-white whitespace-nowrap">{metric.value}</p>
                      <p className="text-xs text-white/60 mt-1 leading-snug">{metric.short || metric.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Reviews items={recommendations} />
      </div>
    </section>
  );
}

function topCounts(items, limit) {
  return [...items].sort((a, b) => b.count - a.count).slice(0, limit);
}
