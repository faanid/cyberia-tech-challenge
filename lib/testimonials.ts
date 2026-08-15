export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Homeowner, Modern Villa Residence",
    quote:
      "The team transformed our vision into a home that exceeds everything we imagined. Their attention to sustainable design and detail was outstanding from start to finish.",
    initials: "SC",
  },
  {
    id: "james-whitfield",
    name: "James Whitfield",
    role: "CEO, Whitfield Holdings",
    quote:
      "Working with Cyberia Architecture on our office complex was seamless. They balanced our budget and timeline while delivering a design our employees genuinely love.",
    initials: "JW",
  },
  {
    id: "maria-alvarez",
    name: "Maria Alvarez",
    role: "Director, Santa Monica Cultural Center",
    quote:
      "They understood our community's needs and created a space that truly brings people together. Professional, creative, and a pleasure to collaborate with.",
    initials: "MA",
  },
]

export function getTestimonials(): Testimonial[] {
  return testimonials
}
