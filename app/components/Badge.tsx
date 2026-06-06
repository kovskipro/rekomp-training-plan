'use client'

type BadgeVariant = 'badge-green' | 'badge-amber' | 'badge-red' | 'badge-blue' | 'badge-purple' | 'badge-gray'

const variantClass: Record<BadgeVariant, string> = {
  'badge-green': 'bg-accent-pale text-accent',
  'badge-amber': 'bg-warn-pale text-warn',
  'badge-red': 'bg-danger-pale text-danger',
  'badge-blue': 'bg-blue-50 text-blue-800',
  'badge-purple': 'bg-purple-50 text-purple-800',
  'badge-gray': 'bg-paper-warm text-ink-soft',
}

export default function Badge({ variant, children }: { variant: BadgeVariant; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClass[variant]}`}>
      {children}
    </span>
  )
}
