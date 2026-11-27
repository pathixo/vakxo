"use client";

import { useState } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;

        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-tight text-ink transition-colors hover:text-ink/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-lg"
            >
              <span>{item.q}</span>
              <span
                className={`shrink-0 font-mono text-lg text-ink/45 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  isOpen ? "rotate-45 text-ink" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
