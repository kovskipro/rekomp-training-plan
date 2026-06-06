'use client'

import { useState } from 'react'
import { schemaA, schemaB_top, schemaB_bottom, schemaC } from '../data'
import ExerciseTable from './ExerciseTable'
import Callout from './Callout'

const schemas = [
  { id: 'A', label: 'Schemat A', sublabel: 'Full Body' },
  { id: 'B', label: 'Schemat B', sublabel: 'Góra / Dół' },
  { id: 'C', label: 'Schemat C', sublabel: 'HIIT + Core' },
]

export default function SchemataPanel() {
  const [active, setActive] = useState('A')

  return (
    <div>
      {/* Inner schema tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {schemas.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              active === s.id
                ? 'bg-ink text-paper border-ink'
                : 'bg-white text-ink-muted border-paper-warm hover:border-ink-faint hover:text-ink'
            }`}
          >
            <span>{s.label}</span>
            <span className={`ml-1 text-xs ${active === s.id ? 'text-paper/70' : 'text-ink-faint'}`}>
              – {s.sublabel}
            </span>
          </button>
        ))}
      </div>

      {active === 'A' && (
        <div className="panel-enter space-y-4">
          <div className="card">
            <div className="card-header">
              <span className="badge-blue">Schemat A</span>
              <div>
                <h3 className="font-display text-xl text-ink">Full Body – siła + kondycja</h3>
                <p className="text-xs text-ink-muted mt-0.5">≈ 55–65 min · Poniedziałek – co tydzień · Hantle / guma / plecak</p>
              </div>
            </div>
            <ExerciseTable exercises={schemaA} />
            <div className="mt-4">
              <Callout variant="info">
                Zacznij od hantli 4–8 kg. Dobierz ciężar tak, żeby ostatnie 2 powtórzenia były wymagające, ale możliwe z zachowaniem techniki.
              </Callout>
            </div>
          </div>
        </div>
      )}

      {active === 'B' && (
        <div className="panel-enter space-y-4">
          <div className="card">
            <div className="card-header">
              <span className="badge-purple">Schemat B</span>
              <div>
                <h3 className="font-display text-xl text-ink">Góra / Dół ciała – alternacja</h3>
                <p className="text-xs text-ink-muted mt-0.5">≈ 55–60 min · Środa (tyg. 1 = góra, tyg. 2 = dół) · Guma oporowa + hantle</p>
              </div>
            </div>

            <div className="mb-3 text-xs font-medium text-ink-muted uppercase tracking-wide">Dzień góra – tydzień 1</div>
            <ExerciseTable exercises={schemaB_top} />

            <div className="mt-5 mb-3 text-xs font-medium text-ink-muted uppercase tracking-wide">Dzień dół – tydzień 2</div>
            <ExerciseTable exercises={schemaB_bottom} />

            <div className="mt-4">
              <Callout variant="warn">
                <strong>Bulgarian split squat:</strong> pierwsze 2 tygodnie bez obciążenia. Opanuj technikę i równowagę zanim dodasz ciężar. Ból kolana = sprawdź technikę.
              </Callout>
            </div>
          </div>
        </div>
      )}

      {active === 'C' && (
        <div className="panel-enter space-y-4">
          <div className="card">
            <div className="card-header">
              <span className="badge-red">Schemat C</span>
              <div>
                <h3 className="font-display text-xl text-ink">HIIT + Core – spalanie i wytrzymałość</h3>
                <p className="text-xs text-ink-muted mt-0.5">≈ 40–50 min · Piątek – co tydzień · Wysoka intensywność · Bez dodatkowego obciążenia</p>
              </div>
            </div>
            <ExerciseTable exercises={schemaC} />
            <div className="mt-4">
              <Callout variant="info">
                Po 4 tyg. można dodać plecak 2–3 kg do tabaty. Priorytetem jest intensywność, nie długość – można skrócić do 35 min.
              </Callout>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
