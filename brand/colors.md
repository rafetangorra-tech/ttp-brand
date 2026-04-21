# Color Palette

The Trainer Page color system is built for impact: high-energy reds as the hero, a deep navy for grounding, and clean neutrals for breathing room.

## Primary

### TTP Red
The dominant brand color. Use for CTAs, section accents, and moments that need energy.

| Format | Value |
|---|---|
| HEX | `#C60101` |
| RGB | `198, 1, 1` |
| HSL | `0°, 99%, 39%` |
| CMYK | `0, 99, 99, 22` |

### Ignite Red
A brighter, more saturated red for highlights, hover states, and secondary emphasis.

| Format | Value |
|---|---|
| HEX | `#FF2504` |
| RGB | `255, 37, 4` |
| HSL | `8°, 100%, 51%` |

## Secondary

### Depth Navy
Grounding dark for body text on light backgrounds, dark hero sections, and footer.

| Format | Value |
|---|---|
| HEX | `#112337` |
| RGB | `17, 35, 55` |
| HSL | `212°, 53%, 14%` |

## Neutrals

| Name | HEX | RGB | Use |
|---|---|---|---|
| Pure White | `#FFFFFF` | `255, 255, 255` | Backgrounds, reverse text on dark/red |
| True Black | `#000000` | `0, 0, 0` | Reserve for maximum contrast |
| Mist | `#F5F5F5` | `245, 245, 245` | Section backgrounds, cards |
| Fog | `#F4F4F4` | `244, 244, 244` | Subtle surface tone |
| Ash | `#686E77` | `104, 110, 119` | Secondary text, meta info |
| Slate | `#585E6A` | `88, 94, 106` | Muted UI elements |

## Usage Rules

- **60 / 30 / 10 rule:** 60% neutral (white/mist), 30% navy, 10% red accent.
- **Never place Ignite Red on TTP Red** — they vibrate.
- **Red on navy is OK** but use sparingly and only for emphasis.
- **Text on red:** always use white. Never black.
- **Buttons:** primary buttons use `#C60101` with white text; hover → `#FF2504`.

## Design Tokens (CSS)

```css
:root {
  --ttp-red:       #C60101;
  --ttp-red-hover: #FF2504;
  --ttp-navy:      #112337;
  --ttp-black:     #000000;
  --ttp-white:     #FFFFFF;
  --ttp-mist:      #F5F5F5;
  --ttp-fog:       #F4F4F4;
  --ttp-ash:       #686E77;
  --ttp-slate:     #585E6A;
}
```

## Design Tokens (JSON)

```json
{
  "color": {
    "brand": {
      "red":       { "value": "#C60101" },
      "redHover":  { "value": "#FF2504" },
      "navy":      { "value": "#112337" }
    },
    "neutral": {
      "black": { "value": "#000000" },
      "white": { "value": "#FFFFFF" },
      "mist":  { "value": "#F5F5F5" },
      "fog":   { "value": "#F4F4F4" },
      "ash":   { "value": "#686E77" },
      "slate": { "value": "#585E6A" }
    }
  }
}
```
