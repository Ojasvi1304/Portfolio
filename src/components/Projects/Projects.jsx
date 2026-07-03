import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <SectionWrapper id="projects">
      <SectionTitle overline="What I've Built" title="Projects" />
      {featured && <ProjectCard {...featured} featured />}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {rest.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}
