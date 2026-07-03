import Badge from '../common/Badge'
import Button from '../common/Button'

function ImagePlaceholder({ title, className = '' }) {
  const initial = title?.charAt(0)?.toUpperCase() ?? '?'
  return (
    <div className={`bg-[#F4F2EE] dark:bg-[#2A2825] flex items-center justify-center shrink-0 ${className}`}>
      <span className="text-6xl font-bold text-ink/10 dark:text-[#E8E3DB]/8 select-none">
        {initial}
      </span>
    </div>
  )
}

export default function ProjectCard({ title, description, techStack, liveUrl, repoUrl, imageUrl, featured }) {
  if (featured) {
    return (
      <div className="rounded-xl border border-border-warm dark:border-[#38352F] bg-white dark:bg-[#242220] overflow-hidden flex flex-col md:flex-row hover:-translate-y-1 hover:shadow-md hover:border-teal/20 transition-all duration-300">
        <div className="p-7 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-teal mb-3 block">
              Featured Project
            </span>
            <h3 className="text-xl font-semibold text-ink dark:text-[#E8E3DB] mb-2">{title}</h3>
            <p className="text-sm text-ink-muted dark:text-[#9A958D] leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {techStack.map(tech => <Badge key={tech} label={tech} />)}
            </div>
          </div>
          {(liveUrl || repoUrl) && (
            <div className="flex gap-3 mt-6">
              {liveUrl && <Button href={liveUrl} variant="primary">Live Demo</Button>}
              {repoUrl && <Button href={repoUrl} variant="secondary">GitHub</Button>}
            </div>
          )}
        </div>
        {imageUrl
          ? <img src={imageUrl} alt={title} className="w-full md:w-72 lg:w-80 h-52 md:h-auto object-cover" />
          : <ImagePlaceholder title={title} className="w-full md:w-72 lg:w-80 h-52 md:h-auto" />
        }
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border-warm dark:border-[#38352F] bg-white dark:bg-[#242220] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md hover:border-teal/20 transition-all duration-300">
      {imageUrl
        ? <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        : <ImagePlaceholder title={title} className="w-full h-40" />
      }
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-ink dark:text-[#E8E3DB] mb-2">{title}</h3>
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
