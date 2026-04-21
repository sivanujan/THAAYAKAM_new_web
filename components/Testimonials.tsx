"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  initials: string;
  color: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  industry,
  quote,
  initials,
  color,
}: TestimonialCardProps) => (
  <div className="bg-white rounded-[20px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-6 h-full">
    {/* Name + avatar */}
    <div className="flex items-center gap-4">
      <div
        className="w-[71px] h-[71px] rounded-full flex items-center justify-center text-white text-xl font-black shrink-0"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div>
        <p className="font-bold text-brand-dark text-base leading-snug">{name}</p>
        <p className="text-gray-500 text-sm leading-snug">{role}</p>
        <p className="text-brand-primary text-sm font-semibold leading-snug">{company}</p>
      </div>
    </div>

    {/* Quote */}
    <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 italic">
      {quote}
    </blockquote>

    {/* Industry tag */}
    <div className="inline-flex">
      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 rounded-full px-3 py-1">
        {industry}
      </span>
    </div>
  </div>
);

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    name: "Mrs Suvarka Pratheepan",
    role: "Co-founder & CMO",
    company: "PromoZon Technologies Ltd",
    industry: "Retail & Consumer Services",
    initials: "SP",
    color: "#15CEFF",
    quote:
      `"Our success story was meticulously crafted by UI/UX design expertise and Mobile Apps Development prowess. Seamlessly integrated with AWS Cloud Solution, it's now a geo-location-powered deal discovery powerhouse. Kudos for transforming our vision into reality."`,
  },
  {
    name: "Mr Amarnath Mahadeva",
    role: "Chairman",
    company: "British Tamils Cricket League",
    industry: "Sports & Entertainment",
    initials: "AM",
    color: "#22c55e",
    quote:
      `"Your team's exceptional work in revamping our Cricket League's website and creating a high-performing backend with portals truly impressed us. From seamless UI/UX design to full-stack excellence, your responsiveness and skill are very good. Thanks for bringing our vision to life!"`,
  },
  {
    name: "Mr Mir Kausar Ali",
    role: "Founder",
    company: "World Migratio Ltd",
    industry: "Education & Consulting",
    initials: "MK",
    color: "#6366f1",
    quote:
      `"Our Student Migration Consulting platform has been transformed into a fine experience, all thanks to your team's backend development prowess. The quality and efficiency you've showcased in building the backend has significantly enhanced the platform's functionality. Thank you for your exceptional backend development!"`,
  },
  {
    name: "Mr Sanjy Kanagarasa",
    role: "Founder",
    company: "Yathumure Event Management Services",
    industry: "Events & Hospitality",
    initials: "SK",
    color: "#f59e0b",
    quote:
      `"Your team's exceptional work in revamping our platform's website and creating a high-performing backend with portals truly impressed us. From seamless UI/UX design to full-stack excellence, your responsiveness and skill are very good. Thanks for bringing our vision to life!"`,
  },
];

export function Testimonials() {
  return (
    <section id="clients" className="w-full bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <h2 className="text-center text-4xl md:text-[42px] font-bold text-brand-dark mb-14 tracking-tight">
          Our Clients Speak
        </h2>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button className="flex items-center gap-2 px-10 py-3.5 rounded-full bg-brand-primary text-white font-bold text-base hover:bg-[#00acc1] transition-colors shadow-lg">
            View Portfolio <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
