import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import CertificationCard from './CertificationCard'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle title="Certifications" />
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  )
}
