export default function BarChart({ title, note, items }) {
  const max = Math.max(...items.map((item) => item.count), 1);

  return (
    <section className="rounded-xl border border-white/10 bg-[#1A2A3F] p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {note && <p className="text-sm text-white/50 mt-2 mb-5">{note}</p>}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name || item.month}>
            <div className="flex justify-between text-sm mb-1">
              <span>{labelFor(item)}</span>
              <span className="text-white/70">{item.count}</span>
            </div>
            <div className="h-2 rounded bg-white/10">
              <div
                className="h-2 rounded bg-accent"
                style={{ width: `${Math.max(4, (item.count / max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function labelFor(item) {
  const value = item.name || item.month;
  return /^\d{4}-\d{2}$/.test(value) ? formatMonth(value) : value;
}

function formatMonth(value) {
  if (!value) return "";
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
