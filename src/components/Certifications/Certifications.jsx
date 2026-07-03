import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import CertificationCard from './CertificationCard'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle overline="Continuous Learning" title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
        {certifications.map(cert => (
          <CertificationCard key={cert.id} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  )
}
