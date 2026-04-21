# Fonts

The Trainer Page brand uses a single typeface: **League Spartan**.

- **Source:** [Google Fonts — League Spartan](https://fonts.google.com/specimen/League+Spartan)
- **License:** SIL Open Font License 1.1 — free for commercial use, including embedding and redistribution.

## Why no font files in this repo?

We load League Spartan from Google Fonts in production, which keeps the repo light and ensures we always serve the canonical version. If you need local files (for offline design work, print, or self-hosting), download from Google Fonts directly.

## If self-hosting

To self-host (for privacy / GDPR reasons or to eliminate the Google Fonts request), use the [google-webfonts-helper](https://gwfh.mranftl.com/fonts/league-spartan) tool to generate WOFF2 files and the matching `@font-face` CSS, then drop those files into this directory and commit them.
