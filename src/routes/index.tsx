import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Handshake, Sparkles, Dice5, Plus, MessageCircle, Wrench, ArrowRight } from "lucide-react";

const AVATAR = "https://cdn.discordapp.com/avatars/1206191775828545546/a_372e70568d3aba1d276c48591c994240.gif?size=2048";
const INVITE = "https://discord.com/oauth2/authorize?client_id=1206191775828545546";
const SUPPORT = "https://discord.gg/PAEUG5rBHf";

export const Route = createFileRoute("/")({
  component: Home,
});

const features = [
  {
    icon: Flame,
    title: "NSFW Content",
    body: "Quick and practical, enjoy it easily. Everything in the palm of your hand.",
  },
  {
    icon: Handshake,
    title: "Roleplay",
    body: "Commands and functions for you and your server members to express yourselves.",
  },
  {
    icon: Sparkles,
    title: "Anime",
    body: "You can find everything about anime in it.",
  },
  {
    icon: Dice5,
    title: "Miscellaneous",
    body: "In addition to everything above, you can also find other interesting features!",
  },
];

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-10 sm:pt-16">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--rose)] animate-pulse" />
            Online & ready to join your server
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-gradient-blush">Amethyst</span>
            <br />
            <span className="text-foreground/90">your favorite virtual assistant</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A powerful, feature-rich Discord bot to enhance your server with NSFW, roleplay,
            anime and miscellaneous commands — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={INVITE} target="_blank" rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
              <Plus className="w-4 h-4" /> Invite me
            </a>
            <a href={SUPPORT} target="_blank" rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
              <MessageCircle className="w-4 h-4" /> Support server
            </a>
            <Link to="/commands"
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
              <Wrench className="w-4 h-4" /> Commands
            </Link>
            <Link to="/become"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
              <Sparkles className="w-4 h-4" />Go Premium
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="avatar-halo float-slow">
            <img
              src={AVATAR}
              alt="Amethyst"
              className="w-52 h-52 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white/15 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-24">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--blush)]">What we offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Features We Offer</h2>
          </div>
          <Link to="/commands" className="inline-flex items-center gap-1 text-sm text-[var(--blush)] hover:underline">
            See all commands <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--blush)] to-[var(--rose)] flex items-center justify-center text-[oklch(0.25_0.12_20)]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 mb-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--rose)]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--blush)]/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get started with <span className="text-gradient-blush">Amethyst</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Add Amethyst to your server in seconds and unlock every feature.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={INVITE} target="_blank" rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
                <Plus className="w-4 h-4" /> Invite me
              </a>
              <a href={SUPPORT} target="_blank" rel="noreferrer"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm">
                <MessageCircle className="w-4 h-4" /> Join support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
