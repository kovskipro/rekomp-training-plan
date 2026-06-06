'use client'

type CalloutVariant = 'info' | 'safe' | 'warn' | 'danger'

const styles: Record<CalloutVariant, string> = {
  info: 'border-l-2 border-blue-400 bg-blue-50 text-blue-900',
  safe: 'border-l-2 border-accent bg-accent-pale text-accent',
  warn: 'border-l-2 border-amber-500 bg-warn-pale text-warn',
  danger: 'border-l-2 border-red-500 bg-danger-pale text-danger',
}

export default function Callout({ variant, children }: { variant: CalloutVariant; children: React.ReactNode }) {
  return (
    <div className={`rounded-r-lg px-4 py-3 text-sm leading-relaxed ${styles[variant]}`}>
      {children}
    </div>
  )
}
