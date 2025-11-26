export function Projects() {
  const projects = [
    {
      title: "Gov AI: Decentralized Polling System",
      description:
        "Built a cryptographically secure polling platform with Solana blockchain integration, supporting multi-wallet authentication (Phantom, Solflare, Backpack) and AI-powered fraud detection. Developed using React, TypeScript, Rust (Anchor framework), and Python FastAPI.",
      year: "2025",
      links: [
        { label: "GitHub", url: "https://github.com/satvikgarimella/GovAI" },
        { label: "Devpost", url: "https://devpost.com/software/gov-ai-decentralized-polling-system?ref_content=my-projects-tab&ref_feature=my_projects" },
        { label: " Demo", url: "https://www.youtube.com/watch?v=DJBun_o0wPo" },
        { label: "Twitter", url: "https://x.com/satvikgari/status/1993107140366721343?s=20" },
      ],
      tags: "Solana, React, Rust, AI, Web3",
    },
    {
      title: "CurServe",
      description:
        "Architected high-performance multi-tenant serving engine enabling 100+ concurrent AI coding agents with near-zero latency. Built Rust daemon with memory-mapped file system achieving 5-30x speedup over traditional shell-based search.",
      year: "2025",
      links: [
        { label: "GitHub", url: "https://github.com/alexkranias/curserve" },
        { label: "Devpost", url: "https://devpost.com/software/curserve?ref_content=my-projects-tab&ref_feature=my_projects" },
        { label: " Demo", url: "https://www.youtube.com/watch?v=30VpcKWD0MU" },
        { label: "Twitter", url: "https://x.com/satvikgari/status/1982835799063482520?s=20" },
      ],
      tags: "Rust, Python, IPC, vLLM",
    },
    {
      title: "Raspberry Pi Pokédex",
      description:
        "Constructed portable Pokédex device using Raspberry Pi 4 achieving real-time Gen 1 Pokémon recognition with 92.4% accuracy. Trained lightweight MobileNet CNN for edge inference and integrated LLM-powered backend.",
      year: "2025",
      links: [
        { label: "GitHub", url: "https://github.com/satvikgarimella/PikeDex" },
        { label: "Twitter", url: "https://x.com/satvikgari/status/1927111331166986477?s=20" },
      ],
      tags: "Python, OpenCV, PyTorch, React.js",
    },
    {
      title: "MoodMusic",
      description:
        "Developed full-stack music platform with Spotify API integration. Implemented emotion-based ML recommendation engine, increasing average user listening time by 18% through personalized content delivery.",
      year: "2024",
      links: [
        { label: "GitHub", url: "https://github.com/satvikgarimella/MM-Mood-Music" },
        { label: "Twitter", url: "https://x.com/satvikgari/status/1896976246204252360?s=20" },
      ],
      tags: "React.js, Node.js, Spotify API, ML",
    },
    {
      title: "Stock Forecaster",
      description:
        "Developed ML model using Python and LSTM algorithms that captures temporal stock patterns with 85% accuracy for predictive analysis.",
      year: "2024",
      links: [
        { label: "GitHub", url: "https://github.com/satvikgarimella/Stock-Forecaster" },
      ],
      tags: "Python, TensorFlow, LSTM, NLP",
    },
    {
      title: "F1 Race Predictor",
      description:
        "Created real-time F1 race winner prediction system using scikit-learn models trained on historical performance data. Built Flask backend with responsive Next.js frontend.",
      year: "2024",
      links: [
        { label: "GitHub", url: "https://github.com/satvikgarimella/f1-race-predictor" },
        { label: "Twitter", url: "https://x.com/satvikgari/status/1929020914995171605?s=20" },
      ],
      tags: "scikit-learn, Flask, Next.js",
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="block group">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{project.year}</span>
              </div>
              <p className="text-foreground/70 text-pretty leading-relaxed mb-2">{project.description}</p>
              <p className="text-sm text-muted-foreground mb-3">{project.tags}</p>
              <div className="flex gap-2">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
