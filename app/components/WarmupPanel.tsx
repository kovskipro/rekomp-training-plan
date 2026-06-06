'use client'

import { warmupExercises, cooldownExercises } from '../data'
import Callout from './Callout'

export default function WarmupPanel() {
  return (
    <div className="panel-enter space-y-4">
      {/* Warmup */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Rozgrzewka ogólna</h3>
        </div>
        <p className="text-sm text-ink-muted mb-4">8–10 minut · Przed każdym treningiem</p>

        {/* Mobile */}
        <div className="md:hidden space-y-2 mb-4">
          {warmupExercises.map((ex, i) => (
            <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-paper-warm last:border-0">
              <div>
                <div className="text-sm text-ink">{ex.name}</div>
                <a href={ex.ytUrl} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-blue-700 hover:underline">▶ {ex.ytLabel}</a>
              </div>
              <span className="text-xs text-ink-muted shrink-0">{ex.time}</span>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden mb-4">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ćwiczenie</th>
                <th className="w-36">Czas / Powtórzenia</th>
                <th className="w-44">YouTube</th>
              </tr>
            </thead>
            <tbody>
              {warmupExercises.map((ex, i) => (
                <tr key={i}>
                  <td>{ex.name}</td>
                  <td className="text-ink-muted">{ex.time}</td>
                  <td>
                    <a href={ex.ytUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2">
                      ▶ {ex.ytLabel}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout variant="warn">
          Rozgrzewka = podniesienie temperatury i uruchomienie stawów – bez rozciągania statycznego przed treningiem. Rozciąganie statyczne zostaw wyłącznie na koniec.
        </Callout>
      </div>

      {/* Cooldown */}
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Schłodzenie i rozciąganie</h3>
        </div>
        <p className="text-sm text-ink-muted mb-4">8–10 minut · Po każdym treningu</p>

        {/* Mobile */}
        <div className="md:hidden space-y-2 mb-4">
          {cooldownExercises.map((ex, i) => (
            <div key={i} className="py-2 border-b border-paper-warm last:border-0">
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-medium text-ink-muted">{ex.area}</span>
                <span className="text-xs text-ink-muted shrink-0">{ex.time}</span>
              </div>
              <div className="text-sm text-ink mt-0.5">{ex.name}</div>
              <a href={ex.ytUrl} target="_blank" rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:underline">▶ {ex.ytLabel}</a>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden mb-4">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-36">Obszar</th>
                <th>Ćwiczenie</th>
                <th className="w-28">Czas</th>
                <th className="w-44">YouTube</th>
              </tr>
            </thead>
            <tbody>
              {cooldownExercises.map((ex, i) => (
                <tr key={i}>
                  <td className="font-medium text-ink-soft">{ex.area}</td>
                  <td className="text-ink-soft">{ex.name}</td>
                  <td className="text-ink-muted">{ex.time}</td>
                  <td>
                    <a href={ex.ytUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-700 hover:text-blue-900 underline underline-offset-2">
                      ▶ {ex.ytLabel}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout variant="safe">
          Każde rozciąganie statyczne utrzymuj 25–40 sekund. Oddychaj spokojnie. Nie bujaj się i nie forsuj bólu.
        </Callout>
      </div>
    </div>
  )
}
