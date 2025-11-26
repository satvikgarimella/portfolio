export function Work() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Leading frontend development initiatives and mentoring junior developers in modern web technologies.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: "Built and maintained multiple client-facing applications using React, Node.js, and PostgreSQL.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Contributed to web development projects and learned best practices in software engineering.",
    },
  ]

  return (
    <section id="work" className="min-h-screen px-6 py-20">
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-foreground/70 text-pretty leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
