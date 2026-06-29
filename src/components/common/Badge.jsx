export default function Badge({ label }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
      {label}
    </span>
  )
}
