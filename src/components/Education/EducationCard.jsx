export default function EducationCard({ institution, degree, field, startYear, endYear, description }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white text-left">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{institution}</h3>
          <p className="text-sm text-gray-600">{degree} · {field}</p>
        </div>
        <span className="text-xs text-gray-400 shrink-0">{startYear} – {endYear}</span>
      </div>
      {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
    </div>
  )
}
