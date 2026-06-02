# Image Replacement Specification

This document is the single source of truth for replacing every placeholder image in the **Local Explorer** travel-agency site (`/img/*.svg`).

A future AI agent should be able to drop a full set of final images into the `img/` folder (or an `img/final/` folder, with the same filenames) and the site will be complete. No code changes are required — only the binary assets need to be swapped.

> **Replacement rule:** keep each `<filename>` exactly the same. If you keep the `.svg` extension the components pick them up automatically. If you swap to `.jpg` / `.webp` / `.png`, search-and-replace the extensions in the source files listed in **Source** below.

---

## Table of Contents

| # | Filename | Page | Section | Dimensions | Ratio | Priority |
|---|---|---|---|---|---|---|
| 1 | `hero-landing.svg` | Home | Hero | 1600 × 2400 | 2:3 | Critical |
| 2 | `kyoto-autumn-path.svg` | Home / Destinations | Highlights card / Feature card | 1600 × 1000 | 8:5 | Critical |
| 3 | `about-story.svg` | Home / About | Highlights card / Story CTA | 1800 × 1000 | 9:5 | Important |
| 4 | `journal-hero-valley.svg` | Home / Journal | Highlights card / Journal hero | 1600 × 900 | 16:9 | Critical |
| 5 | `about-philosophy.svg` | About | Philosophy | 1200 × 1500 | 4:5 | Important |
| 6 | `curator-marcus.svg` | About | Curators | 900 × 1200 | 3:4 | Important |
| 7 | `curator-elena.svg` | About | Curators | 900 × 1200 | 3:4 | Important |
| 8 | `curator-siddharth.svg` | About | Curators | 900 × 1200 | 3:4 | Important |
| 9 | `curator-chloe.svg` | About | Curators | 900 × 1200 | 3:4 | Important |
| 10 | `montana-glacier-valley.svg` | Destinations | Feature card (Glacier Valley) | 1200 × 1600 | 3:4 | Important |
| 11 | `guilin-emerald-curve.svg` | Destinations | Secondary grid (Emerald Curve) | 1400 × 1400 | 1:1 | Important |
| 12 | `tours-zen-pathway.svg` | Tours | The Zen Pathway (Kyoto) | 900 × 1200 | 3:4 | Important |
| 13 | `tours-karst-frontier.svg` | Tours | Karst Frontier (Guilin) | 900 × 1200 | 3:4 | Important |
| 14 | `tours-summit-serenity.svg` | Tours | Summit Serenity (Banff) | 900 × 1200 | 3:4 | Important |
| 15 | `tours-aegean-flavors.svg` | Tours | Aegean Flavors (Santorini) | 900 × 1200 | 3:4 | Important |
| 16 | `tours-coastal-highway.svg` | Tours | Coastal Highway (California) | 900 × 1200 | 3:4 | Important |
| 17 | `journal-kyoto-story.svg` | Journal | Featured story (Kyoto) | 1400 × 900 | 14:9 | Important |
| 18 | `journal-paris-cafe.svg` | Journal | Side story (Paris cafés) | 900 × 1200 | 3:4 | Optional |
| 19 | `journal-canadian-rockies.svg` | Journal | Story card (Canadian Rockies) | 900 × 1200 | 3:4 | Optional |
| 20 | `journal-santorini-domes.svg` | Journal | Story card (Santorini domes) | 900 × 1200 | 3:4 | Optional |
| 21 | `editorial-hero-valley.svg` | Editorial | Hero (Travel Tales) | 1600 × 900 | 16:9 | Important |
| 22 | `editorial-kyoto-story.svg` | Editorial | Featured story (Kyoto) | 1400 × 900 | 14:9 | Optional |
| 23 | `editorial-paris-cafe.svg` | Editorial | Side story (Paris cafés) | 900 × 1200 | 3:4 | Optional |
| 24 | `editorial-canadian-rockies.svg` | Editorial | Story card (Canadian Rockies) | 900 × 1200 | 3:4 | Optional |
| 25 | `editorial-santorini-domes.svg` | Editorial | Story card (Santorini domes) | 900 × 1200 | 3:4 | Optional |

**Total unique placeholders:** 25 (4 are reused across two pages).

---

## Asset Specification

### 1. `hero-landing.svg`

- **Page:** Home
- **Section:** Hero (`/`)
- **Dimensions:** 1600 × 2400 px
- **Aspect ratio:** 1.500 (2:3)
- **Orientation:** Portrait
- **Priority:** Critical
- **Source:** `src/pages/Home.jsx:35` — `src="/img/hero-landing.svg"`
- **Style applied:** `width:100%; height:100%; object-fit:cover;` (`Home.module.css` `.heroImage`); renders edge-to-edge with a dark gradient overlay.
- **Purpose:** Primary above-the-fold visual on the landing page. Sets the entire tone of the brand.
- **Recommended subject:** Cinematic mountain landscape (glacial valley, dawn light, low clouds) with a single small human or none — luxury-travel atmosphere, no crowds, no logos, no text in the frame.
- **Replacement notes:** A dark bottom band is overlaid; safe to keep detail in the upper 60 % of the frame.

---

### 2. `kyoto-autumn-path.svg`

- **Page:** Home / Destinations
- **Section:** Highlights card "Destinations" / Destinations feature card "The Autumn Path"
- **Dimensions:** 1600 × 1000 px
- **Aspect ratio:** 1.600 (8:5)
- **Orientation:** Landscape
- **Priority:** Critical
- **Source:**
  - `src/pages/Home.jsx:9` — `image: "/img/kyoto-autumn-path.svg"` (Destinations highlight)
  - `src/pages/Destinations.jsx:21` — feature grid, large card
- **Style applied:** `object-fit:cover; width:100%; height:100%;` (Highlight image + feature card).
- **Purpose:** Signature Kyoto destination image. Reused on the home page highlights strip and as the lead card on the Destinations page.
- **Recommended subject:** A maple- or ginkgo-lined path in Kyoto during peak autumn (red / orange foliage), with a traditional wooden torii gate or stone lantern visible. No people in the foreground; soft natural light.
- **Replacement notes:** White text "THE AUTUMN PATH" is overlaid on the lower portion. Keep contrast / negative space at the bottom-left for legibility.

---

### 3. `about-story.svg`

- **Page:** Home / About
- **Section:** Highlights card "Tours" / About page "Start Your Story" CTA banner
- **Dimensions:** 1800 × 1000 px
- **Aspect ratio:** 1.800 (9:5)
- **Orientation:** Landscape
- **Priority:** Important
- **Source:**
  - `src/pages/Home.jsx:16` — `image: "/img/about-story.svg"` (Tours highlight)
  - `src/pages/About.jsx:126` — `.storyImage` CTA banner
- **Style applied:** `aspect-ratio:18/7; object-fit:cover;` on About (`.storyImage`); `object-fit:cover` as a square-ish card on Home. **Important:** the CSS `aspect-ratio` is `18:7` (≈ 2.57:1), not 9:5. Crop to keep the strongest content in the horizontal center band.
- **Purpose:** A wide, cinematic invitation to start your own journey. Anchors the "Start Your Story" CTA on the About page and the Tours highlight on the home page.
- **Recommended subject:** A single traveler on a dramatic overlook (cliff, desert dune, or mountain ridge) at golden hour. Editorial, contemplative mood. Keep the center horizontally open.
- **Replacement notes:** Large white centered text overlays the image — favor compositions with a darker or simpler center band.

---

### 4. `journal-hero-valley.svg`

- **Page:** Home / Journal
- **Section:** Highlights card "Journal" / Journal hero "Travel Tales"
- **Dimensions:** 1600 × 900 px
- **Aspect ratio:** 1.778 (16:9)
- **Orientation:** Landscape
- **Priority:** Critical
- **Source:**
  - `src/pages/Home.jsx:23` — `image: "/img/journal-hero-valley.svg"` (Journal highlight)
  - `src/pages/Journal.jsx:11` — Journal hero image
- **Style applied:** `width:100%; height:720px; object-fit:cover;` on Journal; highlighted on Home. Hero is fixed-height 720 px → crop the strongest content in the upper half.
- **Purpose:** The hero for the editorial Journal page. Sets the magazine tone.
- **Recommended subject:** A wide, atmospheric landscape — a quiet glacial valley, mist over a river, or a foggy ridge at dawn. No people, no text in the frame. Editorial / National Geographic mood.
- **Replacement notes:** White copy block sits in the lower-left ("TRAVEL TALES"). Keep the lower-left quieter / darker.

---

### 5. `about-philosophy.svg`

- **Page:** About
- **Section:** Philosophy ("Our Philosophy")
- **Dimensions:** 1200 × 1500 px
- **Aspect ratio:** 1.250 (4:5)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/About.jsx:48` — `src="/img/about-philosophy.svg"`
- **Style applied:** `width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:0.9rem;`
- **Purpose:** Editorial portrait that sits beside the "Our Philosophy" copy. Communicates the human / local side of the brand.
- **Recommended subject:** A founder / guide figure, mid-candid, in a real travel setting (walking a market, talking to a local, examining a map). Natural light. Avoid studio poses.
- **Replacement notes:** Image is cropped to 4:5; faces should sit in the upper third.

---

### 6. `curator-marcus.svg`

- **Page:** About
- **Section:** Curators — Founder & CEO (Marcus Thorne)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/About.jsx:7` — `image: "/img/curator-marcus.svg"`
- **Style applied:** `width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:0.45rem;`
- **Purpose:** Headshot of Marcus Thorne.
- **Recommended subject:** Professional portrait of a male founder, late 30s, dressed in travel-ready smart casual, against a blurred outdoor background (mountain / cityscape). Head-and-shoulders or 3/4 framing.
- **Replacement notes:** Keep the face in the upper-center 60 % of the frame; the lower 40 % is card background, no text overlay.

---

### 7. `curator-elena.svg`

- **Page:** About
- **Section:** Curators — Head of Content (Elena Rossi)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/About.jsx:12` — `image: "/img/curator-elena.svg"`
- **Style applied:** `width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:0.45rem;`
- **Purpose:** Headshot of Elena Rossi.
- **Recommended subject:** Professional portrait of a female editor / writer, holding a notebook or camera, outdoor light. Head-and-shoulders or 3/4 framing.
- **Replacement notes:** Same as curator-marcus; face in upper-center.

---

### 8. `curator-siddharth.svg`

- **Page:** About
- **Section:** Curators — Lead Expeditionist (Siddharth Mehta)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/About.jsx:17` — `image: "/img/curator-siddharth.svg"`
- **Style applied:** `width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:0.45rem;`
- **Purpose:** Headshot of Siddharth Mehta.
- **Recommended subject:** Professional portrait of a male expedition leader in field gear, mountain or jungle backdrop. Head-and-shoulders or 3/4 framing.
- **Replacement notes:** Same as the other curator cards.

---

### 9. `curator-chloe.svg`

- **Page:** About
- **Section:** Curators — Operations Director (Chloe Chen)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/About.jsx:22` — `image: "/img/curator-chloe.svg"`
- **Style applied:** `width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:0.45rem;`
- **Purpose:** Headshot of Chloe Chen.
- **Recommended subject:** Professional portrait of a female operations lead, neutral or business-casual styling, indoor or city backdrop. Head-and-shoulders or 3/4 framing.
- **Replacement notes:** Same as the other curator cards.

---

### 10. `montana-glacier-valley.svg`

- **Page:** Destinations
- **Section:** Feature card "Glacier Valley" (Montana, USA)
- **Dimensions:** 1200 × 1600 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Destinations.jsx:33` — `src="/img/montana-glacier-valley.svg"`
- **Style applied:** `object-fit:cover;` inside `aspect-ratio:3/4` card. Bottom-left has a white "MONTANA, USA" tag and a "GLACIER VALLEY" title overlay.
- **Purpose:** Tall card showing the Montana destination.
- **Recommended subject:** Snow-capped mountain peaks above a glacial valley, a winding river, no buildings. Cold blue / white palette.
- **Replacement notes:** Title is at the bottom; keep the lower portion visually quiet.

---

### 11. `guilin-emerald-curve.svg`

- **Page:** Destinations
- **Section:** Secondary grid "The Emerald Curve" (Guilin, China)
- **Dimensions:** 1400 × 1400 px
- **Aspect ratio:** 1.000 (1:1)
- **Orientation:** Square
- **Priority:** Important
- **Source:** `src/pages/Destinations.jsx:56` — `src="/img/guilin-emerald-curve.svg"`
- **Style applied:** `aspect-ratio:1/1; object-fit:cover;` square card. "GUILIN, CHINA" tag in the top-right corner; title "THE EMERALD CURVE" in the bottom-left.
- **Purpose:** Square card for the Guilin expedition.
- **Recommended subject:** The Li River's famous curve at sunrise/mist, karst peaks rising from emerald water, ideally with a single traditional bamboo raft for scale.
- **Replacement notes:** A small label sits in the top-right corner — keep the upper-right area low-detail (sky / smooth rock, not busy foliage).

---

### 12. `tours-zen-pathway.svg`

- **Page:** Tours
- **Section:** Tour card "The Zen Pathway" (Kyoto, Japan — Cultural, 4 days)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Tours.jsx:10` — `image: "/img/tours-zen-pathway.svg"`
- **Style applied:** `aspect-ratio:0.78; filter:grayscale(1); object-fit:cover;` inside a 3-up tour card. Bottom overlay contains title, duration, and price.
- **Purpose:** Tour card image for the Kyoto cultural tour.
- **Recommended subject:** A meditative Kyoto scene — a stone path through a bamboo grove, a moss garden, or a temple gate in fog. Quiet, restrained, monochrome-friendly.
- **Replacement notes:** A grayscale filter is applied at the CSS level, so a color or monochrome source both work.

---

### 13. `tours-karst-frontier.svg`

- **Page:** Tours
- **Section:** Tour card "Karst Frontier" (Guilin, China — Jeep Ride, 6 days)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Tours.jsx:18` — `image: "/img/tours-karst-frontier.svg"`
- **Style applied:** `aspect-ratio:0.78; filter:grayscale(1); object-fit:cover;`
- **Purpose:** Tour card image for the Guilin jeep tour.
- **Recommended subject:** Guilin karst peaks at sunrise or under heavy clouds, ideally with a single 4×4 vehicle in the lower third for scale.
- **Replacement notes:** Grayscale filter is applied; subject should have strong silhouette/contrast.

---

### 14. `tours-summit-serenity.svg`

- **Page:** Tours
- **Section:** Tour card "Summit Serenity" (Banff, Canada — Hiking, 5 days)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Tours.jsx:26` — `image: "/img/tours-summit-serenity.svg"`
- **Style applied:** `aspect-ratio:0.78; filter:grayscale(1); object-fit:cover;`
- **Purpose:** Tour card image for the Banff hiking tour.
- **Recommended subject:** A lone hiker on a snow-dusted Canadian Rockies ridge, or a wide alpine summit view with no people.
- **Replacement notes:** Grayscale filter is applied; favor textures (rock, snow, ice) over busy detail.

---

### 15. `tours-aegean-flavors.svg`

- **Page:** Tours
- **Section:** Tour card "Aegean Flavors" (Santorini, Greece — Gastronomy, 3 days)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Tours.jsx:34` — `image: "/img/tours-aegean-flavors.svg"`
- **Style applied:** `aspect-ratio:0.78; filter:grayscale(1); object-fit:cover;`
- **Purpose:** Tour card image for the Santorini gastronomy tour.
- **Recommended subject:** A Santorini table spread (olives, feta, fresh bread) on a whitewashed terrace, with a single blue dome or the caldera in soft focus behind.
- **Replacement notes:** Grayscale filter is applied.

---

### 16. `tours-coastal-highway.svg`

- **Page:** Tours
- **Section:** Tour card "Coastal Highway" (California, USA — Jeep Ride, 7 days)
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Important
- **Source:** `src/pages/Tours.jsx:42` — `image: "/img/tours-coastal-highway.svg"`
- **Style applied:** `aspect-ratio:0.78; filter:grayscale(1); object-fit:cover;`
- **Purpose:** Tour card image for the California coastal jeep tour.
- **Recommended subject:** A Big Sur / Pacific Coast Highway curve with cliffs, ocean, and ideally a single open-top vehicle.
- **Replacement notes:** Grayscale filter is applied; favor strong horizon lines.

---

### 17. `journal-kyoto-story.svg`

- **Page:** Journal
- **Section:** Featured story "The Silence of Higashiyama" (Kyoto, Japan)
- **Dimensions:** 1400 × 900 px
- **Aspect ratio:** 1.556 (14:9)
- **Orientation:** Landscape
- **Priority:** Important
- **Source:** `src/pages/Journal.jsx:45` — `src="/img/journal-kyoto-story.svg"`
- **Style applied:** `width:100%; height:390px; object-fit:cover;` (fixed crop height). Tag "KYOTO, JAPAN" sits in the top-left.
- **Purpose:** Lead image for the featured Kyoto editorial story.
- **Recommended subject:** A Higashiyama stone path at dawn — empty, misty, with a wooden façade, paper lantern, or a figure from behind. Quiet, contemplative.
- **Replacement notes:** Tag overlay in the top-left; keep that area visually simple.

---

### 18. `journal-paris-cafe.svg`

- **Page:** Journal
- **Section:** Side story "7 Cafes in Paris That Tourists Always Miss"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Journal.jsx:62` — `src="/img/journal-paris-cafe.svg"`
- **Style applied:** `width:100%; height:270px; object-fit:cover;` (cropped to landscape on screen but asset is portrait — see notes).
- **Purpose:** Visual for the Paris cafés side story.
- **Recommended subject:** A single espresso on a marble bistro table, with a Parisian façade softly blurred behind. Warm, intimate, morning light.
- **Replacement notes:** Cropped to ~270 px tall on the page; provide a generous vertical buffer (sky / floor) in the source.

---

### 19. `journal-canadian-rockies.svg`

- **Page:** Journal
- **Section:** Story card "Wild Peaks: Solo Trekking the Canadian Rockies"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Journal.jsx:72` — `src="/img/journal-canadian-rockies.svg"`
- **Style applied:** `width:100%; height:260px; object-fit:cover;` (cropped landscape at render).
- **Purpose:** Adventure story card image.
- **Recommended subject:** A turquoise glacier lake (Peyto, Moraine, or similar) framed by pine forest and Rockies peaks, no people.
- **Replacement notes:** Provide vertical breathing room in the source.

---

### 20. `journal-santorini-domes.svg`

- **Page:** Journal
- **Section:** Story card "Beyond the Blue Domes: Oia's Secret Alleyways"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Journal.jsx:86` — `src="/img/journal-santorini-domes.svg"`
- **Style applied:** `width:100%; height:260px; object-fit:cover;` (cropped landscape at render).
- **Purpose:** Local guides story card image.
- **Recommended subject:** A classic Santorini blue dome with the caldera in the background at golden hour, or a narrow Oia alleyway with bougainvillea.
- **Replacement notes:** Provide vertical breathing room in the source.

---

### 21. `editorial-hero-valley.svg`

- **Page:** Editorial
- **Section:** Hero "Travel Tales"
- **Dimensions:** 1600 × 900 px
- **Aspect ratio:** 1.778 (16:9)
- **Orientation:** Landscape
- **Priority:** Important
- **Source:** `src/pages/Editorial.jsx:11` — `src="/img/editorial-hero-valley.svg"`
- **Style applied:** `width:100%; height:720px; object-fit:cover;` (identical class to the Journal hero).
- **Purpose:** The hero for the editorial Editorial page. Visually similar in role to `journal-hero-valley.svg` but should be a distinct composition.
- **Recommended subject:** A different sweeping landscape from the Journal hero — a coastline, a desert canyon, or a forest valley in autumn. Editorial / cinematic mood.
- **Replacement notes:** White copy block sits in the lower-left ("TRAVEL TALES"). Keep the lower-left quieter / darker.

---

### 22. `editorial-kyoto-story.svg`

- **Page:** Editorial
- **Section:** Featured story "The Silence of Higashiyama"
- **Dimensions:** 1400 × 900 px
- **Aspect ratio:** 1.556 (14:9)
- **Orientation:** Landscape
- **Priority:** Optional
- **Source:** `src/pages/Editorial.jsx:45` — `src="/img/editorial-kyoto-story.svg"`
- **Style applied:** `width:100%; height:390px; object-fit:cover;`
- **Purpose:** Editorial lead image. Should differ from the Journal equivalent (`journal-kyoto-story.svg`) — alternate angle, time of day, or season.
- **Recommended subject:** Kyoto autumn or winter — red maples, a temple bell, a kimono silhouette from behind.
- **Replacement notes:** Tag overlay in the top-left.

---

### 23. `editorial-paris-cafe.svg`

- **Page:** Editorial
- **Section:** Side story "7 Cafes in Paris That Tourists Always Miss"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Editorial.jsx:62` — `src="/img/editorial-paris-cafe.svg"`
- **Style applied:** `width:100%; height:270px; object-fit:cover;`
- **Purpose:** Visual for the Paris cafés side story. Distinct from `journal-paris-cafe.svg`.
- **Recommended subject:** A different Paris scene — a Left Bank bookshop, a wine bar at dusk, or a hand holding a croissant against cobblestones.
- **Replacement notes:** Provide vertical buffer in the source.

---

### 24. `editorial-canadian-rockies.svg`

- **Page:** Editorial
- **Section:** Story card "Wild Peaks: Solo Trekking the Canadian Rockies"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Editorial.jsx:72` — `src="/img/editorial-canadian-rockies.svg"`
- **Style applied:** `width:100%; height:260px; object-fit:cover;`
- **Purpose:** Adventure story card. Should differ from `journal-canadian-rockies.svg`.
- **Recommended subject:** A hiking trail disappearing into alpine pines, a tent under stars, or a climber silhouetted on a ridge.
- **Replacement notes:** Provide vertical buffer in the source.

---

### 25. `editorial-santorini-domes.svg`

- **Page:** Editorial
- **Section:** Story card "Beyond the Blue Domes: Oia's Secret Alleyways"
- **Dimensions:** 900 × 1200 px
- **Aspect ratio:** 1.333 (3:4)
- **Orientation:** Portrait
- **Priority:** Optional
- **Source:** `src/pages/Editorial.jsx:86` — `src="/img/editorial-santorini-domes.svg"`
- **Style applied:** `width:100%; height:260px; object-fit:cover;`
- **Purpose:** Local guides story card. Should differ from `journal-santorini-domes.svg`.
- **Recommended subject:** A Santorini interior — whitewashed stairs, a blue-shuttered door, a cat on a wall, or a candlelit taverna terrace.
- **Replacement notes:** Provide vertical buffer in the source.

---

## Replacement Workflow (for the next AI agent)

1. **Read** this file end-to-end.
2. **For each** entry above, generate or source a final image that matches the **Dimensions**, **Aspect ratio**, **Orientation**, and **Recommended subject**.
3. **Export** each file with the same filename, keeping the extension `.svg` (or update the `Source` references in the JSX if you switch to `.jpg` / `.webp`).
4. **Drop** the new files into the `img/` folder, overwriting the gray placeholder SVGs.
5. **Verify** by running `npm run dev` and visiting `/`, `/about`, `/destinations`, `/tours`, `/journal`, `/editorial`.

### Critical / Important / Optional — what to ship first

- **Critical (4 images)** — ship first; the site looks broken without them:
  `hero-landing.svg`, `kyoto-autumn-path.svg`, `journal-hero-valley.svg`, and one of `editorial-hero-valley.svg` is the page-level hero for the Editorial route.
- **Important (14 images)** — ship next; card grids and CTA banners.
- **Optional (7 images)** — editorial secondary cards; can ship as placeholders without harming first impression.

### Reused files (single source, two appearances)

Four filenames are referenced from two different pages. Swapping them once updates both:

| Filename | Used in |
|---|---|
| `kyoto-autumn-path.svg` | Home (highlights) + Destinations (feature card) |
| `about-story.svg` | Home (highlights) + About (story CTA banner) |
| `journal-hero-valley.svg` | Home (highlights) + Journal (hero) |
| `editorial-hero-valley.svg` | Editorial only (no reuse; the Journal twin is `journal-hero-valley.svg`) |
