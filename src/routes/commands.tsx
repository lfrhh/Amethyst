import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Dice5,
  Fan,
  Wrench,
  Handshake,
  Settings,
  Flame,
  Ghost,
  Terminal,
  MousePointerClick,
} from "lucide-react";

export const Route = createFileRoute("/commands")({
  head: () => ({
    meta: [
      { title: "Commands — Amethyst" },
      { name: "description", content: "Full list of Amethyst Discord bot commands across every category." },
      { property: "og:title", content: "Commands — Amethyst" },
      { property: "og:description", content: "Full list of Amethyst Discord bot commands across every category." },
    ],
  }),
  component: Commands,
});

type Cmd = { command: string; desc: string; usage: string };
type CategoryData = [string, ...Cmd[]];
type CommandsData = Record<string, CategoryData>;

const CATEGORY_ORDER = ["misce", "ani", "utils", "rp", "nsfw", "nsfwRL", "hentai"] as const;
type CategoryId = (typeof CATEGORY_ORDER)[number];

const CATEGORY_META: Record<CategoryId, { icon: React.ComponentType<{ className?: string }> }> = {
  misce: { icon: Dice5 },
  ani: { icon: Fan },
  utils: { icon: Wrench },
  rp: { icon: Handshake },
  nsfw: { icon: Settings },
  nsfwRL: { icon: Flame },
  hentai: { icon: Ghost },
};

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
] as const;
type LangCode = (typeof LANGUAGES)[number]["code"];

function detectLang(): LangCode {
  if (typeof navigator === "undefined") return "en";
  const l = (navigator.language || "en").toLowerCase();
  if (l.startsWith("pt")) return "pt";
  if (l.startsWith("it")) return "it";
  return "en";
}

function Commands() {
  const [lang, setLang] = useState<LangCode>("en");
  const [data, setData] = useState<CommandsData | null>(null);
  const [active, setActive] = useState<CategoryId>("misce");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setLang(detectLang()); }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/commands/${lang}.json`)
      .then((r) => { if (!r.ok) throw new Error("miss"); return r.json(); })
      .then((json: CommandsData) => { if (!cancelled) setData(json); })
      .catch(() => { if (!cancelled) setError("Commands not available in this language."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [lang]);

  const current = useMemo(() => {
    if (!data) return null;
    const raw = data[active];
    if (!raw) return null;
    const [name, ...cmds] = raw;
    return { name: name.replace("(+18)", "⑱"), cmds: cmds as Cmd[] };
  }, [data, active]);

  return (
    <div className="max-w-5xl mx-auto px-5 py-14">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-[var(--blush)]">Reference</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Commands</h1>
          <p className="text-muted-foreground mt-3">
            Browse every command by category. Switch language on the right.
          </p>
        </div>

        <div className="flex items-center gap-1 glass-card rounded-full p-1">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={
                "px-3 py-1.5 rounded-full text-xs font-medium transition " +
                (lang === l.code
                  ? "bg-gradient-to-r from-[var(--blush)] to-[var(--rose)] text-[oklch(0.25_0.12_20)]"
                  : "text-muted-foreground hover:text-foreground")
              }
              aria-pressed={lang === l.code}
            >
              <span className="mr-1">{l.flag}</span>{l.label}
            </button>
          ))}
        </div>
      </header>

      {/* Category tabs */}
      <div className="glass-card rounded-2xl p-2 mb-8 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {CATEGORY_ORDER.map((id) => {
            const Icon = CATEGORY_META[id].icon;
            const label = data?.[id]?.[0]?.replace("(+18)", "⑱") ?? id;
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition whitespace-nowrap " +
                  (isActive
                    ? "bg-gradient-to-r from-[var(--blush)] to-[var(--rose)] text-[oklch(0.25_0.12_20)] shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5")
                }
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {loading && (
        <div className="text-center text-muted-foreground py-16">Loading commands…</div>
      )}

      {!loading && error && (
        <div className="glass-card rounded-2xl p-10 text-center text-muted-foreground">{error}</div>
      )}

      {!loading && !error && current && (
        <section>
          <h2 className="text-2xl font-bold mb-5 text-gradient-blush">{current.name}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {current.cmds.map((cmd, i) => (
              <div key={`${cmd.command}-${i}`} className="glass-card rounded-xl p-5 hover:-translate-y-0.5 transition">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-[var(--blush)] shrink-0" />
                  <code
                    className="text-base font-mono text-gradient-blush font-semibold break-all"
                    dangerouslySetInnerHTML={{ __html: cmd.command }}
                  />
                </div>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: cmd.desc }}
                />
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-black/25 border border-white/10 px-3 py-2 font-mono text-xs text-white/75">
                  <MousePointerClick className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span
                    className="break-all"
                    dangerouslySetInnerHTML={{ __html: cmd.usage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
