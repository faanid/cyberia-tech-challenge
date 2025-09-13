import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/portfolio/project-detail"
import { Footer } from "@/components/layout/footer"
import { getProjectById, projects } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found - Cyberia Architecture",
    }
  }

  return {
    title: `${project.title} - Cyberia Architecture`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <ProjectDetail project={project} />
      <Footer />
    </main>
  )
}
