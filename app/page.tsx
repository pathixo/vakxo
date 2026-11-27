import EmailForm from "@/components/EmailForm";
import Countdown from "@/components/Countdown";
import FaqList from "@/components/FaqList";

const capabilities = [
  {
    index: "01 / VOICE",
    title: "Speak, don't prompt",
    body: "Describe what you want in plain English. No slash commands, no prompt templates, no syntax to memorize.",
    surface: "bg-surface border border-line text-ink",
    span: "md:col-span-7",
  },
  {
    index: "02 / DESKTOP",
    title: "Beyond the editor",
    body: "Edits files, runs your terminal, inspects the browser, and manages local apps across your workspace.",
    surface: "bg-surface-tonal text-ink",
    span: "md:col-span-5",
  },
  {
    index: "03 / AUTONOMY",
    title: "Acts, then verifies",
    body: "Runs your test suite, reads stack traces, patches failures, and commits only when checks pass.",
    surface: "bg-volt-soft text-ink",
    span: "md:col-span-5",
  },
  {
    index: "04 / CONTEXT",
    title: "Holds the full state",
    body: "Tracks your codebase, running processes, and git history so every follow-up builds seamlessly on the last.",
    surface: "bg-surface border border-line text-ink",
    span: "md:col-span-7",
  },
];

const workflowSteps = [
  {
    num: "01",
    label: "INTENT",
    title: "Say what you want",
    body: "Speak naturally—fix a bug, refactor a module, or wire up an endpoint. Vakxo turns speech into an execution plan.",
  },
  {
    num: "02",
    label: "EXECUTION",
    title: "Vakxo takes over",
    body: "It edits files across the repo, runs terminal commands, checks the browser, and iterates on failing tests.",
  },
  {
    num: "03",
    label: "DELIVERY",
    title: "Review and ship",
    body: "Read the concise diff summary, say “ship it,” and Vakxo commits and opens the pull request.",
  },
];

const surfaces = [
  {
    code: "01",
    name: "Terminal & Shell",
    detail: "Runs builds, migrations, package scripts, and dev servers.",
  },
  {
    code: "02",
    name: "Multi-File Codebase",
    detail: "Traces symbols and applies atomic edits across modules.",
  },
  {
    code: "03",
    name: "Browser & DevTools",
    detail: "Verifies rendered UI, console logs, and network state.",
  },
  {
    code: "04",
    name: "Test & Lint Loops",
    detail: "Executes unit and integration suites until green.",
  },
  {
    code: "05",
    name: "Git & Pull Requests",
    detail: "Creates branches, writes clean commits, and opens PRs.",
  },
  {
    code: "06",
    name: "Voice Activity Engine",
    detail: "Low-latency speech capture tuned for code and symbol names.",
  },
];

const plans = [
  {
    eyebrow: "LOCAL · MONTHLY",
    name: "Local Monthly",
    price: "₹499",
    period: "/ month",
    description:
      "Run Vakxo with your own local models via Ollama, llama.cpp, and custom configs.",
    features: [
      "Ollama & llama.cpp support",
      "Custom local model configuration",
      "Full editor, terminal & browser",
    ],
    cta: "Available at launch",
    surface: "bg-surface border border-line",
  },
  {
    eyebrow: "LOCAL · 3 MONTHS",
    name: "Local Quarterly",
    price: "₹1,299",
    period: "/ 3 months · ₹433/mo",
    description:
      "Same local-model capabilities at a lower effective monthly rate.",
    features: [
      "Everything in Local Monthly",
      "Ollama & llama.cpp support",
      "3-month discounted billing",
    ],
    cta: "Available at launch",
    surface: "bg-surface-tonal",
  },
  {
    eyebrow: "CLOUD + LOCAL · SOON",
    name: "Vakxo Cloud",
    price: "Coming soon",
    period: "No free tier in beta",
    description:
      "Local model usage plus managed Vakxo cloud providers—lighter and faster.",
    features: [
      "Everything in Local plans",
      "Managed cloud model providers",
      "Lighter & faster execution",
    ],
    cta: "Coming soon",
    surface: "bg-surface border border-line",
  },
];

const useCases = [
  {
    category: "BUG TRIAGE",
    command: "“Check why the webhook test is flaking and patch the race condition.”",
    outcome: "Reads test logs, isolates async timing bug, fixes handler, re-runs suite 5x.",
  },
  {
    category: "SCAFFOLDING",
    command: "“Create an API route for team invites with Zod validation and unit tests.”",
    outcome: "Generates route handler, schema validation, and Vitest specs matching repo conventions.",
  },
  {
    category: "MIGRATIONS",
    command: "“Add a status column to orders, run the local migration, and update types.”",
    outcome: "Writes SQL migration, applies it in terminal, regenerates TypeScript types.",
  },
  {
    category: "UI & BROWSER",
    command: "“Open localhost:3000, check the mobile nav overflow, and fix the padding.”",
    outcome: "Inspects rendered viewport in browser, edits layout classes, verifies zero overflow.",
  },
];

const guarantees = [
  {
    code: "01",
    title: "Runs on your machine",
    detail:
      "Connect local models through Ollama or llama.cpp so your codebase, prompts, and context stay entirely on your hardware.",
  },
  {
    code: "02",
    title: "Explicit ship gates",
    detail:
      "Vakxo stages changes and summarizes the diff first—nothing is committed, pushed, or opened as a PR without your go-ahead.",
  },
  {
    code: "03",
    title: "Transparent execution log",
    detail:
      "Every file read, terminal command, and test run is recorded clearly so you can inspect exactly what happened.",
  },
];

const faqs = [
  {
    q: "How is Vakxo different from editor-only AI copilots?",
    a: "Most copilots stop at autocomplete or a chat sidebar inside your IDE. Vakxo is voice-native and operates across your entire development loop—editor, terminal, local browser, and git—completing and verifying tasks end-to-end.",
  },
  {
    q: "Do I have to memorize special voice commands or syntax?",
    a: "No. You speak in plain English, just like pairing with another engineer. Vakxo resolves file paths, symbol names, and tooling steps from your live workspace context.",
  },
  {
    q: "What languages, frameworks, and tools does Vakxo work with?",
    a: "Because Vakxo works directly through your filesystem, shell, and browser, it supports modern web, backend, and CLI stacks including TypeScript, Next.js, Python, Go, Rust, Docker, and standard git workflows.",
  },
  {
    q: "When does the private beta open?",
    a: "The private beta opens December 4, 2026. We are onboarding developers in small waves—join the waitlist to receive your invite link by email.",
  },
  {
    q: "Who builds Vakxo?",
    a: "Vakxo is built by Pathixo Inc. Learn more about the team and company at pathixo.com.",
  },
];

const companyLinks = [
  { name: "support@vakxo.com", href: "mailto:support@vakxo.com", external: false },
  { name: "About", href: "https://pathixo.com/about", external: true },
  { name: "Careers", href: "https://pathixo.com/careers", external: true },
  { name: "Contact", href: "https://pathixo.com#contact", external: true },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Pathixo Inc.",
      url: "https://pathixo.com",
      email: "support@vakxo.com",
      brand: {
        "@type": "Brand",
        name: "Vakxo",
        url: "https://vakxo.com",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Vakxo",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS, Windows, Linux",
      description:
        "Voice-native autonomous developer agent that writes code, runs terminal commands, works across your desktop and browser, and opens pull requests.",
      url: "https://vakxo.com",
      publisher: {
        "@type": "Organization",
        name: "Pathixo Inc.",
      },
      offers: {
        "@type": "Offer",
        price: "499",
        priceCurrency: "INR",
        availability: "https://schema.org/PreOrder",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-ink"
          >
            <span
              className="inline-block size-2.5 rounded-full bg-ink"
              aria-hidden="true"
            />
            Vakxo
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60 md:flex"
          >
            <a href="#capabilities" className="transition-colors hover:text-ink">
              Capabilities
            </a>
            <a href="#workflow" className="transition-colors hover:text-ink">
              Workflow
            </a>
            <a href="#pricing" className="transition-colors hover:text-ink">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-ink">
              FAQ
            </a>
          </nav>

          <a
            href="#waitlist"
            className="rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-volt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Join beta
          </a>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(100svh-69px)] max-w-6xl flex-col justify-center px-5 py-10 sm:px-6 sm:py-12 lg:py-16">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                PRIVATE BETA · DEC 4
              </p>

              <h1 className="mt-4 text-[clamp(3.25rem,14vw,6.25rem)] font-bold leading-[0.9] tracking-[-0.045em] text-ink">
                Say it.
                <br />
                It ships.
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75 sm:mt-6 sm:text-lg">
                Your machine, on voice command. Describe what you want out
                loud—Vakxo writes multi-file code, runs your terminal, works
                across your desktop, and opens the PR.
              </p>

              <div className="mt-7 max-w-md sm:mt-8">
                <EmailForm source="hero" />
              </div>
            </div>

            <div className="rounded-[24px] bg-surface-tonal p-6 sm:rounded-[28px] sm:p-9">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                EXAMPLE
              </p>
              <p className="mt-4 text-xl font-medium leading-[1.24] tracking-tight text-ink sm:mt-5 sm:text-[26px]">
                &ldquo;Fix the expired-token check in auth middleware and open a
                PR.&rdquo;
              </p>
              <p className="mt-6 border-t border-ink/10 pt-4 font-mono text-xs text-ink/60 sm:mt-7">
                middleware/auth.ts · 42 tests passed · PR #47
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto / Jarvis-Moment Editorial Band */}
        <section
          aria-label="Core philosophy"
          className="border-t border-line bg-ink py-14 text-paper sm:py-16 lg:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:gap-8 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-14">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-volt">
                BUILT FOR FLOW STATE
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-[0.96] tracking-[-0.04em] sm:mt-4 sm:text-5xl lg:text-6xl">
                Stop typing to your tools.
                <br />
                Talk to your machine.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              You think at the speed of speech, not keystrokes. Give the order
              in plain English—Vakxo handles the files, the shell, the browser,
              and the PR while you stay two steps ahead.
            </p>
          </div>
        </section>

        {/* Capabilities — Balanced Material 3 Expressive Bento */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="border-t border-line py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  CAPABILITIES
                </p>
                <h2
                  id="capabilities-heading"
                  className="mt-3 max-w-xl text-3xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
                >
                  Finishes the job instead of suggesting one.
                </h2>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                EDIT · EXECUTE · VERIFY · COMMIT
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-12">
              {capabilities.map((item) => (
                <article
                  key={item.index}
                  className={`flex flex-col justify-between rounded-[24px] p-6 sm:rounded-[28px] sm:p-10 ${item.surface} ${item.span}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
                    {item.index}
                  </p>
                  <div className="mt-8 sm:mt-12">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-3 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow — Minimalist Hairline Sequence */}
        <section
          id="workflow"
          aria-labelledby="workflow-heading"
          className="border-t border-line bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              WORKFLOW
            </p>
            <h2
              id="workflow-heading"
              className="mt-3 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
            >
              From request to pull request.
            </h2>

            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {workflowSteps.map((step) => (
                <li key={step.num} className="border-t-2 border-ink pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-5xl font-bold leading-none tracking-[-0.04em] text-ink">
                      {step.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Execution Surfaces — Clean Hairline Index */}
        <section
          id="surfaces"
          aria-labelledby="surfaces-heading"
          className="border-t border-line py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                EXECUTION SURFACES
              </p>
              <h2
                id="surfaces-heading"
                className="mt-3 text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
              >
                One agent. Every tool.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/70">
                Vakxo connects spoken intent directly to the environment where
                your software is built and tested.
              </p>
            </div>

            <div className="border-t border-line">
              {surfaces.map((surface) => (
                <div
                  key={surface.code}
                  className="grid gap-1.5 border-b border-line py-4 sm:grid-cols-[44px_180px_1fr] sm:items-baseline sm:gap-4"
                >
                  <span className="font-mono text-xs text-ink/45">
                    {surface.code}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {surface.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {surface.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases — Spoken Commands in Practice */}
        <section
          id="use-cases"
          aria-labelledby="use-cases-heading"
          className="border-t border-line bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              IN PRACTICE
            </p>
            <h2
              id="use-cases-heading"
              className="mt-3 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
            >
              What you can say.
            </h2>

            <div className="mt-12 border-t border-line">
              {useCases.map((item) => (
                <div
                  key={item.category}
                  className="grid gap-3 border-b border-line py-6 lg:grid-cols-[140px_1.2fr_1fr] lg:items-baseline lg:gap-8"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                    {item.category}
                  </span>
                  <p className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                    {item.command}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Control */}
        <section
          id="security"
          aria-labelledby="security-heading"
          className="border-t border-line py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              CONTROL &amp; PRIVACY
            </p>
            <h2
              id="security-heading"
              className="mt-3 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
            >
              Built for real codebases.
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {guarantees.map((g) => (
                <div key={g.code} className="border-t border-ink/20 pt-5">
                  <span className="font-mono text-xs text-ink/45">
                    {g.code}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70 sm:text-base">
                    {g.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans — Locked Preview */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="border-t border-line py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              PRICING
            </p>
            <h2
              id="pricing-heading"
              className="mt-3 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
            >
              Local control or managed cloud.
            </h2>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex flex-col justify-between rounded-[28px] p-7 text-ink sm:p-8 ${plan.surface}`}
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                      {plan.eyebrow}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-[-0.04em]">
                        {plan.price}
                      </span>
                      <span className="font-mono text-xs text-ink/50">
                        {plan.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink/70">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-2 text-sm text-ink/75">
                      {plan.features.map((feat) => (
                        <li key={feat}>— {feat}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="mt-8 flex h-11 w-full cursor-not-allowed items-center justify-center rounded-full border border-ink/15 bg-paper font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45"
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="border-t border-line bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="mt-3 text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-5xl"
              >
                Questions.
              </h2>
            </div>

            <FaqList items={faqs} />
          </div>
        </section>

        {/* Waitlist & Countdown */}
        <section id="waitlist" className="px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
          <div className="mx-auto max-w-6xl rounded-[24px] bg-ink px-5 py-10 text-paper sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-volt">
                  EARLY ACCESS · WAVE 01
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-6xl">
                  Beta opens
                  <br />
                  December 4.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
                  We&apos;re inviting a focused cohort of developers first.
                  Join the waitlist and we&apos;ll email you when your invite is
                  ready.
                </p>
              </div>

              <div className="space-y-8">
                <Countdown />
                <div className="max-w-md">
                  <EmailForm source="waitlist" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">
          © 2026 Pathixo Inc. Vakxo is built by Pathixo.
        </p>
        <ul className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.1em]">
          {companyLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="transition-colors hover:text-ink"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
