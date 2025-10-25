import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0b0e12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Pulse Grid</div>
            <p className="mt-1 text-sm text-white/60 max-w-md">A premium blog exploring the intersection of technology, design, and strategy.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
              <Twitter className="h-5 w-5 text-white/80" />
            </a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
              <Github className="h-5 w-5 text-white/80" />
            </a>
            <a href="#" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
              <Mail className="h-5 w-5 text-white/80" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Pulse Grid. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
