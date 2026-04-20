"use client";

import * as React from "react";
import { ArrowRight, Download, Mail, Plus, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";

/**
 * Demo page showcasing the THAAYAKAM Button component system.
 * Demonstrates all variants, states, and responsive behavior.
 */
export default function ButtonsDemoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 md:p-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-brand-primary">
            THAAYAKAM Component System
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A production-grade, flexible button system built with Next.js, Tailwind CSS, 
            and Lucide icons. Designed for performance, accessibility, and brand consistency.
          </p>
        </section>

        {/* 1. Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-slate-200 pb-2">
            Button Variants
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Button-General (Solid)
              </h3>
              <ButtonGroup gap="md">
                <Button variant="button-general">Primary Action</Button>
                <Button variant="button-general" icon={<Send size={18} />}>
                  Send Message
                </Button>
              </ButtonGroup>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Button-Ghost (Outlined)
              </h3>
              <ButtonGroup gap="md">
                <Button variant="button-ghost">Secondary</Button>
                <Button variant="button-ghost" icon={<Download size={18} />}>
                  Download
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* 2. States */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-slate-200 pb-2">
            Interactive States
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Loading State
              </h3>
              <ButtonGroup gap="md">
                <Button variant="button-general" isLoading>
                  Processing
                </Button>
                <Button variant="button-ghost" isLoading>
                  Authenticating
                </Button>
              </ButtonGroup>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Disabled State
              </h3>
              <ButtonGroup gap="md">
                <Button variant="button-general" disabled>
                  Unavailable
                </Button>
                <Button variant="button-ghost" disabled>
                  Restricted
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>

        {/* 3. Icons & Sizes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-slate-200 pb-2">
            Icons & Composition
          </h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Icon Alignment (25px gap)
              </h3>
              <ButtonGroup gap="lg">
                <Button variant="button-general" icon={<Plus size={20} />}>
                  Create New
                </Button>
                <Button variant="button-ghost" icon={<Trash2 size={20} className="text-red-500" />}>
                  Delete Item
                </Button>
                <Button variant="button-general" icon={<Mail size={20} />}>
                  Contact Us
                </Button>
              </ButtonGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Responsive "Full Width" Button
              </h3>
              <div className="max-w-md">
                <Button variant="button-general" size="full" icon={<ArrowRight size={20} />}>
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Accessibility & Transitions */}
        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Design Features</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-600 text-sm">
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              Responsive 160x44px default dimensions with flex mapping.
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              200ms smooth transitions for background, border, and shadows.
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              Built-in keyboard navigation support and focus ring styles.
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              Custom 25px visual gap between icons and label.
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              Tailwind v4 native architecture for maximum performance.
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">✔</span>
              Standard light mode interface for brand consistency.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

