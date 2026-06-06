'use client'

import Callout from './Callout'

const recoveryItems = [
  { topic: 'Sen', rec: '8–10 godzin dziennie', why: 'W nocy wydzielany jest hormon wzrostu – kluczowy dla budowy mięśni. To dosłownie czas, gdy mięśnie rosną.' },
  { topic: 'Przerwa między treningami', rec: 'Min. 48 h dla tej samej grupy mięśni', why: 'Mięśnie potrzebują czasu na przebudowę. Codzienne treningi tych samych mięśni hamują progres.' },
  { topic: 'Nawodnienie', rec: '2–3 litry wody dziennie', why: 'Przy intensywnym treningu potrzeby są wyższe. Zmęczenie często = odwodnienie.' },
  { topic: 'Mobilność', rec: '10–15 min dziennie (opcjonalnie)', why: 'Foam roller, rozciąganie, joga – poprawia zakresy ruchu i redukuje zakwasy.' },
]

const nutritionItems = [
  { el: 'Białko', rec: '1,4–1,8 g/kg = 92–119 g/dzień', ex: 'Kurczak, jajka, twaróg, ryby, jogurt grecki, strączkowe. Rozłóż na 4–5 posiłków.' },
  { el: 'Węglowodany', rec: 'Nie eliminuj – główne paliwo', ex: 'Owsianka, ryż, ziemniaki, pełnoziarniste pieczywo, owoce. Więcej w dni treningowe.' },
  { el: 'Tłuszcze', rec: 'Min. 20% kalorii', ex: 'Orzechy, awokado, oliwa, jajka. Kluczowe dla hormonów i wzrostu.' },
  { el: 'Przed treningiem', rec: 'Posiłek 60–90 min przed', ex: 'Owsianka z jogurtem, kanapka z jajkiem, banan z twarożkiem.' },
  { el: 'Po treningu', rec: 'Posiłek do 60 min po', ex: 'Kurczak z ryżem, jogurt z granolą, koktajl z mlekiem i bananem.' },
  { el: 'Czego unikać', rec: 'Ultraprzetworzone, fast food, słodzone napoje', ex: 'Główne źródło pustych kalorii spowalniających redukcję.' },
]

export default function RegeneracjaPanel() {
  return (
    <div className="panel-enter space-y-4">
      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Sen i regeneracja</h3>
        </div>
        <div className="space-y-3">
          {recoveryItems.map((item, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-1 md:gap-3 py-2.5 border-b border-paper-warm last:border-0">
              <div className="font-medium text-sm text-ink">{item.topic}</div>
              <div className="text-sm text-accent font-medium">{item.rec}</div>
              <div className="text-sm text-ink-soft">{item.why}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="font-display text-xl text-ink">Odżywianie – praktyczne wskazówki</h3>
        </div>

        <div className="mb-4">
          <Callout variant="warn">
            Nie stosuj restrykcyjnych diet kalorycznych w wieku 15 lat – organizm jest w fazie wzrostu. BMI 20,4 to norma. Zadbaj o jakość jedzenia i odpowiednie białko, nie o agresywny deficyt.
          </Callout>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3">
          {nutritionItems.map((item, i) => (
            <div key={i} className="py-2 border-b border-paper-warm last:border-0">
              <div className="font-medium text-sm text-ink">{item.el}</div>
              <div className="text-sm text-accent mt-0.5">{item.rec}</div>
              <div className="text-xs text-ink-soft mt-1">{item.ex}</div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block table-scroll rounded-xl border border-paper-warm overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-36">Element</th>
                <th className="w-52">Zalecenie</th>
                <th>Przykłady</th>
              </tr>
            </thead>
            <tbody>
              {nutritionItems.map((item, i) => (
                <tr key={i}>
                  <td className="font-medium">{item.el}</td>
                  <td className="text-ink-soft">{item.rec}</td>
                  <td className="text-ink-soft">{item.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
