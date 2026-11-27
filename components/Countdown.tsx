"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const TARGET_EPOCH = new Date("2026-12-04T00:00:00+05:30").getTime();
const emptySubscribe = () => () => {};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_EPOCH - Date.now());
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (!mounted) {
    return <div className="h-[104px] mb-10"></div>;
  }

  const blocks = [
    { label: "Days", value: pad(timeLeft.d) },
    { label: "Hrs", value: pad(timeLeft.h) },
    { label: "Min", value: pad(timeLeft.m) },
    { label: "Sec", value: pad(timeLeft.s) },
  ];

  return (
    <div className="mb-10 grid grid-cols-4 gap-2 sm:flex sm:gap-4">
      {blocks.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center border-4 border-black bg-white px-2 py-3 shadow-sb sm:min-w-[82px] sm:px-5 sm:py-[18px]"
        >
          <div className="font-sans w-full text-center text-2xl font-extrabold leading-none -tracking-[0.04em] text-black tabular-nums sm:w-16 sm:text-[44px]">
            {b.value}
          </div>
          <div className="font-space mt-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-black/40">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}