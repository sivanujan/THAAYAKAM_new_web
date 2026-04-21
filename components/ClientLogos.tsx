"use client";

import * as React from "react";

interface ClientLogo {
  name: string;
  description: string;
}

const CLIENTS: ClientLogo[] = [
  { name: "BTCL", description: "British Tamils Cricket League" },
  { name: "PromoZon", description: "Digital Marketing" },
  { name: "Yathumure", description: "EdTech Platform" },
  { name: "NewPitch", description: "Sports Analytics" },
  { name: "World Migratio", description: "Consulting" },
  { name: "Schooler", description: "Education" },
];

export function ClientLogos() {
  return (
    <section className="w-full bg-brand-dark py-16">
      <div className="max-w-[1280px] mx-auto px-6">

        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          Clients Trust Us
        </h2>

        {/* Logos row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 hover:bg-white/10 transition-colors cursor-default min-w-[140px]"
            >
              {/* Logo placeholder — styled as a text badge matching the Figma pattern */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                <span className="text-brand-primary font-black text-lg">
                  {client.name.charAt(0)}
                </span>
              </div>
              <span className="text-white font-bold text-sm text-center leading-tight">
                {client.name}
              </span>
              <span className="text-gray-400 text-[11px] text-center leading-tight">
                {client.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
