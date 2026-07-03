export default function EducationCard({ institution, degree, field, startYear, endYear, description }) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-border-warm dark:border-[#38352F] bg-[#F4F2EE] dark:bg-[#242220] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-teal" />
      </div>

      {/* Card */}
      <div className="bg-white dark:bg-[#1C1A17] border border-border-warm dark:border-[#38352F] rounded-lg p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-ink dark:text-[#E8E3DB]">{institution}</h3>
            <p className="text-sm text-ink-muted dark:text-[#9A958D] mt-0.5">
              {degree} &middot; {field}
            </p>
          </div>
          <span className="text-xs text-ink-muted/70 dark:text-[#9A958D]/70 tabular-nums shrink-0">
            {startYear} – {endYear}
          </span>
        </div>
        {description && (
          <p className="text-sm text-ink-muted dark:text-[#9A958D] mt-3 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
