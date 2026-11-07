"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const TARGET_EPOCH = 1779235200000;
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
    <div className="flex gap-4 mb-10">
      {blocks.map((b) => (
        <div key={b.label} className="bg-white border-4 border-black shadow-sb px-5 py-[18px] flex flex-col items-center min-w-[82px]">
          <div className="font-sans text-[44px] w-16 text-center font-extrabold text-black leading-none -tracking-[0.04em]">
            {b.value}
          </div>
          <div className="font-space text-[9px] font-bold uppercase tracking-[0.12em] text-black/40 mt-1.5">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}