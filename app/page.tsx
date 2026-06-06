import { stats } from './data'
import TabNav from './components/TabNav'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
        <div className="mb-6">
          <p className="text-xs font-mono text-ink-muted tracking-widest uppercase mb-2">Plan treningowy domowy</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-1">
            Redukcja + Budowa
          </h1>
          <p className="text-ink-muted text-sm">Kompleksowy plan dla aktywnego 15-latka · 8-tygodniowa progresja</p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-paper-warm p-3 shadow-sm">
              <div className="text-xs text-ink-muted mb-1 leading-tight">{s.label}</div>
              <div className="font-medium text-ink leading-tight">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Rekomp callout */}
        <div className="mt-4 border-l-2 border-accent bg-accent-pale rounded-r-xl px-4 py-3 text-sm text-accent leading-relaxed">
          <strong>Podejście łączone (rekomp):</strong> Przy BMI 20,4 i wieku 15 lat rekompozycja ciała jest optymalnym wyborem. Organizm w fazie wzrostu doskonale toleruje jednoczesną redukcję tłuszczu i budowę mięśni – agresywna redukcja kaloryczna byłaby nieodpowiednia. Trening siłowy jest bezpieczny i zalecany przez AAP, NSCA i WHO przy zachowaniu poprawnej techniki.
        </div>
      </div>

      {/* Tabs */}
      <TabNav />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 mt-4 border-t border-paper-warm">
        <p className="text-xs text-ink-faint text-center">
          Plan treningowy · oparty na aktualnych wytycznych AAP, NSCA, WHO · Przed zmianą suplementacji skonsultuj się z lekarzem
        </p>
      </footer>
    </main>
  )
}
