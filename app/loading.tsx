export default function Loading() {
  return (
    <div
      className="min-h-svh bg-paper text-ink"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-block size-2.5 rounded-full bg-ink"
              aria-hidden="true"
            />
            <span className="text-lg font-bold tracking-tight">Vakxo</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
            LOADING…
          </span>
        </div>
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-69px)] max-w-6xl flex-col justify-center px-5 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div className="space-y-5">
            <div className="h-3 w-36 animate-pulse rounded-full bg-surface-tonal" />
            <div className="space-y-3">
              <div className="h-14 w-64 animate-pulse rounded-2xl bg-surface-tonal sm:h-20 sm:w-80" />
              <div className="h-14 w-72 animate-pulse rounded-2xl bg-surface-tonal sm:h-20 sm:w-96" />
            </div>
            <div className="h-5 w-full max-w-md animate-pulse rounded-full bg-surface-tonal" />
            <div className="h-12 w-full max-w-md animate-pulse rounded-full bg-surface-tonal-high" />
          </div>

          <div className="h-56 w-full animate-pulse rounded-[28px] bg-surface-tonal sm:h-64" />
        </div>
      </div>
    </div>
  );
}
