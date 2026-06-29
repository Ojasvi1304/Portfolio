import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Projects" subtitle="Things I've built" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
