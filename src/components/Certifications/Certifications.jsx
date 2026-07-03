import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import CertificationCard from './CertificationCard'
import { certifications } from '../../data/certifications'

const CERT_ACCENTS = ['#C17357', '#8AA393', '#83A2BD']

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle overline="Continuous Learning" title="Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
        {certifications.map((cert, i) => (
          <CertificationCard
            key={cert.id}
            {...cert}
            accentColor={CERT_ACCENTS[i % CERT_ACCENTS.length]}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
