import { Card, CardContent } from "@/components/ui/layout/card"
import { Award, Users, Building, Leaf } from "lucide-react"

const stats = [
  {
    icon: Building,
    value: "150+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "25+",
    label: "Design Awards",
  },
  {
    icon: Leaf,
    value: "100%",
    label: "Sustainable Focus",
  },
]

export function About() {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 text-left items-center justify-center px-11 mx-3">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">Creating Spaces That Inspire and Endure</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              At Cyberia Architecture, we believe that great design has the power to transform lives and communities. Our
              team of passionate architects and designers work collaboratively to create innovative solutions that are
              both beautiful and functional.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              With over a decade of experience in residential, commercial, and public architecture, we bring expertise,
              creativity, and a commitment to sustainability to every project. Our approach combines cutting-edge
              technology with timeless design principles to deliver spaces that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
