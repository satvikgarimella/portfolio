import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  )
}
