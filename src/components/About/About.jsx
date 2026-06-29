import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" />
      <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
        {/* Add your bio here */}
      </p>
    </SectionWrapper>
  )
}
