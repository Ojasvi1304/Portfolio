import Badge from '../common/Badge'

const ACCENT_HEX = {
  terracotta: '#C17357',
  sage:       '#8AA393',
  dusty:      '#83A2BD',
  lavender:   '#B5ACD4',
  pale:       '#F7E5A9',
}

export default function SkillCard({ category, items, accent = 'terracotta' }) {
  const accentColor = ACCENT_HEX[accent] ?? '#4D8382'
  return (
    <div className="rounded-xl border border-border-warm dark:border-[#38352F] bg-white dark:bg-[#1C1A17] overflow-hidden">
      <div className="h-1" style={{ background: accentColor }} />
      <div className="p-6">
        <h3 className="text-sm font-semibold text-ink dark:text-[#E8E3DB] mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map(({ name }) => (
            <Badge key={name} label={name} />
          ))}
        </div>
      </div>
    </div>
  )
}
