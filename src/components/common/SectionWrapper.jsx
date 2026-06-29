export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-6 max-w-5xl mx-auto w-full ${className}`}>
      {children}
    </section>
  )
}
