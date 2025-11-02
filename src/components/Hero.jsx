import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black" aria-label="Spectacle hero">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interaction with the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Foreground copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white/95"
          >
            See clearly.
            <span className="block text-white/70">Believe in the reveal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/70"
          >
            A living editorial performance where rumors meet reverence. Crafted narratives, immersive motion, and quiet prestige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#editorial"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
            >
              Enter the Narrative
            </a>
            <a
              href="#contributors"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 hover:bg-white/10 transition"
            >
              For Contributors
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
