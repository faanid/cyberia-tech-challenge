"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/layout/card"
import { Button } from "@/components/ui/display/button"
import { Badge } from "@/components/ui/display/badge"
import { ArrowRight, Filter } from "lucide-react"
import { projects, getProjectsByCategory } from "@/lib/projects"

const categories = ["All", "Residential", "Commercial", "Public", "Educational"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProjects = selectedCategory === "All" ? projects : getProjectsByCategory(selectedCategory)

  return (
    <section className="py-16">
      <div className="container">
        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-center mx-4">All Projects</h2>
            <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
            <div className="flex flex-wrap gap-2 mx-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category)
                    setIsFilterOpen(false)
                  }}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground mx-4">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-9">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 text-card-foreground bg-amber-50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">Featured</Badge>
                )}

                {/* Hover overlay with project info */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm line-clamp-3 text-pretty">
                  {project.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <div>{project.location}</div>
                    <div className="font-medium">{project.area}</div>
                  </div>

                  <Button variant="ghost" size="sm" asChild className="group/btn">
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              We don't have any projects in the {selectedCategory} category yet.
            </p>
            <Button onClick={() => setSelectedCategory("All")}>View All Projects</Button>
          </div>
        )}

        {/* Call to Action */}
        {filteredProjects.length > 0 && (
          <div className="text-center p-8 rounded-lg mt-16 ml-16 bg-ring">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Let's discuss how we can bring your architectural vision to life. Our team is ready to create something
              extraordinary together.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+15551234567">Call Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
