import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact" subtitle="Get in touch" />
      <div className="text-center">
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <Button href="mailto:your@email.com">Say Hello</Button>
      </div>
    </SectionWrapper>
  )
}
