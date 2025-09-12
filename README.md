# Government Schemes Explorer (Static Site)

A lightweight, static website to browse government schemes by state and type, with multilingual UI (English, Hindi, Tamil).

## Quick start

- Open `index.html` in your browser. No build step is required.

## Features

- Filter by state and scheme type
- Text search across name, description, eligibility, and benefits
- Multilingual UI: English (`en`), Hindi (`hi`), Tamil (`ta`)
- Responsive, accessible cards layout

## Structure

- `index.html` — main page and UI skeleton
- `assets/js/data.js` — scheme data (demo entries)
- `assets/js/i18n.js` — translation strings and helpers
- `assets/js/app.js` — filter logic and rendering
- `assets/css/styles.css` — styles

## Add more schemes

Append entries in `assets/js/data.js`. Each scheme uses this shape:

```js
{
  id: "unique-id",
  state: "Tamil Nadu", // Use "All India" for central schemes
  type: "Education",    // e.g., Education, Health, Agriculture, Women & Child, Senior Citizen, Employment
  name: { en: "...", hi: "...", ta: "..." },
  description: { en: "...", hi: "...", ta: "..." },
  eligibility: { en: "...", hi: "...", ta: "..." },
  benefits: { en: "...", hi: "...", ta: "..." },
  link: "https://official.site" // official source if available
}
```

- For central schemes, set `state` to `All India`. They will appear for any selected state.
- Add more languages by extending `TRANSLATIONS` in `assets/js/i18n.js` and adding keys as needed.

## Add a new language

1. In `assets/js/i18n.js`, add a new language key to `TRANSLATIONS` and provide values.
2. Add an option in the `<select id="language-select">` in `index.html`.
3. Optionally add translations to the `name/description/eligibility/benefits` of each scheme in `assets/js/data.js`.

## Notes

- This is a demo dataset. Replace links and text with authoritative sources.
- No analytics, no cookies beyond the saved language preference in `localStorage`.
