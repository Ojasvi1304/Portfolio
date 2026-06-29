export default function SkillCard({ category, items }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white">
      <h3 className="font-semibold text-gray-800 mb-4">{category}</h3>
      <ul className="space-y-2">
        {items.map(({ name, level }) => (
          <li key={name} className="flex justify-between text-sm text-gray-600">
            <span>{name}</span>
            <span className="text-gray-400">{level}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
