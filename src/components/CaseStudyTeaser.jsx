import React from 'react'
import { motion } from 'framer-motion'

export default function CaseStudyTeaser() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/10" />
          <div className="relative aspect-[4/3] w-full rounded-lg bg-white/5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">Featured</span>
          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">Blizzard-calm experiences, Igloo-level polish</h3>
          <p className="mt-3 text-slate-300">
            A teaser for an end-to-end case study inspired by igloo.inc's crisp aesthetics: bold typography,
            cold gradients, and confident motion. See how a product story unfolds through 3D and performance.
          </p>
          <a href="#" className="mt-6 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
            View Case Study
          </a>
        </motion.div>
      </div>
    </section>
  )
}
