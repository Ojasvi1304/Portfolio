import Button from '../common/Button'

export default function CertificationCard({ title, issuer, issueDate, credentialUrl, badgeUrl }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
      {badgeUrl && (
        <img src={badgeUrl} alt={issuer} className="w-12 h-12 object-contain shrink-0" />
      )}
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{issuer} · {issueDate}</p>
      </div>
      {credentialUrl && (
        <Button href={credentialUrl} variant="ghost" className="shrink-0 text-sm">
          Verify
        </Button>
      )}
    </div>
  )
}
