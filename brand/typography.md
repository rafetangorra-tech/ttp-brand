# Typography

## Primary Typeface: League Spartan

A geometric sans-serif with strong, confident letterforms — fits the high-energy, no-nonsense voice of The Trainer Page.

- **Source:** [Google Fonts — League Spartan](https://fonts.google.com/specimen/League+Spartan)
- **License:** SIL Open Font License 1.1 (free for commercial use)
- **Weights in use:** 100, 200, 300, 400 (regular), 500, 600, 700, 800, 900
- **Subsets:** Latin, Latin Extended, Vietnamese

### Loading (Google Fonts CDN)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### CSS

```css
body {
  font-family: 'League Spartan', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  color: var(--ttp-navy);
}
```

## Type Scale

| Role | Weight | Size (px) | Size (rem) | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display / Hero | 900 | 72 | 4.5 | 1.05 | -0.02em |
| H1 | 800 | 56 | 3.5 | 1.1 | -0.01em |
| H2 | 700 | 40 | 2.5 | 1.15 | -0.01em |
| H3 | 700 | 28 | 1.75 | 1.2 | 0 |
| H4 | 600 | 22 | 1.375 | 1.3 | 0 |
| Body Large | 400 | 18 | 1.125 | 1.55 | 0 |
| Body | 400 | 16 | 1.0 | 1.6 | 0 |
| Small | 400 | 14 | 0.875 | 1.5 | 0.01em |
| Micro / Meta | 500 | 12 | 0.75 | 1.4 | 0.05em UPPERCASE |
| Button | 700 | 14–16 | – | 1 | 0.08em UPPERCASE |

## Pairing Recommendations

Headlines use heavy weights (800–900) to feel athletic and declarative.
Body copy sits at 400 for readability. Buttons and meta labels use uppercase with extra letter spacing for a gym-signage feel.

## Do / Don't

**Do**
- Use weight 800–900 for hero headlines.
- Set buttons and tags in ALL CAPS with tracking.
- Combine heavy headlines with light (300) supporting text for contrast.

**Don't**
- Mix League Spartan with other sans-serifs. Stick to this single family.
- Use italics — League Spartan has no true italic cut.
- Drop below weight 300 for body text — it becomes illegible on red.
