export default function Badge({ label }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal/8 text-teal border border-teal/20 dark:bg-teal/12 dark:border-teal/30">
      {label}
    </span>
  )
}
