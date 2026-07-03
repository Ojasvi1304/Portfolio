import { useInView } from '../../hooks/useInView'

export default function SectionWrapper({ id, children, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <section id={id} className={`w-full ${className}`}>
      <div
        ref={ref}
        className={`py-20 px-6 max-w-5xl mx-auto transition-all duration-700 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </section>
  )
}
