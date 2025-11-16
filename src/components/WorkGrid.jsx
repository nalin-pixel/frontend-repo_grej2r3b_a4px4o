import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Immersive 3D Product Tour',
    tags: ['Three.js', 'Spline', 'React'],
    color: 'from-fuchsia-500 to-cyan-400',
  },
  {
    title: 'Realtime Dashboard',
    tags: ['WebSockets', 'Next.js'],
    color: 'from-cyan-500 to-emerald-400',
  },
  {
    title: 'E-commerce Motion UX',
    tags: ['Framer Motion', 'Tailwind'],
    color: 'from-amber-500 to-rose-500',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
