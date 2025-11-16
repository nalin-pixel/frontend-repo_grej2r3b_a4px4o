import React from 'react'
import ParallaxSection from './ParallaxSection'

export default function About() {
  return (
    <ParallaxSection speed={0.25} className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>
        <p className="max-w-3xl text-slate-300 md:text-lg">
          I blend design, code, and storytelling to craft memorable digital experiences. My toolkit spans
          WebGL/Three.js, React, Next.js, and creative coding techniques. I care about performance,
          accessibility, and beautiful interactions.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {['3D Experiences', 'Animation & Motion', 'UI Engineering'].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-slate-300">
                Explorations, case studies, and code experiments that push the web forward.
              </p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
