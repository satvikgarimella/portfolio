import { Navigation } from "@/components/navigation"

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h1>

          <div className="space-y-16">
            <div className="border-l-2 border-foreground/20 pl-8">
              <div className="mb-3">
                <h3 className="text-2xl font-semibold">AI Developer</h3>
                <p className="text-lg text-muted-foreground mt-1">Western AI</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Sept. 2025 - Present</p>
              <ul className="text-foreground/80 leading-relaxed space-y-2">
                <li>
                  • Architected and deployed production-ready driver distraction monitoring system using advanced computer vision 
                  and deep learning techniques, implementing facial landmark detection with Mediapipe and OpenCV to analyze 
                  drowsiness patterns, eye-aspect ratios, and head pose estimation for real-time distraction detection with 94% accuracy
                </li>
                <li>
                  • Engineered custom YOLOv8 transfer learning pipeline for multi-class distracted behavior classification 
                  (phone usage, eating, fatigue), fine-tuning on 15K+ annotated frames and optimizing model inference to achieve 
                  sub-50ms latency on edge devices using PyTorch framework and ONNX runtime acceleration
                </li>
                <li>
                  • Built production-grade modular alert system with Streamlit UI for live feedback visualization, implementing 
                  multi-threaded processing architecture with concurrent frame capture and model inference pipelines to maintain 
                  consistent 20+ FPS performance while reducing system resource utilization by 35%
                </li>
                <li>
                  • Integrated SQLite database for logging distraction events and generating analytics reports, enabling 
                  fleet managers to identify high-risk driving patterns and improve driver safety training programs through 
                  data-driven insights
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-8">
              <div className="mb-3">
                <h3 className="text-2xl font-semibold">Software Engineer Intern</h3>
                <p className="text-lg text-muted-foreground mt-1">Utechia Inc.</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">March 2025 - June 2025</p>
              <ul className="text-foreground/80 leading-relaxed space-y-2">
                <li>
                  • Developed and shipped 15+ production-ready interactive UI components using React Native, TypeScript, and 
                  Next.js with server-side rendering, implementing responsive design patterns and accessibility standards (WCAG 2.1) 
                  that achieved 25% improvement in user engagement metrics and 18% reduction in bounce rate across mobile platforms
                </li>
                <li>
                  • Engineered sophisticated 3D visualization system for real-time in-app advertisement previews using Three.js, 
                  WebGL shaders, and optimized Blender assets, implementing dynamic camera controls and lighting systems that 
                  reduced user preview setup time by 40% and increased ad conversion rates by 22%
                </li>
                <li>
                  • Architected comprehensive testing infrastructure using Jest, React Testing Library, and Cypress for E2E testing, 
                  writing 60+ unit tests, 25+ integration tests, and 12 end-to-end test suites that increased code coverage from 
                  52% to 80% and reduced production bugs by 35%
                </li>
                <li>
                  • Collaborated with cross-functional teams in Agile sprints to deliver features 15% ahead of schedule, participating 
                  in code reviews, daily standups, and sprint planning sessions while mentoring 2 junior developers on React best practices
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-8">
              <div className="mb-3">
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-lg text-muted-foreground mt-1">Saidham Food Bank</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">May 2024 - Aug. 2024</p>
              <ul className="text-foreground/80 leading-relaxed space-y-2">
                <li>
                  • Architected and deployed full-stack analytics platform featuring real-time dashboards with interactive 
                  data visualizations using React, Chart.js, and D3.js to display campaign performance metrics including 
                  donation trends, volunteer engagement, and community impact statistics, improving stakeholder decision-making 
                  efficiency by 30% and enabling data-driven resource allocation
                </li>
                <li>
                  • Engineered intuitive campaign management system using React, Next.js 14 with App Router, Tailwind CSS, 
                  and PostgreSQL backend, implementing role-based access control (RBAC), automated email notifications via 
                  SendGrid, and drag-and-drop campaign scheduling that increased deployment efficiency by 45% and reduced 
                  administrative overhead by 60 hours per month
                </li>
                <li>
                  • Developed RESTful API using Node.js and Express.js with JWT authentication, implementing rate limiting, 
                  input validation, and comprehensive error handling that processes 500+ daily requests with 99.8% uptime
                </li>
                <li>
                  • Optimized database queries and implemented Redis caching layer, reducing average API response time from 
                  850ms to 120ms (85% improvement) and improving overall application performance for 200+ daily active users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
