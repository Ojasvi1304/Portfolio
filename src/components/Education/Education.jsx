import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import EducationCard from './EducationCard'
import { education } from '../../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionTitle title="Education" />
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </SectionWrapper>
  )
}
