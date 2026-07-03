const variants = {
  primary:   'bg-teal text-white hover:bg-teal/85 active:scale-[0.98] shadow-sm',
  secondary: 'border border-teal text-teal hover:bg-teal/5 dark:hover:bg-teal/10',
  ghost:     'text-teal hover:underline underline-offset-4',
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium transition-all duration-200 cursor-pointer'
  const cls = `${base} ${variants[variant]} ${className}`
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto'))

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
