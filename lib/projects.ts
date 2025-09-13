export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  category: string
  year: string
  location: string
  area: string
  images: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa Residence",
    shortDescription: "Contemporary family home with sustainable design",
    description:
      "A stunning contemporary villa that seamlessly blends modern architecture with sustainable living. This 4,500 sq ft residence features floor-to-ceiling windows, an open-plan living space, and innovative green technologies including solar panels and rainwater harvesting systems.",
    category: "Residential",
    year: "2023",
    location: "Beverly Hills, CA",
    area: "4,500 sq ft",
    images: [
      "/modern-villa-exterior-with-glass-walls.jpg",
      "/modern-villa-living-room.png",
      "/modern-villa-kitchen-design.jpg",
      "/modern-villa-bedroom-with-city-view.jpg",
    ],
    featured: true,
  },
  {
    id: "urban-office",
    title: "Urban Office Complex",
    shortDescription: "Innovative workspace design for modern businesses",
    description:
      "A cutting-edge office complex designed to foster creativity and collaboration. The 15-story building features flexible workspaces, rooftop gardens, and state-of-the-art technology infrastructure. The design emphasizes natural light and sustainable materials throughout.",
    category: "Commercial",
    year: "2023",
    location: "Downtown LA",
    area: "125,000 sq ft",
    images: [
      "/modern-office-building-exterior-glass-facade.jpg",
      "/modern-office-interior-open-workspace.jpg",
      "/office-building-rooftop-garden.jpg",
      "/modern-office-lobby-design.jpg",
    ],
    featured: true,
  },
  {
    id: "cultural-center",
    title: "Community Cultural Center",
    shortDescription: "Public space celebrating arts and community",
    description:
      "A vibrant cultural center that serves as a hub for community activities and artistic expression. The design incorporates local materials and traditional architectural elements while providing modern amenities including galleries, performance spaces, and educational facilities.",
    category: "Public",
    year: "2022",
    location: "Santa Monica, CA",
    area: "35,000 sq ft",
    images: [
      "/cultural-center-exterior-modern-architecture.jpg",
      "/cultural-center-interior-gallery-space.jpg",
      "/cultural-center-performance-hall.jpg",
      "/cultural-center-community-space.jpg",
    ],
    featured: true,
  },
  {
    id: "eco-apartment",
    title: "Eco-Friendly Apartments",
    shortDescription: "Sustainable living in the heart of the city",
    description:
      "An innovative apartment complex that prioritizes environmental sustainability without compromising on luxury. Features include green roofs, energy-efficient systems, and communal spaces that encourage community interaction.",
    category: "Residential",
    year: "2022",
    location: "West Hollywood, CA",
    area: "85,000 sq ft",
    images: [
      "/eco-apartment-building-with-green-roof.jpg",
      "/eco-apartment-interior-sustainable-design.jpg",
      "/apartment-building-communal-garden.jpg",
      "/eco-apartment-balcony-with-plants.jpg",
    ],
    featured: false,
  },
  {
    id: "retail-plaza",
    title: "Luxury Retail Plaza",
    shortDescription: "Premium shopping destination with modern aesthetics",
    description:
      "A sophisticated retail plaza that redefines the shopping experience. The design features flowing spaces, natural materials, and innovative lighting that creates an inviting atmosphere for both shoppers and retailers.",
    category: "Commercial",
    year: "2021",
    location: "Rodeo Drive, CA",
    area: "75,000 sq ft",
    images: [
      "/luxury-retail-plaza-exterior-modern-design.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: false,
  },
  {
    id: "school-campus",
    title: "Innovation School Campus",
    shortDescription: "Educational facility designed for future learning",
    description:
      "A forward-thinking educational campus that supports innovative teaching methods and collaborative learning. The design includes flexible classrooms, maker spaces, and outdoor learning areas that adapt to various educational needs.",
    category: "Educational",
    year: "2021",
    location: "Pasadena, CA",
    area: "150,000 sq ft",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: false,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category?: string): Project[] {
  if (!category) return projects
  return projects.filter((project) => project.category === category)
}
