'use client'

import { supplements, suppTimeline, creatineFaq } from '../data'
import Badge from './Badge'
import Callout from './Callout'

type BadgeVariant = 'badge-green' | 'badge-amber' | 'badge-red' | 'badge-blue' | 'badge-purple' | 'badge-gray'

export default function SuplementyPanel() {
  const mainSupps = supplements.filter(s => s.dose !== '–')
  return (
    <div className="panel-enter space-y-4">
      <Callout variant="danger">
        <strong>Zastrzeżenie wiekowe:</strong> Większość suplementów pre-workoutowych nie ma badań bezpieczeństwa dla osób poniżej 18 lat. Poniższe zalecenia opierają się na dostępnych danych naukowych i zasadzie ostrożności. Warto porozmawiać z lekarzem lub dietetykiem sportowym.
      </Callout>

      {/* Grid cards */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Przegląd suplementów</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {supplements.map((s) => (
            <div key={s.name} className="bg-paper-warm/60 rounded-xl p-3 border border-paper-warm">
              <div className="font-medium text-sm text-ink mb-1.5">{s.name}</div>
              <div className="mb-2">
                <Badge variant={s.badge as BadgeVariant}>{s.verdict}</Badge>
              </div>
              <p className="text-xs text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Harmonogram dzienny</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
          {suppTimeline.map((item, i) => (
            <div key={i} className="border border-paper-warm rounded-xl p-3 bg-white">
              <div className="text-xs text-ink-muted mb-1.5 leading-snug">{item.time}</div>
              <div className="font-medium text-sm text-ink mb-1">{item.name}</div>
              <div className="text-xs text-ink-soft whitespace-pre-line leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>
        <div className="text-xs text-ink-muted mb-3">W dni bez treningu: cytrulina odpada, reszta bez zmian. Kreatyna działa kumulacyjnie – bierz codziennie.</div>
        <div className="space-y-3">
          <Callout variant="safe">
            <strong>Priorytet (od najważniejszego):</strong> 1. Witamina D3+K2 → 2. Magnez → 3. Omega-3 → 4. Białko (jeśli brakuje) → 5. Kreatyna (opcja) → 6. Cytrulina (opcja, ostatnia)
          </Callout>
          <Callout variant="warn">
            <strong>Twoje suplementy:</strong> 105 porcji kreatyny (1/dzień) = 105 dni ≈ 3,5 miesiąca. 60 porcji cytruliniy (4 treningi/tydz.) = 15 tyg. ≈ 3,75 mies. Oba skończą się mniej więcej jednocześnie.
          </Callout>
          <Callout variant="info">
            Wybieraj suplementy z certyfikatem <strong>Informed Sport</strong> lub <strong>NSF Certified for Sport</strong> – gwarantują brak zanieczyszczeń i substancji zabronionych.
          </Callout>
        </div>
      </div>

      {/* Detailed protocol */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Dawki i protokół</h3>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {mainSupps.map((s) => (
            <div key={s.name} className="py-3 border-b border-paper-warm last:border-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm text-ink">{s.name}</span>
                <Badge variant={s.badge as BadgeVariant}>{s.verdict}</Badge>
              </div>
              <div className="text-xs text-ink-muted mb-0.5"><span className="font-medium">Dawka:</span> {s.dose}</div>
              <div className="text-xs text-ink-muted mb-1"><span className="font-medium">Kiedy:</span> {s.when}</div>
              <p className="text-xs text-ink-soft">{s.details}</p>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-40">Suplement</th>
                <th className="w-24">Ocena</th>
                <th className="w-48">Dawka dzienna</th>
                <th className="w-52">Kiedy brać</th>
                <th>Szczegóły</th>
              </tr>
            </thead>
            <tbody>
              {mainSupps.map((s) => (
                <tr key={s.name}>
                  <td className="font-medium">{s.name}</td>
                  <td><Badge variant={s.badge as BadgeVariant}>{s.verdict}</Badge></td>
                  <td className="text-ink-soft">{s.dose}</td>
                  <td className="text-ink-soft">{s.when}</td>
                  <td className="text-xs text-ink-soft leading-relaxed">{s.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">FAQ – Kreatyna u nastolatków</h3>
        </div>
        <div className="space-y-3">
          {creatineFaq.map((item, i) => (
            <div key={i} className="py-3 border-b border-paper-warm last:border-0">
              <div className="font-medium text-sm text-ink mb-1.5">{item.q}</div>
              <p className="text-sm text-ink-soft leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
