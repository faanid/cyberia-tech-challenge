import Link from "next/link"
import { Button } from "@/components/ui/display/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-card">
      <div className="text-center">
        <div className="text-8xl mb-8">🏗️</div>
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto text-pretty">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
