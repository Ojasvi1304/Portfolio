import SectionWrapper from '../common/SectionWrapper'
import { about } from '../../data/about'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-start">

        {/* Left: editorial intro */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-3">
            Get to Know Me
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-ink dark:text-[#E8E3DB]">
            About Me
          </h2>
          <div className="w-8 h-px bg-teal opacity-50 mt-4 mb-6" />
          <div className="space-y-3">
            {about.bio.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-muted dark:text-[#9A958D]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right: 2×2 stat grid */}
        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="bg-white dark:bg-[#242220] border border-border-warm dark:border-[#38352F] rounded-lg p-5"
            >
              <p className="text-3xl font-bold text-ink dark:text-[#E8E3DB] leading-none">
                {value}
                {suffix && (
                  <span className="text-base font-normal text-ink-muted dark:text-[#9A958D] ml-1">
                    {suffix}
                  </span>
                )}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-ink-muted dark:text-[#9A958D] mt-2">
                {label}
              </p>
              <div className="w-8 h-px bg-teal opacity-40 mt-3" />
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
