import React from 'react'

export default function Marquee({ text = "Design • 3D • Strategy • WebGL • Motion • Brand •", speed = 30 }) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-3 text-white/80">
      <div
        className="flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <p className="mx-6 text-sm md:text-base">{text}</p>
        <p className="mx-6 text-sm md:text-base" aria-hidden>
          {text}
        </p>
        <p className="mx-6 text-sm md:text-base" aria-hidden>
          {text}
        </p>
        <p className="mx-6 text-sm md:text-base" aria-hidden>
          {text}
        </p>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
