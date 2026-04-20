"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  challenge: string;
  solution: string;
  bgColor: string;
  isReversed?: boolean;
}

const ProjectCard = ({ title, category, description, stats, challenge, solution, bgColor, isReversed }: ProjectCardProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center py-20 border-b border-gray-100 last:border-0`}>
      {/* Content Side */}
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase">
            {category}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">{title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-3 gap-4 p-6 rounded-3xl ${bgColor} text-white`}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <div className="p-2 bg-white/20 rounded-lg mb-1">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl font-black">{stat.value}</div>
              <div className="text-[10px] uppercase font-bold tracking-tighter opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge/Solution */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2">
              <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
              THE CHALLENGE
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">{challenge}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2">
              <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
              THE SOLUTION
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">{solution}</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-brand-primary font-bold group">
          View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Visual Side (Mockup Frame) */}
      <div className="flex-1 w-full relative">
        <div className="aspect-[4/3] rounded-[2.5rem] bg-gray-50 border-8 border-white shadow-2xl overflow-hidden relative group">
          {/* Subtle Project Background Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[100px] opacity-20 bg-brand-primary`}></div>
          
          {/* Main Visual Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
               <div className="text-brand-dark/10 font-black text-8xl rotate-[-12deg] select-none">{title.split(' ')[0]}</div>
               <div className="flex gap-4">
                  <div className="w-32 h-56 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col p-4 gap-2 transform -translate-y-4">
                    <div className="w-full h-20 bg-gray-100 rounded-lg"></div>
                    <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="w-64 h-44 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col p-4 gap-4 transform translate-y-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-primary/20"></div>
                      <div className="w-24 h-3 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="w-full h-1 bg-gray-100 rounded-full"></div>
                    <div className="w-full h-24 bg-gray-50 rounded-xl"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-brand-primary font-bold tracking-[0.3em] text-sm uppercase">Our Works</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight">Portfolio.</h3>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 font-medium">
            A Glimpse of Our Creativity across various technical domains and industries.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          <ProjectCard 
            title="BTCL - British Tamils Cricket League"
            category="Web Application • Sports Tech"
            description="A comprehensive sports management platform designed to streamline league operations, player statistics, and match tracking for the prestigious BTCL."
            stats={[
              { label: "Active Players", value: "2,000+", icon: <Users size={16} /> },
              { label: "Real-time Sync", value: "100%", icon: <Zap size={16} /> },
              { label: "Accuracy", value: "99.9%", icon: <TrendingUp size={16} /> }
            ]}
            challenge="Managing complex manual data for thousands of players across multiple divisions with zero real-time visibility."
            solution="Developed a custom React-based dashboard with a robust Node.js backend for automated scoring and live match updates."
            bgColor="bg-brand-primary"
          />

          <ProjectCard 
            title="PromoZon Ltd - Digital Ecosystem"
            category="Mobile App • Brand Ecosystem"
            description="An integrated digital marketing and e-commerce ecosystem allowing businesses to scale their presence through mobile-first interaction."
            stats={[
              { label: "Performance", value: "40%", icon: <Zap size={16} /> },
              { label: "User Growth", value: "3.5x", icon: <Users size={16} /> },
              { label: "Retain Rate", value: "85%", icon: <TrendingUp size={16} /> }
            ]}
            challenge="Disconnected user journeys across various brand touchpoints leading to high drop-off rates."
            solution="Implemented a unified Flutter mobile application with a seamless cross-platform bridging system."
            bgColor="bg-[#2D2D2D]"
            isReversed
          />

          <ProjectCard 
            title="Yathumure - Educational Platform"
            category="SaaS • EdTech"
            description="Transforming the educational landscape with a collaborative learning platform that connects mentors and students in a seamless digital environment."
            stats={[
              { label: "Active Mentors", value: "150+", icon: <Users size={16} /> },
              { label: "Lesson Uplifts", value: "60%", icon: <Zap size={16} /> },
              { label: "Satisfaction", value: "5.0/5", icon: <TrendingUp size={16} /> }
            ]}
            challenge="Lack of interactive tools for remote learning that could mimic real-world classroom engagement."
            solution="Built a real-time collaborative workspace with video integration and automated assessment tools."
            bgColor="bg-brand-primary"
          />
        </div>

        {/* View All Bar */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 rounded-full border-2 border-gray-100 text-brand-dark font-bold hover:bg-gray-50 transition-all flex items-center gap-3">
             Discover more projects <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
