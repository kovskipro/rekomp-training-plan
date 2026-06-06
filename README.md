# Plan Treningowy – Next.js App

Kompleksowy, responsywny plan treningowy dla 15-latka. Zbudowany w Next.js 14 z App Router, TypeScript i Tailwind CSS.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

### Opcja 1 – GitHub (zalecane)
1. Wrzuć ten folder na GitHub (nowe repozytorium)
2. Zaloguj się na [vercel.com](https://vercel.com)
3. Kliknij **Add New Project** → Import z GitHub
4. Vercel automatycznie wykryje Next.js i zadeploy

### Opcja 2 – Vercel CLI
```bash
npm install -g vercel
vercel
```

## Struktura projektu

```
app/
├── layout.tsx          # Root layout z fontami
├── page.tsx            # Strona główna z headerem
├── globals.css         # Style globalne + Tailwind
├── data.ts             # Wszystkie dane planu (ćwiczenia, suplementy itd.)
└── components/
    ├── TabNav.tsx       # Nawigacja zakładkami (client)
    ├── Badge.tsx        # Kolorowe etykiety
    ├── Callout.tsx      # Bloki informacyjne
    ├── ExerciseTable.tsx # Tabela ćwiczeń (responsywna)
    ├── SchemataPanel.tsx # Schematy A/B/C
    ├── PlanPanel.tsx    # Plan tygodniowy
    ├── WarmupPanel.tsx  # Rozgrzewka i schłodzenie
    ├── ProgresjaPanel.tsx # Progresja 8-tygodniowa
    ├── RegeneracjaPanel.tsx # Regeneracja i dieta
    └── SuplementyPanel.tsx # Suplementy
```

## Technologie

- **Next.js 14** – App Router, Server Components
- **TypeScript** – pełne typowanie
- **Tailwind CSS** – responsywność, dark mode ready
- **Google Fonts** – Instrument Serif + DM Sans + DM Mono
