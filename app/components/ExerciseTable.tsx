'use client'

import type { Exercise } from '../data'

export default function ExerciseTable({ exercises }: { exercises: Exercise[] }) {
  return (
    <div className="table-scroll rounded-xl border border-paper-warm overflow-hidden">
      {/* Mobile cards */}
      <div className="md:hidden divide-y divide-paper-warm">
        {exercises.map((ex) => (
          <div key={ex.id} className="p-4 bg-white">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <span className="text-xs font-mono text-ink-muted mr-2">#{ex.id}</span>
                <span className="font-medium text-ink">{ex.name}</span>
                {ex.sub && <span className="text-xs text-ink-muted ml-1">({ex.sub})</span>}
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-medium text-ink">{ex.sets}</div>
                <div className="text-xs text-ink-muted">przerwa: {ex.rest}</div>
              </div>
            </div>
            <p className="text-xs text-ink-soft leading-relaxed mb-2">{ex.tips}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={ex.ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2"
              >
                ▶ {ex.ytLabel}
              </a>
              {ex.ytLabel2 && ex.ytUrl2 && (
                <a
                  href={ex.ytUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2"
                >
                  ▶ {ex.ytLabel2}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <table className="data-table hidden md:table">
        <thead>
          <tr>
            <th className="w-8">#</th>
            <th className="w-44">Ćwiczenie</th>
            <th className="w-28">Serie × Pow.</th>
            <th className="w-20">Przerwa</th>
            <th>Wskazówki techniczne</th>
            <th className="w-48">YouTube</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex) => (
            <tr key={ex.id}>
              <td className="font-mono text-xs text-ink-muted">{ex.id}</td>
              <td>
                <div className="font-medium text-ink">{ex.name}</div>
                {ex.sub && <div className="text-xs text-ink-muted mt-0.5">{ex.sub}</div>}
              </td>
              <td className="font-medium whitespace-nowrap">{ex.sets}</td>
              <td className="text-ink-muted">{ex.rest}</td>
              <td className="text-xs text-ink-soft leading-relaxed">{ex.tips}</td>
              <td>
                <a
                  href={ex.ytUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2 mb-1"
                >
                  ▶ {ex.ytLabel}
                </a>
                {ex.ytLabel2 && ex.ytUrl2 && (
                  <a
                    href={ex.ytUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2"
                  >
                    ▶ {ex.ytLabel2}
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
