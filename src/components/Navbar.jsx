import React from 'react';
import { Rocket, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-[#0b0e12]/60 bg-[#0b0e12]/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 ring-1 ring-emerald-400/30">
            <Rocket className="h-5 w-5 text-emerald-300" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Pulse Grid</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#articles" className="hover:text-white transition-colors">Articles</a>
          <a href="#insights" className="hover:text-white transition-colors">Insights</a>
          <a href="#guides" className="hover:text-white transition-colors">Guides</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            <Search className="h-4 w-4 text-white/70" />
            <span className="text-sm text-white/80">Search</span>
          </button>
          <button className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
