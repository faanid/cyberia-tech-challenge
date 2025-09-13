"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/display/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects"

export function Hero() {
  const featuredProjects = getFeaturedProjects()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredProjects.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  if (featuredProjects.length === 0) return null

  const currentProject = featuredProjects[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={currentProject.images[0] || "/placeholder.svg"}
          alt={currentProject.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-tight text-balance mb-6 px-8">
              Designing Tomorrow's Architecture Today
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty px-8">
              We create innovative, sustainable architectural solutions that transform spaces and inspire communities.
              From residential homes to commercial complexes, our designs blend functionality with aesthetic excellence.
            </p>
            <div className="flex gap-4 px-8">
              <Button size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project info overlay */}
      <div className="absolute bottom-20 left-8 z-20 text-white max-w-md">
        <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
        <p className="text-white/90 mb-4">{currentProject.shortDescription}</p>
        <div className="flex gap-4 text-sm text-white/80">
          <span>{currentProject.category}</span>
          <span>•</span>
          <span>{currentProject.year}</span>
          <span>•</span>
          <span>{currentProject.location}</span>
        </div>
      </div>
    </section>
  )
}
