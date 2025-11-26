"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-medium hover:text-muted-foreground transition-colors">
          Satvik Garimella
        </Link>

        <div className="flex gap-8">
          <Link
            href="/"
            className={`text-sm hover:text-foreground transition-colors ${
              pathname === "/" ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`text-sm hover:text-foreground transition-colors ${
              pathname === "/work" ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            Work
          </Link>
          <Link
            href="/projects"
            className={`text-sm hover:text-foreground transition-colors ${
              pathname === "/projects" ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-sm hover:text-foreground transition-colors ${
              pathname === "/contact" ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
