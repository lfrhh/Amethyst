// src/routes/become.tsx
import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  Images,
  RefreshCw,
  Crown,
  Trash2,
  Sparkles,
  Globe,
  MessageCircle,
} from "lucide-react";

const SUPPORT = "https://discord.gg/PAEUG5rBHf";

export const Route = createFileRoute("/become")({
  head: () => ({
    meta: [
      { title: "Become Premium — Amethyst" },
      {
        name: "description",
        content:
          "Become Premium and unlock the Amethyst HUB: up to 10 images in NSFW commands, image reload, Premium User role, auto-delete, and extra /anime features.",
      },
      { property: "og:title", content: "Become Premium — Amethyst" },
      {
        property: "og:description",
        content: "Unlock the Amethyst HUB with exclusive premium features.",
      },
    ],
  }),
  component: BecomePage,
});

const perks = [
  {
    icon: Images,
    title: "Up to 10 Images",
    body: "Load up to 10 images in NSFW commands.",
  },
  {
    icon: RefreshCw,
    title: "Image Reload",
    body: "Access the image reload button in NSFW commands.",
  },
  {
    icon: Crown,
    title: "Premium User Role",
    body: "Receive the exclusive Premium User role in the support server.",
  },
  {
    icon: Trash2,
    title: "NSFW Auto-Delete",
    body: "Automatically deletes executed NSFW commands. Configurable in /preference for NSFW channels.",
  },
  {
    icon: Sparkles,
    title: "Extra /anime Features",
    body: "Unlock platforms, characters, and news in the /anime command.",
  },
];

function BecomePage() {
  return (
    <div className="max-w-5xl mx-auto px-5 pt-10 sm:pt-16 pb-16">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-muted-foreground mb-6">
          <Flame className="w-3.5 h-3.5 text-[var(--rose)]" />
          Amethyst HUB — Premium
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05]">
          <span className="text-gradient-blush">Become Premium</span>
        </h1>

        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          With Premium, you gain access to the <strong>Amethyst HUB</strong>.
          Videos, images, and GIFs at your fingertips, fast and easy!
        </p>
      </section>

      {/* Perks */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What You'll Get
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {perks.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--blush)] to-[var(--rose)] flex items-center justify-center text-[oklch(0.25_0.12_20)]">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section className="mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Pricing
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Global */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--blush)]/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-[var(--blush)]" />
                <h3 className="text-2xl font-bold">Global</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <span className="text-2xl font-semibold">USD 1.99</span>

                  <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                    30 Days
                  </span>
                </li>

                <li className="flex items-baseline justify-between">
                  <span className="text-2xl font-semibold">USD 7.90</span>

                  <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                    Lifetime
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                We accept 💳 PayPal
              </p>
            </div>
          </div>

          {/* Brazil */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--rose)]/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🇧🇷</span>
                <h3 className="text-2xl font-bold">Brazil</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <span className="text-2xl font-semibold">BRL 4.99</span>

                  <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                    30 Days
                  </span>
                </li>

                <li className="flex items-baseline justify-between">
                  <span className="text-2xl font-semibold">BRL 12.90</span>

                  <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                    Lifetime
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                Aceitamos ⬥ Pix &amp; 🧾 Boleto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--rose)]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--blush)]/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready for the <span className="text-gradient-blush">HUB</span>?
            </h2>

            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Join our support server to purchase Premium.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={SUPPORT}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Become
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}