"use client";

import * as React from "react";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => (
  <div className="flex flex-col items-center text-center gap-4 relative px-4">
    {/* Number circle */}
    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-black text-xl shadow-lg relative z-10">
      {number}
    </div>
    <div className="space-y-2">
      <h5 className="font-bold text-lg text-white">{title}</h5>
      <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{description}</p>
    </div>
  </div>
);

const STEPS: StepProps[] = [
  {
    number: "01",
    title: "Research",
    description:
      "We dive deep into your requirements and audience to gather critical insights that shape the product strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our experts craft meticulous UI/UX mockups that define the visual journey and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop robust, scalable solutions using state-of-the-art tech stacks with full test coverage.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "A polished product is deployed and monitored for peak performance with ongoing support.",
  },
];

export function HowWeDo() {
  return (
    <section id="process" className="w-full bg-brand-dark py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Background dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative flex flex-col items-center gap-16">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase">
              Our Process
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              How we do!
            </h3>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative w-full">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-brand-primary/30" />
            {STEPS.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
