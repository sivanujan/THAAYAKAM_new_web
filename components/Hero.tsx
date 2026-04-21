"use client";

import * as React from "react";
import { Star } from "lucide-react";

const TYPEWRITER_TERMS = [
  "Mobile Apps.",
  "Web Apps.",
  "SaaS Products.",
  "Digital Products.",
];

interface OrbitIcon {
  src: string;
  label: string;
  top: string; // % within the 584×584 canvas
  left: string;
  size: number; // rendered icon inner size px
  cardSize: number; // outer white circle size px
}

/**
 * Icon positions derived directly from the Figma landing-image-new-desktop frame
 * (584×584 starting at x=672, y=124). Percentages are the icon centres.
 */
const ORBIT_ICONS: OrbitIcon[] = [
  { src: "/icon/pthon_logo.svg", label: "Python", top: "12.5%", left: "33%", size: 58, cardSize: 90 },
  { src: "/icon/nextjs-logo.svg", label: "Next.js", top: "14.4%", left: "51.5%", size: 30, cardSize: 50 },
  { src: "/icon/laravel_logo.svg", label: "Laravel", top: "10.3%", left: "66.8%", size: 36, cardSize: 50 },
  { src: "/icon/react_logo.svg", label: "React", top: "20.2%", left: "17.6%", size: 36, cardSize: 50 },
  { src: "/icon/azure_logo.svg", label: "Azure", top: "23.5%", left: "71.4%", size: 36, cardSize: 54 },
  { src: "/icon/ms-sql_logo.svg", label: "SQL Server", top: "31.2%", left: "87.2%", size: 58, cardSize: 90 },
  { src: "/icon/drupal_logo.svg", label: "Drupal", top: "33.2%", left: "19.3%", size: 36, cardSize: 50 },
  { src: "/icon/squarespace_logo.svg", label: "Squarespace", top: "45.7%", left: "83.7%", size: 32, cardSize: 50 },
  { src: "/icon/docker_logo.svg", label: "Docker", top: "50.3%", left: "15.9%", size: 36, cardSize: 50 },
  { src: "/icon/figma_logo.svg", label: "Figma", top: "55.7%", left: "92.1%", size: 32, cardSize: 50 },
  { src: "/icon/flutter_logo.svg", label: "Flutter", top: "64.2%", left: "81.3%", size: 32, cardSize: 50 },
  { src: "/icon/aws_logo.svg", label: "AWS", top: "67.5%", left: "12.7%", size: 58, cardSize: 90 },
  { src: "/icon/web_flow_logo.svg", label: "Webflow", top: "76.4%", left: "28.3%", size: 38, cardSize: 58 },
  { src: "/icon/asp_net_logo.svg", label: ".NET", top: "79.5%", left: "78.9%", size: 60, cardSize: 90 },
];

export function Hero() {
  const [termIndex, setTermIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const term = TYPEWRITER_TERMS[termIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < term.length) {
            setDisplayText(term.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else if (displayText.length > 0) {
          setDisplayText(term.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTermIndex((prev) => (prev + 1) % TYPEWRITER_TERMS.length);
        }
      },
      isDeleting ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, termIndex]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Subtle background dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00BCD4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-10 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_584px] gap-10 lg:gap-16 items-start">

        {/* ---------- Left column ---------- */}
        <div className="flex flex-col items-start gap-8 pt-6 lg:pt-12">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-brand-primary leading-[0.92] uppercase tracking-tight">
            INNOVATE. <br />
            EMBRACE. <br />
            INSPIRE.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg lg:text-xl font-medium leading-relaxed max-w-[540px]">
            To make your footprints glow into the digital era,
            <br />
            We assist <span className="text-orange-500">🧡</span> you to gear-up yourself through,
          </p>

          {/* Typewriter */}
          <div className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-accent">
            <span>🚀 Ignite your</span>
            <span className="relative inline-flex items-center min-w-[200px]">
              {displayText}
              <span className="inline-block w-[3px] h-8 bg-brand-accent ml-1 animate-pulse" />
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="h-14 min-w-[240px] px-8 rounded-full bg-brand-primary hover:bg-[#00acc1] text-white text-base font-bold shadow-xl transition-all">
              Schedule a consultation 📅
            </button>
            <button className="h-14 min-w-[150px] px-8 rounded-full border-2 border-brand-primary/40 text-brand-primary hover:bg-brand-primary/5 text-base font-bold transition-all">
              Explore us 😎
            </button>
          </div>

          {/* Trust widgets */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Clutch */}
            <div className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-4 h-16">
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">
                  Reviewed on
                </span>
                <span className="text-xl font-black text-slate-800 tracking-tighter">
                  Clutch
                </span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex flex-col items-start gap-1 leading-tight">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="fill-[#FF5A5F] text-[#FF5A5F]" />
                  ))}
                </div>
                <span className="text-[9px] font-bold text-gray-400">10 REVIEWS</span>
              </div>
            </div>

            {/* Tech Behemoths */}
            <div className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-3 h-16">
              <div className="w-9 h-9 bg-[#0D47A1] rounded-md flex items-center justify-center text-white text-xs font-black italic">
                TB
              </div>
              <div className="flex flex-col text-[11px] font-bold text-[#0D47A1] leading-[1.2] uppercase">
                <span className="text-[8px] font-bold text-gray-400 tracking-widest normal-case mb-0.5">
                  Trusted on
                </span>
                Tech Behemoths
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-[420px] space-y-4 pt-4">
            <p className="text-gray-600 text-sm leading-relaxed italic">
              &ldquo;Remarkable end-to-end execution, meticulous UI/UX research, expert
              development, seamless cloud deployment, and invaluable long-term technical
              support. A truly reliable and proficient partner for our digital product&rsquo;s
              success.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">-Suvarka Pratheepan</span>
                <span className="text-xs text-gray-500 font-semibold">
                  Co-founder &amp; CMO | PromoZon Ltd
                </span>
                <span className="text-xs text-gray-400 font-semibold flex items-center gap-1 mt-0.5">
                  🇬🇧 United Kingdom
                </span>
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-xl flex items-center justify-center text-3xl select-none">
                😎
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Right column — landing image 584x584 ---------- */}
        <div className="relative w-full max-w-[584px] mx-auto aspect-square select-none">
          {/* Soft glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Crossing dotted guidelines */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px border-l-2 border-dotted border-brand-primary/25 z-0 pointer-events-none" />
          <div className="absolute left-0 right-0 top-1/2 h-px border-t-2 border-dotted border-brand-primary/25 z-0 pointer-events-none" />

          {/* Concentric dashed circles — matches Figma Ellipse 235/236/237 */}
          <div className="absolute inset-0 border-2 border-dashed border-brand-primary/30 rounded-full animate-[spin-orbit_80s_linear_infinite] z-0" />
          <div className="absolute inset-[7.5%] border-2 border-dashed border-brand-primary/25 rounded-full animate-[spin-orbit_60s_linear_infinite_reverse] z-0" />
          <div className="absolute inset-[15%] border-2 border-dashed border-brand-primary/20 rounded-full animate-[spin-orbit_45s_linear_infinite] z-0" />

          {/* Central mockup image (254x162 centred) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[53%] aspect-[254/162] bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
            <img
              src="/icon/center.svg"
              alt="THAAYAKAM product mockup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating tech icons */}
          {ORBIT_ICONS.map((icon) => (
            <div
              key={icon.label}
              title={icon.label}
              className="absolute z-30"
              style={{
                top: icon.top,
                left: icon.left,
                width: `${icon.cardSize}px`,
                height: `${icon.cardSize}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-50 p-2 hover:scale-110 transition-transform cursor-pointer">
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="object-contain"
                  style={{ width: `${icon.size}px`, height: `${icon.size}px` }}
                />
              </div>
            </div>
          ))}

          {/* Shopify Partners badge — bottom centre */}
          <div className="absolute left-1/2 -translate-x-1/2 z-40" style={{ top: "87.8%", transform: "translate(-50%, -50%)" }}>
            <div className="bg-white rounded-xl px-5 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-50 hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/icon/shopify_partners_logo.svg"
                alt="Shopify Partners"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
