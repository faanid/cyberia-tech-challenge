import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { About } from "@/components/home/about"
import { Testimonials } from "@/components/home/testimonials"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Testimonials />
      <Footer />
    </main>
  )
}
