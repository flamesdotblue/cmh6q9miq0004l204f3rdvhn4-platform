import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e12]/20 via-[#0b0e12]/60 to-[#0b0e12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(16,185,129,0.25),transparent)]" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-xs mb-5">
              <Star className="h-3.5 w-3.5" />
              <span>Modern Tech • Design • Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              A premium blog for future-first builders
            </h1>
            <p className="mt-5 text-white/80 text-base sm:text-lg max-w-xl">
              Deep dives on product, engineering, and design. Curated insights and frameworks to help you craft remarkable experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#articles" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 text-black px-4 py-2.5 font-medium hover:bg-emerald-300 transition-colors">
                Explore Articles
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#subscribe" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white/90 hover:bg-white/10 transition-colors">
                Subscribe Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
