'use client'

import { progressionPhases } from '../data'
import Callout from './Callout'

const progressChecks = [
  { what: 'Obwody ciała (talia, klatka, ramię, udo)', freq: 'Co 2–3 tygodnie', how: 'Miarką krawiecką rano, na czczo, w tym samym miejscu' },
  { what: 'Waga ciała', freq: 'Co tydzień (rano, po toalecie)', how: 'Nie codziennie – wahania dobowe mylą obraz' },
  { what: 'Wydajność treningowa', freq: 'Na bieżąco', how: 'Notuj ciężary i pow. – czy idą w górę?' },
  { what: 'Samopoczucie i energia', freq: 'Subiektywnie', how: 'Zmęczenie, nastrój, jakość snu – ważne sygnały' },
]

export default function ProgresjaPanel() {
  return (
    <div className="panel-enter space-y-4">
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Progresja 8-tygodniowa</h3>
        </div>

        <div className="space-y-4 mb-4">
          {progressionPhases.map((phase) => (
            <div key={phase.weeks} className="flex gap-4">
              <div className="shrink-0 mt-0.5">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 text-xs font-medium flex items-center justify-center">
                  {phase.weeks}
                </div>
              </div>
              <div>
                <div className="font-medium text-ink mb-1">{phase.title}</div>
                <p className="text-sm text-ink-soft leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Callout variant="info">
            Nie zwiększaj jednocześnie obciążenia I liczby powtórzeń. Wybierz jedno. Bezpieczna progresja: +1–2 kg co 1–2 tygodnie.
          </Callout>
          <Callout variant="warn">
            Unikaj ćwiczeń z maksymalnym ciężarem (1RM). W wieku 15 lat płytki wzrostowe są aktywne. Ciężar musi pozwalać na min. 6–8 pow. z pełną kontrolą.
          </Callout>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Kontrola postępów</h3>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {progressChecks.map((c, i) => (
            <div key={i} className="py-2 border-b border-paper-warm last:border-0">
              <div className="font-medium text-sm text-ink mb-1">{c.what}</div>
              <div className="text-xs text-ink-muted">{c.freq}</div>
              <div className="text-xs text-ink-soft mt-0.5">{c.how}</div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>Co mierzyć</th>
                <th className="w-44">Jak często</th>
                <th>Jak mierzyć</th>
              </tr>
            </thead>
            <tbody>
              {progressChecks.map((c, i) => (
                <tr key={i}>
                  <td className="font-medium">{c.what}</td>
                  <td className="text-ink-muted">{c.freq}</td>
                  <td className="text-ink-soft">{c.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
