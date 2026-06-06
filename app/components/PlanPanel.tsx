'use client'

import { weeklyPlan } from '../data'
import Badge from './Badge'
import Callout from './Callout'

type BadgeVariant = 'badge-green' | 'badge-amber' | 'badge-red' | 'badge-blue' | 'badge-purple' | 'badge-gray'

export default function PlanPanel() {
  return (
    <div className="panel-enter space-y-4">
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Rozkład 4 treningów tygodniowo</h3>
        </div>
        <p className="text-sm text-ink-muted mb-4">System dwutygodniowy – naprzemienne tygodnie</p>

        {/* Mobile: stacked days */}
        <div className="md:hidden space-y-2">
          {weeklyPlan.map((row) => (
            <div key={row.day} className="bg-paper-warm/50 rounded-xl p-3">
              <div className="text-xs font-medium text-ink-muted mb-2">{row.day}</div>
              <div className="flex gap-2 flex-wrap">
                <div>
                  <div className="text-xs text-ink-faint mb-1">Tydzień 1</div>
                  <Badge variant={row.week1.badge as BadgeVariant}>{row.week1.label}</Badge>
                </div>
                <div>
                  <div className="text-xs text-ink-faint mb-1">Tydzień 2</div>
                  <Badge variant={row.week2.badge as BadgeVariant}>{row.week2.label}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>Dzień</th>
                <th>Tydzień 1</th>
                <th>Tydzień 2</th>
              </tr>
            </thead>
            <tbody>
              {weeklyPlan.map((row) => (
                <tr key={row.day}>
                  <td className="font-medium">{row.day}</td>
                  <td><Badge variant={row.week1.badge as BadgeVariant}>{row.week1.label}</Badge></td>
                  <td><Badge variant={row.week2.badge as BadgeVariant}>{row.week2.label}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <Callout variant="safe">
            Schemat A co tydzień jako baza. B góra i B dół rozdzielone na osobne tygodnie – każda partia ma pełną regenerację. C co piątek podtrzymuje redukcję i kondycję. Między każdym treningiem minimum 1 dzień przerwy.
          </Callout>
        </div>
      </div>
    </div>
  )
}
