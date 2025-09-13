import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Portfolio - Cyberia Architecture",
  description:
    "Explore our complete portfolio of architectural projects including residential, commercial, and public buildings.",
}

export default function PortfolioPage() {
  return (
    <main>
      <section className="py-24 bg-ring">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-balance">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our diverse range of architectural projects that showcase our expertise in creating innovative,
              sustainable, and beautiful spaces across various sectors.
            </p>
          </div>
        </div>
      </section>
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
