import { profile } from "./profile";

export async function getGithubStats() {
  const user = profile.githubUser;
  try {
    const [userRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`, {
        next: { revalidate: 60 * 60 * 6 },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "nur-portfolio",
        },
      }),
      fetch(
        `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
        { next: { revalidate: 60 * 60 * 6 } }
      ),
    ]);

    const userJson = userRes.ok ? await userRes.json() : {};
    const contribJson = contribRes.ok ? await contribRes.json() : {};

    return {
      repos: numberOrNull(userJson.public_repos),
      followers: numberOrNull(userJson.followers),
      contributions: numberOrNull(contribJson?.total?.lastYear),
      months: monthly(contribJson?.contributions),
    };
  } catch {
    return { repos: null, followers: null, contributions: null, months: [] };
  }
}

function monthly(days) {
  if (!Array.isArray(days)) return [];
  const totals = new Map();
  for (const day of days) {
    if (!day?.date) continue;
    const key = day.date.slice(0, 7);
    totals.set(key, (totals.get(key) || 0) + (day.count || 0));
  }
  return [...totals.entries()].map(([month, count]) => ({ month, count }));
}

function numberOrNull(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
