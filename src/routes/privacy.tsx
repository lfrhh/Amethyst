import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Amethyst" },
      { name: "description", content: "Privacy Policy for the Amethyst Discord bot." },
      { property: "og:title", content: "Privacy Policy — Amethyst" },
      { property: "og:description", content: "Privacy Policy for the Amethyst Discord bot." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14">
      <p className="text-sm uppercase tracking-widest text-[var(--blush)]">Legal</p>
      <h1 className="text-4xl sm:text-5xl font-bold mt-2">Privacy Policy</h1>
      <p className="text-muted-foreground mt-3">Last updated: April 21, 2025</p>

      <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-muted-foreground">
            This Privacy Policy explains how we collect, use, and protect the personal information
            of users interacting with our Discord bot.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
          <ul className="text-muted-foreground space-y-1 list-disc list-inside">
            <li><strong className="text-foreground">User Name:</strong> The name displayed on Discord.</li>
            <li><strong className="text-foreground">User ID:</strong> The unique identifier assigned by Discord.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Use of Data</h2>
          <p className="text-muted-foreground">
            The data we collect is used exclusively to enhance the user experience and ensure the
            proper functioning of the bot's features. This may include personalizing responses,
            tracking interactions, and maintaining functionality.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
          <p className="text-muted-foreground">
            We take the protection of your data seriously. All collected data is stored securely
            and is not shared with third parties except when required for operational purposes
            or by law.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Access and Control</h2>
          <p className="text-muted-foreground">
            You have the right to access, modify, or delete your data stored by the bot. Contact
            us directly via our{" "}
            <a href="https://discord.gg/PAEUG5rBHf" target="_blank" rel="noreferrer"
              className="text-[var(--blush)] underline hover:text-[var(--rose)]">
              support server
            </a>.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update this policy from time to time. Changes will be reflected here with an
            updated date.
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
