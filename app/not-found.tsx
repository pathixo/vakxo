import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-ink"
          >
            <span
              className="inline-block size-2.5 rounded-full bg-ink"
              aria-hidden="true"
            />
            Vakxo
          </Link>

          <Link
            href="/#waitlist"
            className="rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-volt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Join beta
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100svh-69px)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-6">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            ERROR 404 · PAGE NOT FOUND
          </p>

          <h1 className="mt-4 text-[clamp(4.5rem,18vw,9rem)] font-bold leading-[0.88] tracking-[-0.05em] text-ink">
            404.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
            That route doesn&apos;t exist or isn&apos;t public yet. Head back
            to the main page or join the private beta waitlist.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-1.5">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-l-full rounded-r-xl bg-ink px-6 text-sm font-semibold tracking-tight text-paper transition-colors hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Back to home
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-l-xl rounded-r-full border border-ink/15 bg-surface-tonal px-6 text-sm font-semibold tracking-tight text-ink transition-colors hover:bg-volt-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Join waitlist
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-ink/55">
            Need help?{" "}
            <a
              href="mailto:support@vakxo.com"
              className="underline underline-offset-4 transition-colors hover:text-ink"
            >
              support@vakxo.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
