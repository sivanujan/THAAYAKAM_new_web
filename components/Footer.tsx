"use client";

import * as React from "react";
import Link from "next/link";
import { Share2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <img 
                src="/logo.svg" 
                alt="THAAYAKAM Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Innovate. Embrace. Inspire. We are a premier digital solutions partner dedicated to transforming your vision into reality through technical excellence and creative design.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group">
                  <Share2 size={18} className="text-white group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {["Home", "Portfolio", "Services", "About Us", "Careers", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-gray-400 hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">Our Services</h4>
            <nav className="flex flex-col gap-4">
              {[
                "Web Application Development",
                "Mobile App Development",
                "Cloud Solutions & Consultation",
                "UI/UX Branding & Design",
                "Data Analytics",
                "Cyber Security"
              ].map((item) => (
                <Link key={item} href="#" className="text-gray-400 hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform"></span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold">Address</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><MapPin size={20} /></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  THAAYAKAM LTD,<br />
                  London, United Kingdom
                </p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><Phone size={20} /></div>
                <p className="text-gray-400 text-sm leading-relaxed">+44 7721 578028</p>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-brand-primary"><Mail size={20} /></div>
                <p className="text-gray-400 text-sm leading-relaxed">hello@thaayakam.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs font-medium">
          <p>© {currentYear} THAAYAKAM LTD. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
