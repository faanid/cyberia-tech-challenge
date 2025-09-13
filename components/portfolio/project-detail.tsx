"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/display/button"
import { Card, CardContent } from "@/components/ui/layout/card"
import { Badge } from "@/components/ui/display/badge"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Ruler, Building } from "lucide-react"
import type { Project } from "@/lib/projects"
import { projects } from "@/lib/projects"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  // Get related projects (same category, excluding current project)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Navigation */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Project Title Overlay */}
        <div className="absolute bottom-8 left-8 z-20 text-white max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-secondary text-secondary-foreground">{project.category}</Badge>
            {project.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-xl text-white/90 text-pretty">{project.shortDescription}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
              </div>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Category</div>
                        <div className="text-muted-foreground">{project.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Year</div>
                        <div className="text-muted-foreground">{project.year}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Area</div>
                        <div className="text-muted-foreground">{project.area}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                  <p className="mb-6 text-primary-foreground/90 text-pretty">
                    Let's discuss how we can bring your architectural vision to life with the same level of excellence.
                  </p>
                  <Button size="lg" variant="secondary" asChild className="w-full">
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
              <p className="text-muted-foreground text-pretty">
                Explore more projects in the {project.category} category
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProject.images[0] || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{relatedProject.category}</span>
                      <span>•</span>
                      <span>{relatedProject.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{relatedProject.shortDescription}</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/projects/${relatedProject.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
