"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function EmailForm({ source }: { source: "hero" | "waitlist" }) {
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg =
      source === "hero"
        ? "✓ You're on the list. Invite incoming."
        : "✓ Spot reserved. JARVIS awaits you.";
    
    setToast(msg);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setToast(null), 3400);
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
          required
          className="flex-1 px-5 py-[18px] bg-white text-black font-space text-[12px] min-w-0 outline-none"
        />
        <button
          type="submit"
          className={`px-6 py-[18px] border-l-4 border-black font-ranchers text-xl whitespace-nowrap transition-colors ${
            isHero
              ? "bg-volt text-black hover:bg-black hover:text-white"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          {isHero ? "Claim Spot" : "Reserve My Spot"}
        </button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 80, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 80, x: "-50%" }}
            className="fixed bottom-8 left-1/2 bg-volt text-black border-4 border-black shadow-sb px-7 py-3.5 font-space text-[12px] font-bold uppercase tracking-[0.1em] z-[9999] whitespace-nowrap"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}