import Button from '../common/Button'

export default function CertificationCard({ title, issuer, issueDate, credentialUrl, accentColor = '#4D8382' }) {
  return (
    <div className="bg-white dark:bg-[#242220] border border-border-warm dark:border-[#38352F] rounded-lg overflow-hidden flex">
      <div className="w-0.75 shrink-0" style={{ background: accentColor }} />
      <div className="px-4 py-4 flex items-center justify-between gap-4 flex-1 min-w-0">
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink dark:text-[#E8E3DB] truncate">{title}</p>
          <p className="text-xs text-ink-muted dark:text-[#9A958D] mt-0.5">
            {issuer} &middot; {issueDate}
          </p>
        </div>
        {credentialUrl && (
          <Button href={credentialUrl} variant="ghost" className="shrink-0 text-sm px-0">
            View →
          </Button>
        )}
      </div>
    </div>
  )
}
