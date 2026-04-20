"use client";

import * as React from "react";
import { Button } from "./Button";
import { Star, Globe, Camera, Share2, Briefcase, Mail } from "lucide-react";

const TYPEWRITER_TERMS = ["Mobile Apps.", "SaaS Products.", "Web Apps.", "Digital Products."];

export function Hero() {
  const [termIndex, setTermIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const term = TYPEWRITER_TERMS[termIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < term.length) {
          setDisplayText(term.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(term.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTermIndex((prev) => (prev + 1) % TYPEWRITER_TERMS.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, termIndex]);

  // FINAL REFINED SCALING & POSITIONING (MATCHING IMAGE 25 & 26)
  // Scaling up total radii for a larger center area
  const staticIcons = [
    { src: "/icon/pthon_logo.svg", size: 105, top: "2%", left: "42%", label: "Python", cardSize: 115 },
    { src: "/icon/nextjs-logo.svg", size: 45, top: "11%", left: "62%", label: "Next.js" },
    { src: "/icon/laravel_logo.svg", size: 45, top: "18%", left: "78%", label: "Laravel" },
    { src: "/icon/azure_logo.svg", size: 58, top: "34%", left: "84%", label: "Azure" },
    { src: "/icon/ms-sql_logo.svg", size: 115, top: "45%", left: "94%", label: "SQL Server", cardSize: 125 },
    { src: "/icon/figma_logo.svg", size: 45, top: "68%", left: "92%", label: "Figma" },
    { src: "/icon/flutter_logo.svg", size: 45, top: "82%", left: "82%", label: "Flutter" },
    { src: "/icon/asp_net_logo.svg", size: 105, top: "88%", left: "66%", label: ".NET", cardSize: 115 },
    { src: "/icon/web_flow_logo.svg", size: 42, top: "88%", left: "28%", label: "Webflow" },
    { src: "/icon/aws_logo.svg", size: 115, top: "78%", left: "8%", label: "AWS", cardSize: 125 },
    { src: "https://cdn.simpleicons.org/terraform/844FBA", size: 45, top: "52%", left: "5%", label: "Terraform" },
    { src: "/icon/docker_logo.svg", size: 45, top: "30%", left: "12%", label: "Docker" },
    { src: "/icon/drupal_logo.svg", size: 42, top: "14%", left: "22%", label: "Drupal" },
    { src: "/icon/react_logo.svg", size: 52, top: "25%", left: "32%", label: "React" },
    { src: "https://cdn.simpleicons.org/gatsby/663399", size: 42, top: "8%", left: "26%", label: "Gatsby" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center font-sans lg:pb-24">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.06]" 
           style={{ 
             backgroundImage: "radial-gradient(#00BCD4 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }}>
      </div>

      <div className="container max-w-[1450px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center relative z-10 py-12 lg:py-0 min-h-screen">
        
        {/* Left Column Content */}
        <div className="flex flex-col items-start gap-12 py-12 lg:py-20 justify-center">
          
          <h1 className="text-5xl lg:text-[82px] font-bold text-[#00BCD4] leading-[0.88] uppercase font-serif tracking-tighter">
            INNOVATE. <br />
            EMBRACE. <br />
            INSPIRE.
          </h1>

          <div className="space-y-10">
            <p className="text-gray-600 text-[24px] font-medium leading-relaxed max-w-lg">
              To make your footprints glow into the digital era, <br />
              We assist 🧡 you to gear-up yourself through,
            </p>

            <div className="text-[38px] lg:text-[46px] font-bold text-[#22c55e] flex items-center gap-3">
              <span>🚀 Ignite your</span>
              <span className="relative inline-block min-w-[200px]">
                {displayText}
                <span className="inline-block w-[4px] h-[52px] bg-[#22c55e] ml-1 animate-[pulse_1s_infinite] align-bottom" />
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <Button className="h-[74px] min-w-[340px] px-10 rounded-full bg-[#00BCD4] hover:bg-[#00acc1] text-white text-2xl font-bold shadow-2xl transition-all whitespace-nowrap">
              Schedule a consultation 📅
            </Button>
            <Button variant="button-ghost" className="h-[74px] min-w-[220px] px-10 rounded-full border-2 border-[#00BCD4]/40 text-[#00BCD4] hover:bg-[#00BCD4]/5 text-2xl font-bold transition-all whitespace-nowrap">
              Explore us 😎
            </Button>
          </div>

          {/* Trust widgets */}
          <div className="flex flex-wrap items-center gap-8 mt-4">
             <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex items-center gap-8 h-32">
                <div className="flex flex-col text-right">
                   <div className="text-[12px] uppercase font-bold text-gray-400 tracking-widest mb-1">Reviewed on</div>
                   <div className="text-3xl font-black text-slate-800 tracking-tighter">Clutch</div>
                </div>
                <div className="h-14 w-px bg-gray-200"></div>
                <div className="flex flex-col items-center gap-2">
                   <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} size={18} className="fill-[#FF5A5F] text-[#FF5A5F]" />)}
                   </div>
                   <div className="text-[12px] font-bold text-gray-400">10 REVIEWS</div>
                </div>
             </div>

             <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex items-center gap-8 h-32">
                <div className="text-[12px] uppercase font-bold text-gray-400 tracking-widest text-right mb-1">Trusted on</div>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-[#0D47A1] rounded-lg flex items-center justify-center text-white text-xl font-black italic">TB</div>
                   <div className="text-[15px] font-bold text-[#0D47A1] leading-[1.2] uppercase">
                      Tech <br /> Behemoths
                   </div>
                </div>
             </div>
          </div>

          {/* Testimonial block */}
          <div className="max-w-xl pl-2 space-y-8 pt-2">
            <p className="text-gray-600 font-medium italic leading-relaxed text-[17px]">
              "Remarkable end-to-end execution, meticulous UI/UX research, expert development, seamless cloud deployment, and invaluable long-term technical support. A truly reliable and proficient partner for our digital product's success."
            </p>
            <div className="flex items-center gap-8">
               <div className="flex flex-col text-right">
                  <span className="text-[20px] font-bold text-slate-900">-Suvarka Pratheepan</span>
                  <span className="text-[14px] text-gray-500 font-bold uppercase tracking-tight">Co-founder & CMO | PromoZon Ltd</span>
                  <span className="text-[14px] text-gray-400 font-bold flex items-center justify-end gap-1 mt-0.5">🇬🇧 United Kingdom</span>
               </div>
               <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-white shadow-2xl flex items-center justify-center text-5xl select-none">😎</div>
            </div>
          </div>

          {/* Social Icons Bar Bottom Left */}
          <div className="flex items-center gap-6 mt-12 bg-white/40 p-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-50">
            {[
              { icon: <Globe size={28} fill="currentColor" />, color: "bg-[#00BCD4]" },
              { icon: <Briefcase size={28} fill="currentColor" />, color: "bg-[#1da1f2]" },
              { icon: <Camera size={28} />, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
              { icon: <Mail size={28} />, color: "bg-black" },
              { icon: <Share2 size={28} fill="currentColor" />, color: "bg-[#0a66c2]" }
            ].map((s, i) => (
              <div key={i} className={`w-16 h-16 rounded-full ${s.color} text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border-2 border-white shadow-xl`}>
                {s.icon}
              </div>
            ))}
          </div>

        </div>

        {/* Right Column - LARGE CENTRAL IMAGE REFINEMENT */}
        <div className="relative w-full h-full min-h-[850px] flex items-center justify-center select-none pt-12">
          
          {/* BACKGROUND GLOW */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#00BCD4]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

          <div className="relative w-[800px] h-[800px] flex items-center justify-center">
            
            {/* CROSSING DOTTED BLUE GUIDELINES */}
            <div className="absolute top-[-80px] bottom-[-80px] left-1/2 w-px border-l-2 border-dotted border-[#00BCD4]/30 z-0 pointer-events-none"></div>
            <div className="absolute left-[-80px] right-[-80px] top-1/2 h-px border-t-2 border-dotted border-[#00BCD4]/30 z-0 pointer-events-none"></div>

            {/* Concentric Dashed Orbits - BLUE/CYAN (ANIMATED) */}
            {/* Expanded orbit radii to accommodate larger center */}
            <div className="absolute w-[760px] h-[760px] border-2 border-dashed border-[#00BCD4]/30 rounded-full animate-[spin-orbit_60s_linear_infinite] z-0"></div>
            <div className="absolute w-[540px] h-[540px] border-2 border-dashed border-[#00BCD4]/20 rounded-full animate-[spin-orbit_45s_linear_infinite_reverse] z-0"></div>

            {/* Central Hexagon Content - SCALED UP */}
            <div className="relative z-20 w-[520px] h-[520px] flex items-center justify-center scale-110">
               {/* CUSTOM HEXAGON BACKDROP */}
               <div className="absolute w-[440px] h-[440px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-gray-100/50" 
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
               </div>
               <img src="/icon/center.svg" alt="Mockup" className="relative z-10 w-[480px] h-[480px] object-contain drop-shadow-2xl translate-y-[-15px]" />
            </div>

            {/* Exact Icon Placements (STATIC ICONS, MOVING ORBITS) */}
            {staticIcons.map((icon, idx) => (
              <div
                key={idx}
                className="absolute flex items-center justify-center z-30"
                style={{
                  top: icon.top,
                  left: icon.left,
                  width: `${icon.cardSize || 74}px`,
                  height: `${icon.cardSize || 74}px`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-50 p-3 hover:scale-110 transition-transform cursor-pointer overflow-hidden">
                  <img 
                    src={icon.src} 
                    alt={icon.label} 
                    className="object-contain"
                    style={{ width: `${icon.size}px`, height: `${icon.size}px` }}
                  />
                </div>
              </div>
            ))}

            {/* Shopify Partners Large Badge Bottom Center */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-40 hover:scale-105 transition-transform cursor-pointer">
              <img src="/icon/shopify_partners_logo.svg" alt="Shopify Partners" className="h-[96px] object-contain drop-shadow-2xl" />
            </div>

          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes spin-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
}
