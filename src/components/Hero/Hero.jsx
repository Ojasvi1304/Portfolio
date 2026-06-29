import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Your Name</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-xl">
        A passionate developer building elegant solutions to complex problems.
      </p>
      <div className="flex gap-4">
        <Button href="#projects">View Projects</Button>
        <Button variant="secondary" href="#contact">Contact Me</Button>
      </div>
    </section>
  )
}
