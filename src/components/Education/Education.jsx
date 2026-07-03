import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import EducationCard from './EducationCard'
import { education } from '../../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-[#F4F2EE] dark:bg-[#242220]">
      <SectionTitle overline="Academic Background" title="Education" />
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical connecting line */}
        <div className="absolute left-3 top-3 bottom-0 w-px bg-border-warm dark:bg-[#38352F]" />
        {education.map(item => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWrapper>
  )
}
