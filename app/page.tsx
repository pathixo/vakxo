import EmailForm from "@/components/EmailForm";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-dark px-5 md:px-10 lg:px-16 md:pt-20 lg:pt-10 pb-20 border-b-[8px] border-black relative overflow-hidden min-h-[auto] lg:min-h-[95vh] flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-12">
        <div className="absolute inset-0 bg-hero-grid bg-grid pointer-events-none"></div>

        {/* TEXT AREA */}
        <div className="relative z-10 flex-1 w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 pt-8 lg:pt-0">
          <div className="inline-block bg-volt border-4 border-black px-4 py-1.5 font-space text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] text-black -rotate-2 mb-6 md:mb-8 shadow-s4 w-fit">
            ✦ FIRST BETA INCOMING
          </div>

          <h1 className="font-ranchers text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] leading-[0.85] text-white uppercase -tracking-[0.01em] drop-shadow-[4px_4px_0px_#000] md:drop-shadow-[6px_6px_0px_#000] mb-6 md:mb-8">
            <span>Just</span><br />
            <span className="text-volt">Say It.</span><br />
            <span className="text-stroke-white">It Happens.</span>
          </h1>

          <p className="text-base md:text-lg italic text-white/60 max-w-[500px] leading-relaxed mb-8 md:mb-10 font-normal">
            Vakxo is the world's first voice-native autonomous dev agent. We are launching our first private beta in a few weeks. Speak your intent — Vakxo writes the code, controls your desktop, runs your terminal, and ships.
          </p>

          <div className="w-full max-w-[500px]">
            <EmailForm source="hero" />
            <span className="block mt-4 font-space text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.1em] text-center sm:text-left">
              Join the waitlist to secure early access
            </span>
          </div>
        </div>

        {/* ORB AREA */}
        <div className="relative z-10 flex-1 w-full flex items-center justify-center h-[350px] sm:h-[450px] lg:h-[500px]">
          <div className="absolute transform scale-[0.75] sm:scale-[0.9] xl:scale-100 w-[380px] h-[380px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="absolute inset-[30px] border-4 border-[rgba(204,255,0,0.35)] border-dashed rounded-full animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute inset-[10px] border-4 border-[rgba(255,255,0,0.1)] border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute -inset-[10px] border-4 border-[rgba(204,255,0,0.12)] border-dashed rounded-full animate-[spin_30s_linear_infinite]"></div>

            <div className="absolute inset-[60px] bg-volt border-[8px] border-black rounded-full shadow-[0_0_0_8px_#000,8px_8px_0_#fff] flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
              <div className="font-ranchers text-[90px] text-black drop-shadow-[3px_3px_0px_rgba(0,0,0,0.25)] select-none leading-none">A</div>
            </div>

            <div className="absolute top-2 -left-5 bg-white border-4 border-black px-3.5 py-2.5 shadow-sb font-space text-[10px] font-bold uppercase tracking-[0.08em] text-black -rotate-3 animate-[pulse_4s_ease-in-out_infinite_alternate]">🎙 Voice Active</div>
            <div className="absolute top-7 -right-7 bg-dark border-4 border-volt px-3.5 py-2.5 shadow-sb font-space text-[10px] font-bold uppercase tracking-[0.08em] text-volt rotate-2 animate-[pulse_4s_ease-in-out_infinite_alternate]" style={{ animationDelay: '1s' }}>⌗ Desktop Control</div>
            <div className="absolute bottom-[60px] -right-2.5 bg-white border-4 border-black px-3.5 py-2.5 shadow-sb font-space text-[10px] font-bold uppercase tracking-[0.08em] text-black -rotate-2 animate-[pulse_4s_ease-in-out_infinite_alternate]" style={{ animationDelay: '0.5s' }}>✓ PR Merged</div>

            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 items-end bg-black border-4 border-black p-[14px_20px] shadow-sb">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-space text-[10px] font-bold uppercase tracking-[0.1em] bg-volt text-black px-3.5 py-1.5 border-4 border-black whitespace-nowrap">Listening...</div>
              {[18, 32, 44, 28, 50, 36, 22, 40, 30, 16].map((h, i) => (
                <div key={i} className="w-1.5 bg-volt animate-[pulse_0.8s_ease-in-out_infinite_alternate]" style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMAND STRIP */}
      <div className="bg-black border-b-[8px] border-black px-6 lg:px-15 flex flex-col lg:flex-row overflow-hidden">
        {[
          { text: "Vakxo, fix the auth bug and open a PR.", res: "Bug fixed. Tests run. PR #47 opened. 38 seconds." },
          { text: "Build the dashboard component and run it in the browser.", res: "Component built. Browser launched. Preview ready." },
          { text: "Deploy to staging and share the link with the team.", res: "Deployed. Slack message sent. Link copied." },
        ].map((cmd, i) => (
          <div key={i} className="flex-1 py-8 lg:py-11 pr-0 lg:pr-6 border-b-4 lg:border-b-0 lg:border-r-4 border-white/20 last:border-b-0 last:border-r-0 flex flex-col gap-3 pl-0 lg:pl-6 first:pl-0">
            <span className="font-space text-[10px] font-bold uppercase tracking-[0.12em] text-volt">// You say:</span>
            <div className="font-sans italic text-[clamp(14px,1.6vw,18px)] text-white leading-[1.4] font-semibold lg:pr-6">"{cmd.text}"</div>
            <div className="font-ranchers text-[28px] text-volt mt-1">↓</div>
            <span className="font-space text-[10px] text-white/30 uppercase tracking-[0.08em] lg:pr-6">→ {cmd.res}</span>
          </div>
        ))}
      </div>

      {/* PROOF BAR */}
      <div className="bg-volt border-b-[8px] border-black grid grid-cols-2 lg:grid-cols-4">
        {[
          { num: "3x", label: "Faster Dev Cycles" },
          { num: "0", label: "Context Switches" },
          { num: "38s", label: "Avg Task Completion" },
          { num: "1", label: "Voice. Full Control." },
        ].map((pb, i) => (
          <div key={i} className={`py-6 lg:py-7 px-4 lg:px-10 flex flex-col items-center gap-1 border-black ${i % 2 === 0 ? 'border-r-4' : ''} lg:border-r-4 lg:last:border-r-0 ${i < 2 ? 'border-b-4 lg:border-b-0' : ''}`}>
            <div className="font-ranchers text-[42px] lg:text-[52px] text-black leading-none">{pb.num}</div>
            <div className="font-space text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.12em] text-black/50 text-center">{pb.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section className="bg-white border-b-[8px] border-black p-6 lg:p-[80px_60px]">
        <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/35 mb-6 block">// The Difference</span>
        <Reveal>
          <div className="font-ranchers text-[clamp(46px,7vw,96px)] text-black uppercase leading-[0.88] -tracking-[0.01em] drop-shadow-[5px_5px_0px_rgba(0,0,0,0.12)] mb-10 lg:mb-15">
            Feels Like<br />Having A<br />Superpower
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-black">
            {[
              { n: "01", t: "Speak, Don't Type", d: "No prompts to engineer, no commands to memorize. Your voice is the IDE. Just say what you want built.", svg: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" },
              { n: "02", t: "Owns Your Desktop", d: "Vakxo doesn't just live in your editor. It controls your entire desktop — opens apps, navigates browsers, manages files.", svg: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-6-1h4v-2h-4v2zm-7.5 0h2.5l1-2.5L11 17h2.5l-3-6-3 6z" },
              { n: "03", t: "Acts, Not Assists", d: "Other tools suggest. Vakxo does. It runs your tests, fixes the failures, commits the fix, and tells you it's done.", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" },
              { n: "04", t: "Never Loses Context", d: "Vakxo holds the full picture — your codebase, your system state. Every follow-up builds on everything before.", svg: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" },
            ].map((f, i) => (
              <div key={i} className="p-8 lg:p-[48px_44px] border-b-4 border-black md:even:border-l-4 md:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0 relative overflow-hidden hover:bg-[#f7f7f0] transition-colors group">
                <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 mb-5 block">{f.n} — Overview</span>
                <div className="w-[48px] h-[48px] lg:w-[54px] lg:h-[54px] bg-black border-4 border-black flex items-center justify-center mb-6 shadow-s4">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-volt lg:w-[26px] lg:h-[26px]"><path d={f.svg} /></svg>
                </div>
                <h3 className="font-ranchers text-[28px] lg:text-[36px] text-black uppercase leading-[0.9] mb-4 relative z-10">{f.t}</h3>
                <p className="text-[14px] text-black/60 leading-[1.75] max-w-[360px] relative z-10">{f.d}</p>
                <div className="absolute -bottom-5 right-2 font-ranchers text-[140px] lg:text-[180px] text-black/5 leading-none select-none pointer-events-none group-hover:text-black/10 transition-colors">{f.n}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* COMPARISON */}
      <section className="border-b-[8px] border-black">
        <div className="bg-white px-6 lg:px-15 py-8 lg:py-10 pb-6 border-b-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 block mb-2.5">// Why Everything Else Fails</span>
            <h2 className="font-ranchers text-[48px] lg:text-[56px] text-black uppercase leading-none">The Truth.</h2>
          </div>
          <div className="font-space text-[11px] font-bold uppercase tracking-[0.12em] bg-volt text-black px-[18px] py-[10px] border-4 border-black shadow-s4 w-fit">Then vs. Now</div>
        </div>

        {[
          {
            old: { title: "Type.<br>Wait.<br>Copy.", body: "Tab to editor. Write a prompt. Wait. Copy. Paste. Run. Tab back. You're a human API." },
            new: { title: "Say It.<br>Watch<br>It.", body: "One sentence. Vakxo writes, runs, debugs, and ships — autonomously." }
          },
          {
            old: { title: "Lives in<br>The<br>Editor.", body: "Copilot writes lines. But you still open the terminal. You still click through the browser." },
            new: { title: "Controls<br>Your<br>Desktop.", body: "Vakxo moves through your OS like you would. Open terminal? Done. Screenshot? Done." }
          }
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-black last:border-b-0">
            <div className="bg-black border-b-4 md:border-b-0 md:border-r-4 border-black p-8 lg:p-[52px_60px] relative overflow-hidden group">
              <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-grey mb-4 block">// Old Tools</span>
              <div className="font-ranchers text-[clamp(40px,5vw,68px)] text-grey uppercase leading-[0.9] -tracking-[0.01em]" dangerouslySetInnerHTML={{ __html: row.old.title }}></div>
              <div className="mt-5 text-[14px] text-grey/70 leading-[1.7] max-w-[380px]">{row.old.body}</div>
              <div className="absolute -bottom-7 right-2.5 font-ranchers text-[150px] lg:text-[200px] text-white/5 leading-none select-none pointer-events-none group-hover:text-white/10 transition-colors">X</div>
            </div>
            <div className="bg-volt p-8 lg:p-[52px_60px] relative overflow-hidden group">
              <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 mb-4 block">// Vakxo</span>
              <div className="font-ranchers text-[clamp(40px,5vw,68px)] text-black uppercase leading-[0.9] -tracking-[0.01em] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.12)]" dangerouslySetInnerHTML={{ __html: row.new.title }}></div>
              <div className="mt-5 text-[14px] text-black/60 leading-[1.7] max-w-[380px]">{row.new.body}</div>
              <div className="absolute -bottom-7 right-2.5 font-ranchers text-[150px] lg:text-[200px] text-black/5 leading-none select-none pointer-events-none group-hover:text-black/10 transition-colors">✓</div>
            </div>
          </div>
        ))}
      </section>

      {/* BLUEPRINT */}
      <section className="bg-dark p-6 lg:p-[80px_60px] py-12 border-b-[8px] border-black">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <div className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-4">// End-to-End</div>
              <div className="font-ranchers text-[clamp(46px,7vw,96px)] text-white uppercase leading-[0.88] drop-shadow-[4px_4px_0px_#000] lg:drop-shadow-[6px_6px_0px_#000]">The <span className="text-volt">Loop</span><br />Blueprint</div>
            </div>
            <p className="max-w-[300px] text-[14px] text-white/40 leading-[1.7] md:text-right">From voice command to shipped feature — this is the Vakxo loop.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { stk: "Step 01 — Intent", rot: "-rotate-2", svg: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z", title: "Speak Intent", body: "Say what you want in plain English. No special syntax. Vakxo maps it to tasks.", wm: "01" },
            { stk: "Step 02 — Execute", rot: "rotate-[1.5deg]", svg: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11H4v-2h11v2zm4-4H4V9h15v2z", title: "Takes Over", body: "Vakxo writes code, controls desktop, runs terminals, and navigates browsers autonomously.", wm: "02" },
            { stk: "Step 03 — Done", rot: "-rotate-1", svg: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z", title: "Review & Ship", body: "Vakxo reports back. Review the summary, say 'ship it,' and the PR is open.", wm: "03" }
          ].map((bp, i) => (
            <Reveal key={i}>
              <div className="bg-white border-[6px] lg:border-[8px] border-black p-8 lg:p-[40px_30px_36px] relative overflow-hidden shadow-sw h-full">
                <span className={`inline-block bg-volt border-4 border-black px-3 py-1.5 font-space text-[10px] font-bold uppercase tracking-[0.12em] text-black shadow-s4 mb-7 relative z-10 ${bp.rot}`}>{bp.stk}</span>
                <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center mb-5 relative z-10 shadow-s4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCFF00"><path d={bp.svg} /></svg>
                </div>
                <div className="font-ranchers text-[32px] lg:text-[36px] text-black uppercase leading-[0.92] mb-4 relative z-10">{bp.title}</div>
                <div className="text-[13px] text-black/60 leading-[1.75] relative z-10">{bp.body}</div>
                <div className="absolute -bottom-8 -right-2 font-ranchers text-[150px] lg:text-[200px] text-black/5 leading-none select-none pointer-events-none">{bp.wm}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-volt border-b-[8px] border-black p-6 py-16 lg:p-[80px_60px] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 font-ranchers text-[300px] lg:text-[440px] text-black/5 leading-none pointer-events-none select-none">A</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center relative z-10">
          <Reveal>
            <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-5 block">// First Beta Launching Soon.</span>
            <div className="font-ranchers text-[clamp(48px,7vw,90px)] text-black uppercase leading-[0.87] drop-shadow-[5px_5px_0px_rgba(0,0,0,0.15)] mb-6">Your Turn<br />To Be<br />Iron Man.</div>
            <p className="text-[14px] lg:text-[15px] text-black/60 leading-[1.75] max-w-[420px]">Vakxo's first private beta is launching in less than a month. We're onboarding a select group of developers who want to feel what it's like to have a JARVIS-grade agent. Secure your spot on the waitlist.</p>
          </Reveal>
          <Reveal>
            <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-4 block">// First Beta Launches In</span>
            <Countdown />
            <EmailForm source="waitlist" />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t-[8px] border-black p-8 py-12 lg:p-[64px_60px_48px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b-4 border-white/10 pb-10 mb-8">
          <div>
            <div className="font-ranchers text-[48px] lg:text-[56px] text-white uppercase leading-[0.9] mb-4">Pa<span className="text-volt">thi</span>xo</div>
            <p className="text-[13px] text-white/35 leading-[1.75] max-w-[260px]">Building Vakxo — the voice-first autonomous developer agent.</p>
          </div>
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8">
            <div>
              {/* <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-5 block">// Product</span>
              <ul className="flex flex-col gap-3">
                {['Vakxo Agent', 'Voice Interface', 'Desktop Control'].map(link => (
                  <li key={link}><a href="#" className="text-[14px] text-white/55 hover:text-volt transition-colors">{link}</a></li>
                ))}
              </ul> */}
            </div>
            <div>
              <span className="font-space text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-5 block">// Company</span>
              <ul className="flex flex-col gap-3">
                {[{ name: 'About Pathixo', href: 'https://pathixo.com/about' }, { name: 'Careers', href: 'https://pathixo.com/careers' }, { name: 'Contact', href: 'https://pathixo.com#contact' }].map(link => (
                  <li key={link.name}><a href={link.href} className="text-[14px] text-white/55 hover:text-volt transition-colors" target="_blank" rel="noopener noreferrer">{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-space text-[10px] text-white/20 uppercase tracking-[0.1em] text-center md:text-left">© 2026 Pathixo Inc. — All Rights Reserved</span>
          <div className="font-space text-[10px] font-bold uppercase tracking-[0.1em] text-black bg-volt px-3.5 py-1.5 border-4 border-black">JARVIS Is Real Now</div>
        </div>
      </footer>
    </main>
  );
}