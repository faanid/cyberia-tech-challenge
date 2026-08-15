import { Card, CardContent } from "@/components/ui/layout/card"
import { Avatar, AvatarFallback } from "@/components/ui/display/avatar"
import { Quote } from "lucide-react"
import { getTestimonials } from "@/lib/testimonials"

export function Testimonials() {
  const testimonials = getTestimonials()

  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from the clients who trusted us to bring their architectural vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 text-pretty">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
