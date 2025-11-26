import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-12">Projects</h1>
          <Projects />
        </div>
      </main>
    </>
  )
}
