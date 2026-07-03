export default function SectionTitle({ title, subtitle, overline }) {
  return (
    <div className="mb-12 text-center">
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-3">
          {overline}
        </p>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-ink dark:text-[#E8E3DB]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-ink-muted dark:text-[#9A958D] max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-8 h-px bg-teal opacity-50 mx-auto mt-5" />
    </div>
  )
}
