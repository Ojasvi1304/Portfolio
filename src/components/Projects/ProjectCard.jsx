import Badge from '../common/Badge'
import Button from '../common/Button'

export default function ProjectCard({ title, description, techStack, liveUrl, repoUrl, imageUrl, accentColor = '#4D8382' }) {
  const initial = title?.charAt(0)?.toUpperCase() ?? '?'

  return (
    <div className="rounded-xl border border-border-warm dark:border-[#38352F] bg-white dark:bg-[#242220] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md hover:border-teal/20 transition-all duration-300">
      {/* Colored top border */}
      <div className="h-1 shrink-0" style={{ background: accentColor }} />

      {/* Image / placeholder */}
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-36 object-cover" />
      ) : (
        <div
          className="w-full h-36 flex items-center justify-center"
          style={{ background: accentColor + '20' }}
        >
          <span
            className="text-6xl font-bold select-none"
            style={{ color: accentColor + '40' }}
          >
            {initial}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-ink dark:text-[#E8E3DB] mb-2">{title}</h3>
        <p className="text-sm text-ink-muted dark:text-[#9A958D] leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 my-3">
          {techStack.map(tech => <Badge key={tech} label={tech} />)}
        </div>
        {(liveUrl || repoUrl) && (
          <div className="flex gap-3">
            {liveUrl && <Button href={liveUrl} variant="primary">Live Demo</Button>}
            {repoUrl && <Button href={repoUrl} variant="secondary">GitHub</Button>}
          </div>
        )}
      </div>
    </div>
  )
}
