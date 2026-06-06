export const stats = [
  { label: 'Wiek', value: '15 lat' },
  { label: 'Waga', value: '66 kg' },
  { label: 'Wzrost', value: '180 cm' },
  { label: 'BMI', value: '20,4' },
  { label: 'Treningi / tydzień', value: '4' },
  { label: 'Podejście', value: 'Rekomp (łączony)' },
]

export type Exercise = {
  id: number
  name: string
  sub?: string
  sets: string
  rest: string
  tips: string
  ytLabel: string
  ytUrl: string
  ytLabel2?: string
  ytUrl2?: string
}

export const schemaA: Exercise[] = [
  {
    id: 1,
    name: 'Goblet squat',
    sub: 'hantla lub plecak',
    sets: '4 × 10–12',
    rest: '60 s',
    tips: 'Stopy na szerokość bioder, kolana nad palcami, tors wyprostowany, hantle przy klatce. Biodra poniżej linii kolan.',
    ytLabel: 'Goblet squat – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=goblet+squat+proper+form+tutorial',
    ytLabel2: 'Goblet squat – błędy',
    ytUrl2: 'https://www.youtube.com/results?search_query=goblet+squat+common+mistakes',
  },
  {
    id: 2,
    name: 'Pompki z uniesieniem nóg',
    sub: 'nogi na kanapie/krześle',
    sets: '4 × 8–12',
    rest: '60 s',
    tips: 'Ciało w linii prostej, łokcie 45° do tułowia (nie 90°!). Błąd: opadające biodra lub unoszący się tył.',
    ytLabel: 'Decline push-up – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=decline+push+up+proper+form',
  },
  {
    id: 3,
    name: 'Hip thrust',
    sub: 'plecak lub hantle na biodrach',
    sets: '4 × 12–15',
    rest: '60 s',
    tips: 'Ramiona oparte o kanapę, kolana ~90°, pięty w ziemi. Na górze ściśnij pośladki 1 s. Nie przeginaj lędźwi.',
    ytLabel: 'Hip thrust – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=hip+thrust+at+home+proper+form',
    ytLabel2: 'Hip thrust – błędy',
    ytUrl2: 'https://www.youtube.com/results?search_query=hip+thrust+mistakes+to+avoid',
  },
  {
    id: 4,
    name: 'Wiosłowanie hantlą',
    sub: 'oparcie o krzesło, naprzemiennie',
    sets: '4 × 10 / stronę',
    rest: '60 s',
    tips: 'Plecy równoległe do podłogi, łokieć ciągnie do tyłu i w górę, łopatka ściska. Nie skręcaj tułowia.',
    ytLabel: 'Dumbbell row – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=dumbbell+row+proper+form+tutorial',
  },
  {
    id: 5,
    name: 'Uginanie ramion z hantlami',
    sub: 'naprzemiennie lub obustronnie',
    sets: '3 × 10–12',
    rest: '45 s',
    tips: 'Łokcie przy tułowiu, ruch tylko w stawie łokciowym, powolne opuszczanie 2–3 s. Bez bujania tułowiem.',
    ytLabel: 'Bicep curl – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=dumbbell+bicep+curl+correct+form',
  },
  {
    id: 6,
    name: 'Plank dynamiczny',
    sub: 'shoulder tap lub mountain climber',
    sets: '3 × 30–40 s',
    rest: '45 s',
    tips: 'Biodra poziomo, napięty brzuch, powolny ruch rąk. Oddychaj – nie wstrzymuj oddechu.',
    ytLabel: 'Shoulder tap plank',
    ytUrl: 'https://www.youtube.com/results?search_query=plank+shoulder+tap+how+to+do',
    ytLabel2: 'Mountain climber',
    ytUrl2: 'https://www.youtube.com/results?search_query=mountain+climber+exercise+form',
  },
]

export const schemaB_top: Exercise[] = [
  {
    id: 1,
    name: 'Pike push-up',
    sub: 'barki i tryceps',
    sets: '4 × 8–12',
    rest: '60 s',
    tips: 'Biodra wysoko (odwrócone V), głowa między ramionami, nos zmierza ku podłodze. Błąd: za płytkie opuszczanie.',
    ytLabel: 'Pike push-up – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=pike+push+up+proper+form+tutorial',
  },
  {
    id: 2,
    name: 'Pompki diamondowe',
    sub: 'tryceps',
    sets: '3 × 8–10',
    rest: '60 s',
    tips: 'Dłonie blisko siebie (kształt rombu), łokcie przy tułowiu idą do tyłu. Zacznij od szerszego rozstawu jeśli za trudne.',
    ytLabel: 'Diamond push-up – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=diamond+push+up+correct+form',
  },
  {
    id: 3,
    name: 'Wiosłowanie gumą oporową',
    sub: 'guma zakotwiczona w drzwiach',
    sets: '4 × 12',
    rest: '60 s',
    tips: 'Lekkie odchylenie w tył, łokcie ciągnij do tyłu i w górę, łopatki ściskaj. Napięcie w gumie przez cały ruch.',
    ytLabel: 'Band row – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=resistance+band+row+proper+form',
  },
  {
    id: 4,
    name: 'Face pull z gumą',
    sub: 'tylne barki',
    sets: '3 × 15',
    rest: '45 s',
    tips: 'Guma na wysokości twarzy, ciągnij dłonie ku uszom – łokcie wychodzą w bok i w górę. Powolny powrót.',
    ytLabel: 'Face pull band – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=face+pull+resistance+band+how+to',
  },
]

export const schemaB_bottom: Exercise[] = [
  {
    id: 5,
    name: 'Bulgarian split squat',
    sub: 'tylna noga na krześle',
    sets: '4 × 8–10 / noga',
    rest: '75 s',
    tips: 'Przednia stopa ~60–80 cm przed krzesłem, kolano schodzi pionowo, tors wyprostowany. Zacznij bez obciążenia!',
    ytLabel: 'Bulgarian split squat – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=bulgarian+split+squat+form+tutorial',
    ytLabel2: 'Bulgarian – błędy',
    ytUrl2: 'https://www.youtube.com/results?search_query=bulgarian+split+squat+mistakes',
  },
  {
    id: 6,
    name: 'Nordic curl (asystowany)',
    sub: 'nogi zakotwiczone pod kanapą',
    sets: '3 × 5–8',
    rest: '90 s',
    tips: 'Bardzo powolne opuszczanie 3–5 sek., kontrolujesz opadanie. Możesz złapać podłogę na powrót. Najlepsze ćwiczenie na dwugłowe ud.',
    ytLabel: 'Nordic curl – jak zacząć',
    ytUrl: 'https://www.youtube.com/results?search_query=nordic+curl+at+home+beginners+tutorial',
  },
]

export const schemaC: Exercise[] = [
  {
    id: 1,
    name: 'Burpees',
    sets: '4 × 10 pow.',
    rest: '40 s',
    tips: 'Stój → przysiad → deskowanie → pompka (opcja) → powrót → skok. Kontroluj lądowanie.',
    ytLabel: 'Burpees – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=how+to+do+burpees+correct+form',
  },
  {
    id: 2,
    name: 'Skakanka / High knees',
    sets: '3 × 45 s',
    rest: '30 s',
    tips: 'Skakanka: 45 s ciągłego skakania. Bez skakanki: kolana powyżej bioder, szybki rytm.',
    ytLabel: 'High knees – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=high+knees+exercise+how+to+do',
    ytLabel2: 'Skakanka – jak zacząć',
    ytUrl2: 'https://www.youtube.com/results?search_query=jump+rope+skipping+beginners+tutorial',
  },
  {
    id: 3,
    name: 'Hollow body hold',
    sub: 'izometryczne core',
    sets: '4 × 20–30 s',
    rest: '40 s',
    tips: 'Leżąc na plecach, lędźwie przyklejone do podłogi, ramiona i nogi uniesione. Trudniejsze niż plank.',
    ytLabel: 'Hollow body hold – tutorial',
    ytUrl: 'https://www.youtube.com/results?search_query=hollow+body+hold+tutorial+how+to',
  },
  {
    id: 4,
    name: 'Lateral bounds',
    sub: 'skoki boczne',
    sets: '3 × 20 skoków',
    rest: '40 s',
    tips: 'Skocz w bok, ląduj na jednej nodze miękko (kolano ugięte), utrzymaj 1 s, skocz w drugą stronę.',
    ytLabel: 'Lateral bounds – technika',
    ytUrl: 'https://www.youtube.com/results?search_query=lateral+bounds+exercise+how+to',
  },
  {
    id: 5,
    name: 'Ab wheel rollout',
    sub: 'kółko lub DIY',
    sets: '3 × 8–10',
    rest: '60 s',
    tips: 'Mały zakres ruchu na start. Napięty brzuch, nie zapadają lędźwie. Zacznij klęcząc – nie stojąc.',
    ytLabel: 'Ab wheel – jak zacząć',
    ytUrl: 'https://www.youtube.com/results?search_query=ab+wheel+rollout+beginners+tutorial',
    ytLabel2: 'Ab wheel – błędy',
    ytUrl2: 'https://www.youtube.com/results?search_query=ab+wheel+rollout+mistakes',
  },
  {
    id: 6,
    name: 'Tabata squat jumps',
    sub: 'finisher 4 min',
    sets: '8 × (20 s / 10 s)',
    rest: '–',
    tips: 'Pełny przysiad, mocny wyskok, miękkie lądowanie. Jedna runda tabaty na koniec treningu.',
    ytLabel: 'Tabata squat jumps',
    ytUrl: 'https://www.youtube.com/results?search_query=tabata+squat+jumps+workout',
  },
]

export const warmupExercises = [
  { name: 'Marsz w miejscu z ruchami ramion', time: '90 s', ytLabel: 'Marsz w miejscu', ytUrl: 'https://www.youtube.com/results?search_query=marching+in+place+warmup+exercise' },
  { name: 'Krążenia ramion (do przodu i do tyłu)', time: '20 × każda strona', ytLabel: 'Arm circles', ytUrl: 'https://www.youtube.com/results?search_query=arm+circles+warmup+exercise' },
  { name: 'Rotacje tułowia (ręce na biodrach)', time: '10 × stronę', ytLabel: 'Torso rotation', ytUrl: 'https://www.youtube.com/results?search_query=torso+rotation+warmup+exercise' },
  { name: 'Leg swings – wahadło nogi w przód/tył', time: '10 × noga', ytLabel: 'Leg swings', ytUrl: 'https://www.youtube.com/results?search_query=leg+swings+warmup+how+to' },
  { name: 'Hip circles – krążenia bioder', time: '10 × stronę', ytLabel: 'Hip circles', ytUrl: 'https://www.youtube.com/results?search_query=hip+circles+warmup+exercise' },
  { name: 'Inchworm walk', time: '5 powtórzeń', ytLabel: 'Inchworm – jak wykonać', ytUrl: 'https://www.youtube.com/results?search_query=inchworm+exercise+how+to+do' },
  { name: 'Squat to stand', time: '8 powtórzeń', ytLabel: 'Squat to stand', ytUrl: 'https://www.youtube.com/results?search_query=squat+to+stand+warmup+exercise' },
  { name: 'Skipping / bieg w miejscu', time: '45 s', ytLabel: 'Bieg w miejscu', ytUrl: 'https://www.youtube.com/results?search_query=high+knees+warmup+jogging+in+place' },
]

export const cooldownExercises = [
  { area: 'Czworogłowy uda', name: 'Standing quad stretch – stój, trzymaj stopę za plecami', time: '30 s / noga', ytLabel: 'Quad stretch', ytUrl: 'https://www.youtube.com/results?search_query=standing+quad+stretch+how+to' },
  { area: 'Dwugłowy uda', name: 'Seated hamstring stretch – siedź, nogi proste, sięgaj do palców', time: '30 s / noga', ytLabel: 'Hamstring stretch', ytUrl: 'https://www.youtube.com/results?search_query=seated+hamstring+stretch+tutorial' },
  { area: 'Pośladki', name: 'Figura 4 leżąc lub pigeon pose', time: '40 s / stronę', ytLabel: 'Figure 4 stretch', ytUrl: 'https://www.youtube.com/results?search_query=figure+four+glute+stretch+lying+down' },
  { area: 'Klatka / Barki', name: 'Doorway chest stretch – stań w drzwiach, ręce oparte o framugę', time: '30 s', ytLabel: 'Doorway chest stretch', ytUrl: 'https://www.youtube.com/results?search_query=doorway+chest+stretch+how+to' },
  { area: 'Plecy / Boczne', name: "Child's pose z wyciąganiem rąk na boki", time: '40 s', ytLabel: "Child's pose", ytUrl: 'https://www.youtube.com/results?search_query=childs+pose+stretch+how+to' },
  { area: 'Lędźwie / Hip flexor', name: 'Kneeling lunge stretch – kolano na podłodze', time: '30 s / stronę', ytLabel: 'Hip flexor stretch', ytUrl: 'https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch+tutorial' },
  { area: 'Szyja / Ramiona', name: 'Powolne skłony głowy i rotacje', time: '60 s łącznie', ytLabel: 'Neck cooldown', ytUrl: 'https://www.youtube.com/results?search_query=neck+stretch+cooldown+exercises' },
]

export const weeklyPlan = [
  { day: 'Poniedziałek', week1: { label: 'A – Full Body', badge: 'badge-blue' }, week2: { label: 'A – Full Body', badge: 'badge-blue' } },
  { day: 'Wtorek', week1: { label: 'Odpoczynek / lekki bieg', badge: 'badge-gray' }, week2: { label: 'Odpoczynek / lekki bieg', badge: 'badge-gray' } },
  { day: 'Środa', week1: { label: 'B – Góra ciała', badge: 'badge-purple' }, week2: { label: 'B – Dół ciała', badge: 'badge-purple' } },
  { day: 'Czwartek', week1: { label: 'Odpoczynek / mobilność', badge: 'badge-gray' }, week2: { label: 'Odpoczynek / mobilność', badge: 'badge-gray' } },
  { day: 'Piątek', week1: { label: 'C – HIIT + Core', badge: 'badge-red' }, week2: { label: 'C – HIIT + Core', badge: 'badge-red' } },
  { day: 'Sobota', week1: { label: 'Odpoczynek / spacer', badge: 'badge-gray' }, week2: { label: 'Odpoczynek / spacer', badge: 'badge-gray' } },
  { day: 'Niedziela', week1: { label: 'Pełny odpoczynek', badge: 'badge-gray' }, week2: { label: 'Pełny odpoczynek', badge: 'badge-gray' } },
]

export const progressionPhases = [
  {
    weeks: '1–2',
    title: 'Faza adaptacji',
    description: 'Skup się na technice, nie obciążeniu. Ucz się każdego ćwiczenia powoli. Ciężar hantli: 4–6 kg (ostatnie 2 pow. trudne, ale możliwe). Schemat A i B z masą własną + lekkie hantle. Schemat C z mniejszą intensywnością (skróć o 1 rundę każde ćwiczenie).',
  },
  {
    weeks: '3–4',
    title: 'Faza główna I',
    description: 'Zwiększ ciężar o 1–2 kg lub dodaj 1–2 pow. do każdej serii. Wprowadź pełne schłodzenie po każdym treningu. Schemat C – pełny protokół. Zacznij Bulgarian split squat z lekkim obciążeniem 2–4 kg.',
  },
  {
    weeks: '5–6',
    title: 'Faza główna II',
    description: 'Zwiększ serie o 1 dodatkową w ćwiczeniach głównych (np. 4→5 lub 3→4). Trudniejsze warianty: pompki z klaśnięciem, single-leg hip thrust. Schemat C – dodaj plecak 2–3 kg do tabaty przysiadów.',
  },
  {
    weeks: '7–8',
    title: 'Faza zaawansowana',
    description: 'Testuj ćwiczenia zaawansowane: archer push-up, pistol squat asystowany, nordic curl bez asysty. Oceń postęp: czy pow. poszły w górę? Czy ciężar wzrósł? Zmierz obwody. Planuj kolejny blok 8-tygodniowy.',
  },
]

export const supplements = [
  {
    name: 'Witamina D3 + K2',
    badge: 'badge-green' as const,
    verdict: 'Zdecydowanie tak',
    desc: 'Polska + jesień/zima + rosnący nastolatek = niemal pewny niedobór. Wpływa na siłę mięśni, kości i odporność.',
    dose: '2000–4000 IU D3 + 100–200 mcg K2',
    when: 'Do posiłku z tłuszczem (śniadanie lub kolacja)',
    details: 'W Polsce od października do marca synteza skórna praktycznie nie zachodzi. Zawsze łącz z K2-MK7. Sprawdź poziom 25-OH-D (norma 30–50 ng/ml).',
  },
  {
    name: 'Magnez (glicynian)',
    badge: 'badge-green' as const,
    verdict: 'Zalecany',
    desc: 'Często niedoborowy u aktywnych nastolatków. Poprawia regenerację, jakość snu, redukuje skurcze mięśni.',
    dose: '200–400 mg magnezu elementarnego',
    when: 'Wieczorem ~1 godz. przed snem',
    details: 'Glicynian – najlepsza tolerancja żołądkowa. Cytrynian – tańszy, też dobry. Unikaj tlenku magnezu (zła wchłanialność).',
  },
  {
    name: 'Omega-3 (EPA/DHA)',
    badge: 'badge-green' as const,
    verdict: 'Zalecane',
    desc: 'Przeciwzapalne, wspierają regenerację mięśni i zdrowie mózgu. Ważne jeśli mało ryb w diecie.',
    dose: '1–2 g EPA+DHA (2–3 kapsułki oleju rybiego)',
    when: 'Do posiłku z tłuszczem, dowolna pora',
    details: 'Przy 2× rybach/tydz. suplement mniej potrzebny. Szukaj certyfikatu IFOS – gwarantuje czystość od rtęci.',
  },
  {
    name: 'Białko serwatkowe WPC',
    badge: 'badge-green' as const,
    verdict: 'Zalecane (jeśli brakuje)',
    desc: 'Bezpieczne – to skoncentrowane jedzenie. Potrzebne tylko gdy trudno osiągnąć normę białka z diety.',
    dose: '1 porcja = 25–30 g białka',
    when: 'Po treningu (do 60 min) lub uzupełnienie posiłku',
    details: 'Norma: 92–119 g/dzień. Jeśli osiągasz to z jedzenia – odżywka zbędna. WPI (izolat) dla nietolerujących laktozy.',
  },
  {
    name: 'Kreatyna monohydrat',
    badge: 'badge-amber' as const,
    verdict: 'Ostrożnie / można',
    desc: 'Najlepiej zbadany suplement sportowy. Krótkoterminowe dane u nastolatków dobre, brak długoterminowych. AAP zaleca ostrożność przed 18 r.ż.',
    dose: '3–5 g dziennie, bez fazy ładowania',
    when: 'Codziennie (nawet bez treningu), po treningu lub wieczorem',
    details: 'Tylko monohydrat – nie kre-alkalyn, nie buforowana. Działa kumulacyjnie. 105 porcji ÷ 1/dzień = ~3,5 miesiąca. Po konsultacji z rodzicem/lekarzem.',
  },
  {
    name: 'Cytrulina malat',
    badge: 'badge-amber' as const,
    verdict: 'Ewentualnie',
    desc: 'Poprawia pompę i wydolność. Brak danych bezpieczeństwa u nastolatków. Nie priorytet – dopiero po wdrożeniu pozostałych.',
    dose: '6–8 g cytruline malate',
    when: '30–45 min przed treningiem (tylko w dni treningowe)',
    details: 'Nie łącz z pre-workoutem z kofeiną. 60 porcji ÷ 4 treningi/tydz. = ~15 tyg. Oba suplementy skończą się mniej więcej jednocześnie.',
  },
  {
    name: 'Pre-workout z kofeiną',
    badge: 'badge-red' as const,
    verdict: 'Nie',
    desc: '150–400 mg kofeiny + stymulanty. Ryzyko wzrostu ciśnienia, arytmii, zaburzeń snu. Brak badań bezpieczeństwa u nastolatków.',
    dose: '–',
    when: '–',
    details: 'Bezwzględnie nie zalecane w tym wieku.',
  },
  {
    name: 'Spalacze tłuszczu',
    badge: 'badge-red' as const,
    verdict: 'Bezwzględnie nie',
    desc: 'Słabo regulowany rynek. Poważne działania niepożądane u nastolatków. Jedyna bezpieczna redukcja: deficyt + trening.',
    dose: '–',
    when: '–',
    details: 'Termogeniki, CLA, synefryna – nie.',
  },
]

export const suppTimeline = [
  { time: 'Rano – przy śniadaniu', name: 'Witamina D3 + K2', detail: '2000–4000 IU D3\n100–200 mcg K2' },
  { time: '30–45 min przed treningiem', name: 'Cytrulina (opcja)', detail: '6–8 g cytruline malate\ntylko w dni treningowe' },
  { time: 'Do 60 min po treningu', name: 'Białko + Kreatyna', detail: '25–30 g białka\n3–5 g kreatyny' },
  { time: 'Do obiadu lub kolacji', name: 'Omega-3', detail: '1–2 g EPA+DHA\ndo tłustego posiłku' },
  { time: '1 godz. przed snem', name: 'Magnez', detail: '200–400 mg\nglicynian lub cytrynian' },
]

export const creatineFaq = [
  { q: 'Czy kreatyna jest bezpieczna dla 15-latka?', a: 'Krótkoterminowe badania (do 12 mies.) nie wykazują działań niepożądanych u nastolatków. Brak długoterminowych danych poniżej 18 r.ż. – stąd zalecenie ostrożności i konsultacji z lekarzem.' },
  { q: 'Czy kreatyna niszczy nerki?', a: 'Mit. Kreatyna nie uszkadza nerek u zdrowych osób. Wieloletnie badania u sportowców tego nie potwierdziły. Przy 2+ l wody/dzień – bezpieczna.' },
  { q: 'Czy kreatyna to steryd?', a: 'Nie. Kreatyna to naturalny związek produkowany przez organizm i obecny w mięsie. Nic wspólnego ze steroidami anabolicznymi.' },
  { q: 'Czy potrzebna faza ładowania?', a: 'Nie. 3–5 g/dzień przez 3–4 tygodnie daje ten sam efekt. Faza ładowania (20 g/dzień) skraca czas saturacji, ale powoduje wzdęcia.' },
  { q: 'Jaka forma kreatyny?', a: 'Tylko monohydrat. Kre-alkalyn, buforowana, HCL – brak dowodów przewagi przy wyższej cenie. Monohydrat ma 100+ lat badań.' },
]
