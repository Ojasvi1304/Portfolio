const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  ghost: 'text-indigo-600 hover:underline',
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors'
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
  }
  return <button type="button" onClick={onClick} className={cls}>{children}</button>
}
