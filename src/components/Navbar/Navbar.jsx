import { navLinks } from '../../data/nav'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg">Portfolio</span>
        <ul className="flex gap-6 text-sm font-medium text-gray-600">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-indigo-600 transition-colors">{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
