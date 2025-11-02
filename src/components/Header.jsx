import React from 'react';
import { Sparkles, Shield, PenTool } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/70 to-white/10 border border-white/20 shadow-sm" />
            <span className="font-semibold tracking-tight text-white/90">Spectacle</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white transition" href="#editorial">Editorial</a>
            <a className="hover:text-white transition" href="#contributors">Contributors</a>
            <a className="hover:text-white transition flex items-center gap-1" href="#originals">
              <Sparkles size={16} /> Originals
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
              <Shield size={16} /> Verified
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
              <PenTool size={16} /> Submit Pitch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
