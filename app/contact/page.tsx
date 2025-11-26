import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-12">Contact</h1>
          <Contact />
        </div>
      </main>
    </>
  )
}
