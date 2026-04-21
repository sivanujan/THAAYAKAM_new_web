"use client";

import * as React from "react";
import { Cloud, Smartphone, Layout, Settings, Palette } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => (
  <div className="bg-white rounded-[20px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 h-full">
    {/* Title + Icon row */}
    <div className="flex items-start justify-between gap-4">
      <h4 className="text-brand-primary font-semibold text-lg leading-tight">{title}</h4>
      <div className="shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
        {icon}
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-700 text-sm leading-relaxed tracking-wide flex-1">
      {description}
    </p>

    {/* Feature list */}
    <ul className="space-y-1 mt-2">
      {features.map((f) => (
        <li key={f} className="text-sm font-semibold text-brand-dark">
          {f}
        </li>
      ))}
    </ul>

    {/* Explore link */}
    <div className="flex justify-end mt-2">
      <button className="text-brand-accent text-sm font-medium underline hover:opacity-80 transition-opacity">
        Explore
      </button>
    </div>
  </div>
);

const SERVICES: ServiceCardProps[] = [
  {
    icon: <Cloud size={24} />,
    title: "Cloud Consultation",
    description:
      "Elevate your business to new heights by seamlessly migrating your digital ecosystem to the cloud. Our commitment lies in providing cutting-edge, high-performing, and meticulously secured solutions that optimise costs. Our adept engineers, certified across AWS, GCP, and Azure, work collaboratively to realise:",
    features: [
      "Cloud Architecture and Construction",
      "Effortless Data Transition",
      "Fortified Cloud Security",
    ],
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Application",
    description:
      "Transform your business vision into a powerful mobile experience. We build native and cross-platform mobile apps using Flutter and React Native that delight users on iOS and Android, with seamless performance and scalable architecture designed for growth.",
    features: [
      "Cross-Platform iOS & Android",
      "Real-time & Offline Capability",
      "App Store Deployment & Support",
    ],
  },
  {
    icon: <Layout size={24} />,
    title: "Web App Development",
    description:
      "We craft fast, secure, and scalable web applications using modern frameworks such as Next.js, React, and Laravel. From dynamic portals to complex SaaS platforms, our full-stack engineers bring your product to life with pixel-perfect precision and solid backend architecture.",
    features: [
      "Full-Stack React & Next.js",
      "RESTful API & Microservices",
      "SEO-Optimised & Accessible",
    ],
  },
  {
    icon: <Settings size={24} />,
    title: "Managed IT",
    description:
      "Focus on growing your business while we manage your entire technology infrastructure. Our managed IT services cover proactive monitoring, security patching, incident response, and cloud cost optimisation — ensuring your systems run flawlessly around the clock.",
    features: [
      "24/7 Infrastructure Monitoring",
      "Cyber Security & Compliance",
      "DevOps & CI/CD Pipelines",
    ],
  },
  {
    icon: <Palette size={24} />,
    title: "Brand Design",
    description:
      "Your brand is your story. We craft cohesive visual identities and meticulous UI/UX designs that resonate with your audience, from logo and design system creation through to full product interface design — ensuring every touchpoint reflects who you are.",
    features: [
      "Logo & Brand Identity",
      "UI/UX Design & Prototyping",
      "Design System & Style Guides",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-[#f7fafc] py-24">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <h2 className="text-4xl md:text-[42px] font-bold text-brand-dark tracking-tight">
            What We Do!
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            We deliver 🙌 creatively led and strategically driven innovative solutions 💡 tied
            with robust trust and intelligence to deploy your dream to a new era!
          </p>
        </div>

        {/* Cards — 2 + 2 + 1 centred */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 2).map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.slice(2, 4).map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          {/* Row 3 — centred single card */}
          <div className="flex justify-center">
            <div className="w-full md:w-[calc(50%-1rem)]">
              <ServiceCard {...SERVICES[4]} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-3.5 rounded-full bg-brand-primary text-white font-bold text-base hover:bg-[#00acc1] transition-colors shadow-lg">
            Schedule a consultation 📅
          </button>
        </div>

      </div>
    </section>
  );
}
