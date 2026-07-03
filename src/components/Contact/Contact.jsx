import SectionWrapper from '../common/SectionWrapper'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'ojasvijaiswal13@gmail.com',
    href: 'mailto:ojasvijaiswal13@gmail.com',
    color: '#C17357',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Ojasvi1304',
    href: 'https://github.com/Ojasvi1304',
    color: '#83A2BD',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'ojasvi-jaiswal',
    href: 'https://www.linkedin.com/in/ojasvi-jaiswal',
    color: '#B5ACD4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    value: 'View Resume',
    href: 'https://docs.google.com/document/d/1tfTVTfvOaxZ4yWcuZ7UBYUOknUHSUzF_FaXZIfiNTvc/edit?usp=sharing',
    color: '#8AA393',
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
        <line x1="10" x2="8" y1="9" y2="9"/>
      </svg>
    ),
  },
]

const LOCATION_ITEM = {
  label: 'Location',
  value: 'Mumbai, India',
  color: '#C17357',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
}

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-teal/5 dark:bg-teal/8">
      <div className="text-center max-w-xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-4">
          Let&apos;s Connect
        </p>

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink dark:text-[#E8E3DB] mb-5">
          Get in Touch.
        </h2>

        <p className="text-lg text-ink-muted dark:text-[#9A958D] leading-relaxed">
          Based in Mumbai, India. Open to internships, collaborations, and new projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
          {CONTACT_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="flex items-center gap-3 p-4 bg-white dark:bg-[#242220] border border-border-warm dark:border-[#38352F] rounded-lg text-left hover:border-teal/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-ink-muted dark:text-[#9A958D]">{item.label}</p>
                <p className="text-sm font-medium text-ink dark:text-[#E8E3DB] truncate">{item.value}</p>
              </div>
            </a>
          ))}

          {/* Location — non-link, full width */}
          <div className="sm:col-span-2 flex items-center gap-3 p-4 bg-white dark:bg-[#242220] border border-border-warm dark:border-[#38352F] rounded-lg">
            <span style={{ color: LOCATION_ITEM.color }}>{LOCATION_ITEM.icon}</span>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-muted dark:text-[#9A958D]">{LOCATION_ITEM.label}</p>
              <p className="text-sm font-medium text-ink dark:text-[#E8E3DB]">{LOCATION_ITEM.value}</p>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
