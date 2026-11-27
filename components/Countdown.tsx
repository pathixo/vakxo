"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-04T00:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    const first = setTimeout(update, 0);
    const interval = setInterval(update, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  const format = (n?: number) =>
    n === undefined ? "--" : String(n).padStart(2, "0");

  const units = [
    { label: "DAYS", value: format(time?.days), accent: false },
    { label: "HRS", value: format(time?.hours), accent: false },
    { label: "MIN", value: format(time?.minutes), accent: false },
    { label: "SEC", value: format(time?.seconds), accent: true },
  ];

  return (
    <div role="timer" aria-label="Time until the private beta opens">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
        <span className="text-white/45">LAUNCH COUNTDOWN</span>
        <span className="text-volt">DEC 04 · 00:00 IST</span>
      </div>

      <div className="grid grid-cols-4 divide-x divide-white/10 border-y border-white/15 py-4 sm:py-5">
        {units.map((u) => (
          <div key={u.label} className="px-2 first:pl-0 last:pr-0 sm:px-5">
            <div
              className={`text-3xl font-bold tabular-nums leading-none tracking-[-0.04em] sm:text-5xl ${
                u.accent ? "text-volt" : "text-paper"
              }`}
            >
              {u.value}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 sm:tracking-[0.16em]">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
