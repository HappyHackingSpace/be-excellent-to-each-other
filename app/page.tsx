"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  opacity: number
}

export default function PosterPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 5906
    const height = 8268
    canvas.width = width
    canvas.height = height

    // Create particles
    const particles: Particle[] = []
    const colors = ["#ffffff", "#ef4444", "#3b82f6"]

    for (let i = 0; i < 600; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 24 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.4,
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-black flex items-center justify-center p-8">
      <div className="relative w-full max-w-[50cm] aspect-[5/7] bg-black overflow-hidden">
        {/* Canvas for particles */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-16 lg:p-24">
          <div className="space-y-2">
            <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter leading-none">
              HAPPY
              <br />
              HACKING
              <br />
              SPACE
            </div>
            <div className="text-blue-400 font-mono text-xs md:text-sm tracking-wider">
              {">"} COMMUNITY_GUIDELINES.TXT
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8 md:space-y-12">
            <div className="text-white/40 font-mono text-sm md:text-base lg:text-lg tracking-widest">— RULE #1 —</div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white text-center leading-[0.95] text-balance font-bold">
              be
              <br />
              excellent
              <br />
              to
              <br />
              each other
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end text-white/40 text-xs md:text-sm font-mono">
              <div className="space-y-1">
                <div>EST. 2022</div>
                <div className="text-white/60">A COMMUNITY SPACE FOR</div>
                <div className="text-white/80">HACKERS • CRAFTERS • EXPLORERS</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-red-400">v1.0.0</div>
                <div className="text-blue-400">PRINT_READY</div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="text-center text-white/30 font-mono text-xs tracking-wider">HAPPYHACKING.SPACE</div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 16 + 6}px`,
                height: `${Math.random() * 16 + 6}px`,
                backgroundColor: ["#ffffff", "#ef4444", "#3b82f6"][Math.floor(Math.random() * 3)],
                opacity: Math.random() * 0.6 + 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
