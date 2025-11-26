export function Contact() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          I'm always interested in discussing new opportunities, collaborations, or just having a chat about AI,
          computer vision, and software engineering. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:sg8gar@gmail.com"
            className="px-8 py-3 rounded-full bg-[#4B5563] hover:bg-[#374151] text-white font-medium transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/satvik-garimella-100049201"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#6B7280] hover:bg-[#4B5563] text-white font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/satvikgarimella"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#374151] hover:bg-[#1F2937] text-white font-medium transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="text-sm text-foreground/60 space-y-1">
          <p>sg8gar@gmail.com</p>
          <p>647-804-4968</p>
        </div>
      </div>
    </section>
  )
}
