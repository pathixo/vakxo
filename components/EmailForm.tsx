"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function EmailForm({ source }: { source: "hero" | "waitlist" }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ text: string; isError?: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setToast({
          text: data.error || "Something went wrong. Please try again.",
          isError: true,
        });
      } else {
        const msg = data.duplicate
          ? data.message || "✓ You're already on the waitlist!"
          : source === "hero"
          ? "✓ You're on the list. Invite incoming."
          : "✓ Spot reserved. JARVIS awaits you.";

        setToast({ text: msg });
        setEmail("");
      }
    } catch {
      setToast({
        text: "Network error. Please try again.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const isHero = source === "hero";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex border-4 border-black shadow-sv w-full ${
          isHero ? "max-w-[500px]" : ""
        }`}
      >
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
          className="flex-1 px-5 py-[18px] bg-white text-black font-space text-[12px] min-w-0 outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-[18px] border-l-4 border-black font-ranchers text-xl whitespace-nowrap transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${
            isHero
              ? "bg-volt text-black hover:bg-black hover:text-white"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          {isSubmitting
            ? "Joining..."
            : isHero
            ? "Claim Spot"
            : "Reserve My Spot"}
        </button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 80, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 80, x: "-50%" }}
            className={`fixed bottom-8 left-1/2 border-4 border-black shadow-sb px-7 py-3.5 font-space text-[12px] font-bold uppercase tracking-[0.1em] z-[9999] whitespace-nowrap ${
              toast.isError ? "bg-red-500 text-white" : "bg-volt text-black"
            }`}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
