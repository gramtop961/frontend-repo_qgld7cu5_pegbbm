import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContributorInvite() {
  return (
    <section id="contributors" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/95">Invitation Only</h3>
              <p className="mt-3 text-white/70">Contributors are selected through a quiet, rigorous vetting process. Acceptance is a mark of creative distinction—subtle, powerful, and earned.</p>
              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-center gap-2"><CheckCircle className="text-white/80" size={18} /> Editorial integrity, not virality</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-white/80" size={18} /> Recognition through presence, not points</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-white/80" size={18} /> Originals labeled with luminous distinction</li>
              </ul>
            </div>
            <div className="shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Request an Invitation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
