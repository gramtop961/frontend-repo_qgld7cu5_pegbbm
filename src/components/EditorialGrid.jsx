import React from 'react';
import { Star, Shield, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Vision Pro: From Whisper to Witness',
    tag: 'Spectacle Original',
    icon: Star,
    tone: 'Anatomy of a reveal, from rumor cadence to keynote clarity.'
  },
  {
    title: 'A-Series Silicon, The Quiet Revolution',
    tag: 'Verified',
    icon: Shield,
    tone: 'Editorial rigor meets engineering poetry. What the leaks missed.'
  },
  {
    title: 'Interfaces of Intent',
    tag: 'Perspective',
    icon: Rocket,
    tone: 'Interaction as meaning: where motion, sound, and truth converge.'
  }
];

export default function EditorialGrid() {
  return (
    <section id="editorial" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/95">Curated Editorial</h2>
          <p className="mt-2 text-white/60 max-w-2xl">Rumors as revelation. Stories shaped with precision—never gamified, always earned.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-2 text-white">
                  <f.icon size={18} />
                </div>
                <span className="text-xs uppercase tracking-wider text-white/60">{f.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white/90 group-hover:text-white transition">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.tone}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
