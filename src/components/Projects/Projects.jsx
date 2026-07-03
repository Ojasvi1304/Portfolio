import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

const PROJECT_ACCENTS = ['#C17357', '#8AA393', '#83A2BD', '#B5ACD4']

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle overline="What I've Built" title="Projects" subtitle="A selection of projects built while exploring modern web technologies." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            {...project}
            accentColor={PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
