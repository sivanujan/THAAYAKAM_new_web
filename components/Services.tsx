"use client";

import * as React from "react";
import { Cloud, Layout, Smartphone, Palette, Search, PenTool, Code, Send, ShieldCheck, Heart, Clock, Zap } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <div className={`bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-default h-full flex flex-col items-start gap-6 hover:-translate-y-2`}>
    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <div className="space-y-3">
      <h4 className="text-2xl font-bold text-brand-dark">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center gap-6 relative px-4">
    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-black text-xl shadow-lg relative z-10">
      {number}
    </div>
    <div className="space-y-2">
      <h5 className="font-bold text-lg text-brand-dark">{title}</h5>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export function Services() {
  return (
    <section id="services" className="w-full bg-[#fcfdfe] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-brand-primary font-bold tracking-[0.3em] text-sm uppercase">What we do!</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight">Services.</h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          <ServiceCard 
            icon={<Layout size={32} />}
            title="Web Development"
            description="Scalable, lightning-fast web applications built with Next.js and React, optimized for maximum performance and user engagement."
          />
          <ServiceCard 
            icon={<Smartphone size={32} />}
            title="Mobile Application"
            description="Native and cross-platform mobile solutions using Flutter and React Native that deliver seamless experiences across iOS and Android."
          />
          <ServiceCard 
            icon={<Cloud size={32} />}
            title="Cloud Consultation"
            description="Strategic cloud architecture and migration services on AWS and Azure, ensuring high availability and cost-efficiency for your infrastructure."
          />
          <ServiceCard 
            icon={<Palette size={32} />}
            title="Brand Design"
            description="Crafting unique visual identities and meticulous UI/UX designs that elevate your brand and resonate with your target audience."
          />
        </div>

        {/* How we do it / Timeline */}
        <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden mb-32">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center gap-16">
            <div className="text-center space-y-4">
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase">Our Process</span>
              <h3 className="text-4xl md:text-5xl font-bold">How we do!</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative w-full">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-brand-primary/30"></div>
              
              <Step 
                number="01" 
                title="Research" 
                description="We dive deep into your requirements and audience to gather critical insights." 
              />
              <Step 
                number="02" 
                title="Design" 
                description="Our experts craft meticulous UI/UX mockups that define the visual journey." 
              />
              <Step 
                number="03" 
                title="Build" 
                description="We develop robust, scalable solutions using state-of-the-art tech stacks." 
              />
              <Step 
                number="04" 
                title="Deliver" 
                description="A polished product is deployed and monitored for peak performance." 
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-brand-primary font-bold tracking-[0.2em] text-sm uppercase">Why Choose Us?</h2>
              <h3 className="text-4xl font-bold text-brand-dark">Our technical excellence is your business advantage.</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><ShieldCheck size={28} /></div>
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-dark">Security First</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Enterprise-grade security protocols implemented at every layer of your application.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><Zap size={28} /></div>
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-dark">Rapid Delivery</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Agile development cycles that get your product to market faster without compromising quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><Heart size={28} /></div>
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-dark">Client Centric</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Long-term partnerships built on transparency, trust, and shared success.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><Clock size={28} /></div>
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-dark">24/7 Support</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Meticulous technical support and maintenance even after project completion.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative USP Visual */}
          <div className="relative">
            <div className="aspect-square bg-brand-primary/5 rounded-[4rem] flex items-center justify-center relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
               
               {/* Center Badge */}
               <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-50 flex flex-col items-center gap-6">
                 <div className="w-24 h-24 rounded-full border-[10px] border-brand-primary border-t-transparent animate-[spin_3s_linear_infinite] flex items-center justify-center p-2">
                   <div className="w-full h-full rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Zap size={32} />
                   </div>
                 </div>
                 <div className="text-center">
                    <div className="text-2xl font-black text-brand-dark">100%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Satisfaction</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
