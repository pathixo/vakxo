import type { Metadata } from "next";
import Script from "next/script";
import { Ranchers, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const ranchers = Ranchers({ weight: "400", subsets: ["latin"], variable: "--font-ranchers" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Vakxo — Your Dev Environment Obeys Your Voice",
  description: "The world's first voice-native autonomous dev agent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ranchers.variable} ${spaceMono.variable} ${jakarta.variable} font-sans`}>
        {/* SIDEBAR */}
        <aside className="fixed max-md:hidden top-0 right-0 w-[200px] h-screen flex z-[200] border-l-4 border-black bg-white" aria-hidden="true">
          {["Speak", "Listen", "Execute", "Control", "Ship"].map((lbl) => {
            let colors = "bg-white text-black hover:bg-volt";
            if (lbl === "Listen") colors = "bg-volt text-black hover:bg-[#bbee00]";
            if (lbl === "Control") colors = "bg-dark text-white hover:bg-[#1a1a1a] border-l-4 !border-white";

            return (
              <div key={lbl} className={`flex-1 flex items-center justify-center overflow-hidden transition-colors border-l-4 border-black first:border-l-0 ${colors}`}>
                <span className="writing-vertical font-space font-bold text-[10px] tracking-[0.18em] uppercase select-none">
                  {lbl}
                </span>
              </div>
            );
          })}
        </aside>

        {/* MAIN WRAP */}
        <div className="md:mr-[200px]">
          {/* NAV */}
          <nav className="sticky top-0 bg-white border-b-4 border-black z-[100] px-4 md:px-12 h-[72px] flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 md:gap-3.5 no-underline">
              <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] bg-black -rotate-3 flex items-center justify-center shrink-0">
                <svg className="rotate-3 w-[18px] md:w-[22px] h-[18px] md:h-[22px]" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L4 11L11 20L18 11Z" fill="#CCFF00" />
                  <path d="M11 6L7 11L11 16L15 11Z" fill="#000" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-xl md:text-2xl text-black -tracking-[0.03em] leading-none">Pathixo</div>
                <div className="font-space text-[8px] md:text-[9px] font-bold uppercase tracking-[0.12em] text-black/40 mt-1 md:mt-0.5">Building Vakxo</div>
              </div>
            </a>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:flex items-center gap-2 font-space text-[10px] font-bold uppercase tracking-[0.12em] bg-dark text-volt px-3.5 py-2 border-4 border-black shadow-s4">
                <div className="w-2 h-2 bg-volt rounded-full animate-pulse"></div> Waitlist Open
              </div>

              <a href="#waitlist" className="font-space text-[9px] md:text-[11px] font-bold uppercase tracking-[0.1em] bg-black text-white px-4 py-2.5 md:px-[22px] md:py-3 border-4 border-black rounded-lg shadow-[4px_4px_0_#CCFF00] md:shadow-sv hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all whitespace-nowrap">
                Join Waitlist ↗
              </a>
            </div>
          </nav>

          {children}
        </div>

        {/* CLOUDFLARE WEB ANALYTICS */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          type="module"
          data-cf-beacon={'{"token": "9888c6a5b38e4504b70c8e9743defe1d"}'}
        />
      </body>
    </html>
  );
}