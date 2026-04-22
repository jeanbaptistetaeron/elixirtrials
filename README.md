# ElixirTrials

## Project structure

```
elixirtrials/
├── index.html          ← all content / markup
├── css/
│   ├── tokens.css      ← SINGLE SOURCE OF TRUTH (margins, gaps, colors, type)
│   └── main.css        ← layout and component styles
├── js/
│   └── main.js         ← interactions
├── fonts/
│   ├── MartinaPlan-Regular.woff2     ← drop here
│   └── RHPhonic-Regular.woff2        ← drop here
└── images/
    ├── hero.png         ← drop illustrations here
    ├── stats.png
    ├── broken.png
    ├── maria.png
    ├── system.png
    ├── magic.png
    ├── cauldron.png
    ├── rebuilding.png
    ├── heather.jpg
    └── noah.jpg
```

## To change layout rules

Open `css/tokens.css` and edit the variables at the top.
Everything — card sizes, gaps, margins — cascades from there.

## Key rules

- Mobile: no margin, 1 column, 60px gap between cards, all cards 3:4 ratio
- Tablet: 2 columns, 20px margin
- Desktop: 6 columns, 30px margin, 15px gutter
- All card heights are derived from width × 4/3
- Split cards (6-col) recompose to two stacked halves on mobile

## Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to netlify.com → Add new site → Import from GitHub
3. Build command: (leave blank)
4. Publish directory: `.` (root)
5. Deploy

No build step needed — pure HTML/CSS/JS.

## Font file names

If your .woff2 files have different names, update the `@font-face` src in `css/tokens.css`.
