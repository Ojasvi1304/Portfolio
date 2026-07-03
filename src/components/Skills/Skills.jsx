import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import SkillCard from './SkillCard'
import { skills } from '../../data/skills'

const ACCENTS = ['terracotta', 'sage', 'dusty', 'lavender', 'pale']

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#F4F2EE] dark:bg-[#242220]">
      <SectionTitle overline="What I Know" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <SkillCard
            key={group.category}
            {...group}
            accent={ACCENTS[i % ACCENTS.length]}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
