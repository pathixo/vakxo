"use client";

import { useState, type FormEvent } from "react";

type Status = { text: string; error?: boolean } | null;

export default function EmailForm({ source }: { source: "hero" | "waitlist" }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const dark = source === "waitlist";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          text: data.error || "Something went wrong. Try again in a moment.",
          error: true,
        });
      } else {
        setStatus({
          text: data.duplicate
            ? data.message || "You're already on the waitlist."
            : "You're on the list. We'll email you when the beta opens.",
        });
        setEmail("");
      }
    } catch {
      setStatus({
        text: "Couldn't reach the server. Check your connection and try again.",
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle = dark
    ? "border-white/15 bg-[#1a1d19] text-paper placeholder:text-white/40 focus-visible:border-volt focus-visible:outline-volt"
    : "border-ink/15 bg-surface text-ink placeholder:text-ink/40 focus-visible:border-ink focus-visible:outline-ink";

  const buttonStyle = dark
    ? "bg-volt text-ink hover:bg-volt-soft focus-visible:outline-volt"
    : "bg-ink text-paper hover:bg-ink-soft focus-visible:outline-ink";

  const messageStyle = status?.error
    ? dark
      ? "text-red-300"
      : "text-red-700"
    : dark
    ? "text-white/75"
    : "text-ink/75";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-stretch gap-1">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status) setStatus(null);
          }}
          disabled={submitting}
          className={`h-12 min-w-0 flex-1 rounded-l-full rounded-r-xl border pl-4 pr-3 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 sm:h-13 sm:pl-5 sm:pr-4 sm:text-base ${inputStyle}`}
        />
        <button
          type="submit"
          disabled={submitting}
          className={`h-12 shrink-0 cursor-pointer rounded-l-xl rounded-r-full px-4 text-xs font-semibold tracking-tight transition-[background-color,border-radius,transform] duration-200 active:scale-[0.98] active:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:h-13 sm:px-6 sm:text-sm ${buttonStyle}`}
        >
          {submitting ? "Joining…" : "Request invite"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-2.5 min-h-5 font-mono text-xs ${messageStyle}`}
      >
        {status?.text}
      </p>
    </form>
  );
}
