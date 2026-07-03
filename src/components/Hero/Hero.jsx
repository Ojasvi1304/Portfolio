import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-cream dark:bg-[#1C1A17]">
      <div className="flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Overline label */}
        <p
          className="animate-fade-up text-xs uppercase tracking-[0.18em] text-teal font-semibold mb-6"
          style={{ animationDelay: '0ms' }}
        >
          Full Stack Developer
        </p>

        {/* Name */}
        <h1
          className="animate-fade-up text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink dark:text-[#E8E3DB] mb-5 leading-tight"
          style={{ animationDelay: '100ms' }}
        >
          Your Name
        </h1>

        {/* Role subtitle */}
        <p
          className="animate-fade-up text-lg md:text-xl text-ink-muted dark:text-[#9A958D] mb-10 max-w-xl leading-relaxed"
          style={{ animationDelay: '200ms' }}
        >
          Building elegant digital experiences with clean code and thoughtful design.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap gap-3 justify-center mb-12"
          style={{ animationDelay: '300ms' }}
        >
          <Button href="#projects">View Projects</Button>
          <Button variant="secondary" href="#contact">Contact Me</Button>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-up flex items-center gap-5"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted/60 dark:text-[#9A958D]/60 hover:text-teal transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted/60 dark:text-[#9A958D]/60 hover:text-teal transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <span className="w-px h-4 bg-border-warm dark:bg-[#38352F]" aria-hidden="true" />
          <span className="text-xs text-ink-muted/60 dark:text-[#9A958D]/60 font-medium tracking-wide">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Scroll chevron */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-ink-muted/40 dark:text-[#9A958D]/40"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </section>
  )
}
