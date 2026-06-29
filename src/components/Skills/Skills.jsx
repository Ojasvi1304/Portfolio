import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import SkillCard from './SkillCard'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <SkillCard key={group.category} {...group} />
        ))}
      </div>
    </SectionWrapper>
  )
}
