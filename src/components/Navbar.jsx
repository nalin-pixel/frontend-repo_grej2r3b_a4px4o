import React from 'react'
import { Menu, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 mx-auto max-w-6xl px-6 py-4">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2">
        <a href="#" className="font-semibold text-white">YourName.dev</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white">
            <Linkedin size={18} />
          </a>
          <button className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white md:hidden" aria-label="menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
