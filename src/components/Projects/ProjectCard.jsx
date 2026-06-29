import Badge from '../common/Badge'
import Button from '../common/Button'

export default function ProjectCard({ title, description, techStack, liveUrl, repoUrl, imageUrl }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm flex-1 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => <Badge key={tech} label={tech} />)}
        </div>
        <div className="flex gap-3">
          {liveUrl && <Button href={liveUrl} variant="primary">Live</Button>}
          {repoUrl && <Button href={repoUrl} variant="secondary">Code</Button>}
        </div>
      </div>
    </div>
  )
}
