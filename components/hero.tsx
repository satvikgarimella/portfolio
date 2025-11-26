export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-3xl w-full">
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-foreground/10">
            <img src="/profile-photo.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-balance">Hi, I'm Satvik Garimella</h1>

        <div className="space-y-2.5 sm:space-y-3 text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
          <p className="text-pretty">
            I'm a third-year Computer Science student at Western Ontario focused on reinforcement learning, machine learning, autonomous
            systems, and computer vision.
          </p>

          <p className="text-pretty">
            I work primarily with Python, Java, JavaScript, C, React, and various ML frameworks. Currently trying to learn parallel computing and GPU architecture.
          </p>

          <p className="text-pretty">
            Outside of tech, I'm passionate about sports—big fan of the Raptors, Arsenal, Detroit Lions, and F1. I'm also really into One Piece (no, I'm not caught up yet, but I'm getting there). I love yapping about pretty much anything, so feel free to DM me anytime to chat!
          </p>

          <p className="text-pretty">
            You can reach out to me at{" "}
            <a href="mailto:sg8gar@gmail.com" className="text-primary hover:underline">
              sg8gar@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:647-804-4968" className="text-primary hover:underline">
              647-804-4968
            </a>
            .
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-4 sm:mt-6 text-sm">
          <a
            href="https://github.com/satvikgarimella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/satvik-garimella-100049201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:sg8gar@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
