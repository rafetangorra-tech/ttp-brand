# Current Tech Stack

Snapshot of the live site as of 2026-04-20.

## Platform

- **CMS:** WordPress 6.9.1
- **Theme:** Divi (parent) + Divi Child v4.24.2.1709290893
- **Page Builder:** Divi Builder (native to Divi)
- **Hosting signals:** WP Rocket caching (`wp-content/cache/min/1/`), Rocket Lazy Load

## Plugins Detected

| Plugin | Purpose |
|---|---|
| Gravity Forms 2.8.18 | Lead capture / contact forms |
| Popup Maker | Modal popups |
| Instagram Feed (SBI) | Instagram embed on site |
| Custom Twitter Feeds | X/Twitter embed (unclear if active) |
| Smash Balloon Reviews Feed | Review display |
| Divi Carousel (dg-carousel) | Content carousels |
| Google reCAPTCHA | Form spam protection |
| Google Tag Manager | Analytics / pixel management |

## Typography Loading

League Spartan is loaded via Google Fonts:

```
https://fonts.googleapis.com/css?family=League+Spartan:100,200,300,regular,500,600,700,800,900&subset=latin,latin-ext,vietnamese&display=swap
```

## Observations / Recommendations

- **No vector logo** is served — the primary logo is a 4KB PNG. Adding an SVG would sharpen display at all sizes.
- **Image sizes** look raw (some hero JPGs are 700KB+). WebP conversion + responsive `srcset` would cut page weight significantly.
- **Theme is 1+ year behind** on Divi updates; worth reviewing for security.
- **LocalBusiness JSON-LD** is missing — adding it would improve Google Maps / local SEO.
