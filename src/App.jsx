import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkGrid from './components/WorkGrid'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkGrid />
        <footer id="contact" className="mx-auto max-w-6xl px-6 py-16 text-white/70">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">Let’s build something 3D and delightful</h3>
            <p className="mt-2 max-w-2xl">Open for freelance, collaborations, and full-time roles. Tell me about your idea or product.</p>
            <a
              href="mailto:hello@yourname.dev"
              className="mt-6 inline-block rounded-full bg-cyan-500 px-5 py-2 font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Email Me
            </a>
          </div>
          <p className="mt-8 text-sm">© {new Date().getFullYear()} YourName.dev · Crafted with React, Three.js, and Spline</p>
        </footer>
      </main>
    </div>
  )
}

export default App
