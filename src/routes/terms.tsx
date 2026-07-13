import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Amethyst" },
      { name: "description", content: "Terms of Service for the Amethyst Discord bot." },
      { property: "og:title", content: "Terms of Service — Amethyst" },
      { property: "og:description", content: "Terms of Service for the Amethyst Discord bot." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14">
      <p className="text-sm uppercase tracking-widest text-[var(--blush)]">Legal</p>
      <h1 className="text-4xl sm:text-5xl font-bold mt-2">Terms of Service</h1>
      <p className="text-muted-foreground mt-3">Last updated: April 21, 2025</p>

      <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By using this Discord bot, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use the bot.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Bot Usage</h2>
          <p className="text-muted-foreground">
            The bot is provided as-is and may include features that rely on user interaction and
            data collection (username and user ID). These features are designed to improve user
            experience and functionality.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Data</h2>
          <p className="text-muted-foreground">
            The only data collected is your Discord username and user ID. This data is used solely
            for enhancing functionality and user experience, and is accessible only by the bot
            owner (<strong className="text-foreground">Felipe — Discord: @itslfrh</strong>).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Restrictions</h2>
          <p className="text-muted-foreground">
            You agree not to misuse the bot, exploit vulnerabilities, or disrupt its operation.
            Any abuse may result in denial of access.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            The bot owner is not liable for any direct, indirect, or incidental damages arising
            from the use of the bot.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Changes to the Terms</h2>
          <p className="text-muted-foreground">
            These Terms of Service may be updated at any time. Continued use of the bot after
            changes implies acceptance of the new terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">
            Questions? Reach out via our{" "}
            <a href="https://discord.gg/PAEUG5rBHf" target="_blank" rel="noreferrer"
              className="text-[var(--blush)] underline hover:text-[var(--rose)]">
              support server on Discord
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}
