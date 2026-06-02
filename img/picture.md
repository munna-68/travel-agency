# Image Replacement Specification

This document is the single source of truth for replacing every placeholder image in the **Local Explorer** travel-agency site (`/img/*.svg`).

A future AI agent or photographer should be able to read this file end-to-end, then drop a full set of final images into the `img/` folder (keeping the same filenames) and the site will be complete. No code changes are required — only the binary assets need to be swapped.

> **Replacement rule:** keep each `<filename>` exactly the same. If you keep the `.svg` extension the components pick them up automatically. If you swap to `.jpg` / `.webp` / `.png`, search-and-replace the extensions in the source files listed in **Source** below.

---

## Brand & Mood Recap

Before reading the briefs, internalise the brand voice. The site is **Voyage Editorial** — a magazine-style travel agency that frames trips as field journalism, not tourism. The aesthetic is calm, quiet, and "curated by people who've actually been there."

- **Tone of voice:** restrained, literary, second-person ("you wander…", "you arrive…"). Never salesy.
- **Visual mood:** National Geographic meets Aesop. Natural light, no crowds, no logos, no tourists in shot, no stock-photo smiles. The images should look like they were shot by a travel editor on assignment, not a stock library.
- **Color palette across the site:** muted, earthy, slightly desaturated. Sage greens, slate blues, terracotta, oat, charcoal, fog white. Avoid neon, avoid oversaturation, avoid HDR.
- **Composition rule:** leave negative space for headline / tag overlays. The "active" area of the image is usually the upper-right or center; the lower-left is where text typically lives.
- **People rule:** when people appear, they are seen from behind, in profile, or as small silhouettes. No eye contact with the camera. No posed portraits unless it's a curator card.

---

## Table of Contents

| # | Filename | Page | Used in (headline / tag / excerpt) |
|---|---|---|---|
| 1 | `hero-landing.svg` | Home | Hero — brand-level image |
| 2 | `kyoto-autumn-path.svg` | Home / Destinations | "DESTINATIONS" highlight → "THE AUTUMN PATH" |
| 3 | `about-story.svg` | Home / About | "TOURS" highlight → "START YOUR STORY" CTA |
| 4 | `journal-hero-valley.svg` | Home / Journal | "JOURNAL" highlight → "TRAVEL TALES" |
| 5 | `about-philosophy.svg` | About | "OUR PHILOSOPHY" portrait |
| 6 | `curator-marcus.svg` | About | "MARCUS THORNE — FOUNDER & CEO" |
| 7 | `curator-elena.svg` | About | "ELENA ROSSI — HEAD OF CONTENT" |
| 8 | `curator-siddharth.svg` | About | "SIDDHARTH MEHTA — LEAD EXPEDITIONIST" |
| 9 | `curator-chloe.svg` | About | "CHLOE CHEN — OPERATIONS DIRECTOR" |
| 10 | `montana-glacier-valley.svg` | Destinations | "GLACIER VALLEY — MONTANA, USA" |
| 11 | `guilin-emerald-curve.svg` | Destinations | "THE EMERALD CURVE — GUILIN, CHINA" |
| 12 | `tours-zen-pathway.svg` | Tours | "THE ZEN PATHWAY" (Kyoto, 4 days) |
| 13 | `tours-karst-frontier.svg` | Tours | "KARST FRONTIER" (Guilin, 6 days) |
| 14 | `tours-summit-serenity.svg` | Tours | "SUMMIT SERENITY" (Banff, 5 days) |
| 15 | `tours-aegean-flavors.svg` | Tours | "AEGEAN FLAVORS" (Santorini, 3 days) |
| 16 | `tours-coastal-highway.svg` | Tours | "COASTAL HIGHWAY" (California, 7 days) |
| 17 | `journal-kyoto-story.svg` | Journal | "THE SILENCE OF HIGASHIYAMA" |
| 18 | `journal-paris-cafe.svg` | Journal | "7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS" |
| 19 | `journal-canadian-rockies.svg` | Journal | "WILD PEAKS: SOLO TREKKING THE CANADIAN ROCKIES" |
| 20 | `journal-santorini-domes.svg` | Journal | "BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYWAYS" |
| 21 | `editorial-hero-valley.svg` | Editorial | "TRAVEL TALES — VOLUME 04" hero |
| 22 | `editorial-kyoto-story.svg` | Editorial | "THE SILENCE OF HIGASHIYAMA" feature |
| 23 | `editorial-paris-cafe.svg` | Editorial | "7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS" side |
| 24 | `editorial-canadian-rockies.svg` | Editorial | "WILD PEAKS" story card |
| 25 | `editorial-santorini-domes.svg` | Editorial | "BEYOND THE BLUE DOMES" story card |

**Total unique placeholders:** 25 (4 are reused across two pages — see "Reused files" at the bottom).

---

## The Briefs

### 1. `hero-landing.svg`

- **Page:** Home
- **Section:** Hero
- **Source:** `src/pages/Home.jsx` — rendered as the new video poster / fallback (`poster="/img/hero-landing.svg"` is no longer used; the file is now an offline asset for the hero film). Still kept in the repo as a high-resolution hero fallback.
- **Dimensions:** 1600 × 2400 px (2:3, portrait)
- **Priority:** Critical

**Editorial context.** This is the single most important image on the entire site — it sets the brand tone the moment a visitor lands. The site promises "routes worth remembering", "field journal", "a small press of field writers, route designers, and local guides." The hero image must feel like the cover of a quarterly travel journal, not a tourism banner ad.

**Subject.** A single sweeping landscape that could plausibly appear in a printed travel quarterly. Strong options: a glacial valley at first light with low cloud pouring through it; a foggy mountain ridge at dawn seen from a distance; a karst river bend at sunrise with one small boat for scale. No people in the foreground. If a person is included at all, they are a tiny silhouette in the lower 10% of the frame, walking away from the camera.

**Mood & light.** Cool palette — slate blue, charcoal, fog white, with a single warm note (a streak of dawn light, a small lantern, a campfire). The image should feel cold to the eye and quiet to the ear. Avoid golden-hour clichés; this wants pre-dawn blue or overcast silver.

**Framing.** Strong horizon line at the lower third. Sky takes the upper 60% of the frame. The lower-left corner is where the overlay text (kicker + headline) will sit, so keep that quadrant visually quiet — low contrast, soft detail, no busy branches or textural noise.

**Avoid.** Crowds, tourists with cameras, sun flares, lens distortion, oversaturation, tourist-board smiles, anything that reads "trip advisor" rather than "field journal."

---

### 2. `kyoto-autumn-path.svg`

- **Page:** Home (Destinations highlight) + Destinations page (feature card)
- **Used in two places:**
  - Home highlights strip — tag: "DESTINATIONS", heading: "Choose the route that matches your pace.", copy: "Mountain escapes, coastal slow travel, and city-forward itineraries shaped by local knowledge."
  - Destinations feature card — tag: "KYOTO, JAPAN", heading: "THE AUTUMN PATH", intro: "Wander through ancient gateways and witness the seasonal transformation of the imperial city."
- **Source:** `src/data/destinations.js:1` — `slug: "kyoto-autumn-path"`, `bestTime: "OCT — NOV"`, `duration: "6 DAYS"`, `difficulty: "EASY"`, `startingFrom: "$2,180"`.
- **Itinerary details (for mood):** private dawn visit to Fushimi Inari's lesser-trodden paths; tea ceremony with a third-generation Kyoto master; two nights in a restored machiya townhouse in Higashiyama.
- **Dimensions:** 1600 × 1000 px (8:5, landscape)
- **Priority:** Critical

**Subject.** A Kyoto autumn scene at peak colour. A maple- or ginkgo-lined path in Higashiyama or Arashiyama, with red / orange / amber foliage forming a canopy. Visible: a single traditional wooden torii gate, a stone lantern, or a wooden temple façade in the middle distance. The path should lead the eye inward, not stop at a fence.

**Mood.** Quiet, contemplative, slightly melancholic — the "last light of autumn" feel. The seasonal transformation in the copy is the operative phrase; the image should feel like the exact moment when a city has turned and the crowds have not yet arrived.

**Framing.** Path recedes to a vanishing point near the center of the frame. Foliage fills the upper third; path fills the lower two-thirds. On the Home highlights card the title sits in the lower-left; on the Destinations feature card the title sits in the lower-left with a small intro line below. Keep the lower-left quadrant calm.

**Light.** Late afternoon, low side-light catching the leaves. Long soft shadows. No sun in frame. If the leaves are at peak red, the colour should be deep crimson and amber, not fluorescent orange.

**Avoid.** Tourists in groups, school groups, selfie sticks, blue sky with puffy clouds (too cheery), neon signs, modern Tokyo-feel imagery. No bamboo in this shot — that's reserved for the Zen Pathway tour.

---

### 3. `about-story.svg`

- **Page:** Home (Tours highlight) + About (story CTA banner)
- **Used in two places:**
  - Home highlights strip — tag: "TOURS", heading: "Guided experiences with editorial restraint.", copy: "Small-group journeys designed around texture, timing, and access instead of generic checklists."
  - About page CTA banner — heading: "START YOUR STORY", CTA: "EXPLORE TOURS →".
- **Source:** `src/pages/About.jsx:115-129` — `<section className={styles.story}>` with `.storyImage` rendered at `aspect-ratio: 18/7` (very wide, ~2.57:1).
- **Dimensions:** 1800 × 1000 px (9:5 source; rendered crop is ~18:7)
- **Priority:** Important

**Subject.** A single traveler on a dramatic overlook at golden hour. The figure should be seen from behind, small in the frame, looking out at a vast landscape — a desert dune, a cliff edge in Big Sur, a mountain ridge in the Dolomites, a Tibetan plateau. They carry a small daypack, no flag, no selfie stick. The narrative implication is "this is the trip you're about to take."

**Mood.** Quiet triumph. The kind of moment a person wants to remember — solitary, on a high edge, with the world below.

**Framing.** Horizontal thirds: sky upper third, horizon middle, foreground with figure lower third. The figure sits roughly at the lower-left or lower-right intersection (rule of thirds), and the rest of the frame is open landscape. The About-page overlay ("START YOUR STORY" + CTA) is centered and white; the source image should have a darker or simpler center band so the white text reads cleanly.

**Light.** Warm, side-lit, low sun. Long shadows. If clouds are present they should be high cirrus, not dramatic storm.

**Avoid.** Couple in shot (the brand is solo-curious, not couple-coded), camera pointed at the photographer, bright midday light, urban environment.

---

### 4. `journal-hero-valley.svg`

- **Page:** Home (Journal highlight) + Journal (hero)
- **Used in two places:**
  - Home highlights strip — tag: "JOURNAL", heading: "Stories from the places that shape the brand.", copy: "Notes, field dispatches, and quiet observations from the people and landscapes behind the routes."
  - Journal page hero — kicker: "VOLUME 04 / EDITORIAL SERIES", heading: "TRAVEL TALES", copy: "Immersive stories from the edge of the world, curated for those who seek the authentic, the hidden, and the sublime."
- **Source:** `src/pages/Journal.jsx:14-25` — `.heroImage` rendered at `width:100%; height:720px; object-fit:cover;` (fixed-height crop).
- **Dimensions:** 1600 × 900 px (16:9)
- **Priority:** Critical

**Subject.** A wide, atmospheric landscape with a single strong vertical element. Best options: a quiet glacial valley with mist hovering over a slow river; a foggy ridge at dawn with one stand of trees silhouetted; a wide coastal curve with low cloud sitting on the headland. The vertical element (a single tree, a small chapel on a ridge, a lone standing stone) is what gives the image its "cover" weight.

**Mood.** Editorial, cinematic, almost still. The image should feel like the moment a magazine chooses for its cover — not the loudest shot from the trip, the one with the most breath in it.

**Framing.** Wide horizontal, the vertical element offset to roughly the left third. Sky takes the upper half. The Journal hero has a copy block in the lower-left ("TRAVEL TALES" + supporting paragraph), so the lower-left must be quiet — soft mist, smooth water, or open grass. The right two-thirds of the frame is the "open" area where the eye can rest.

**Light.** Overcast, fog, or pre-dawn. Avoid direct sun in frame. The image should feel like it could be 6:30am or 7:30pm.

**Avoid.** Crowds, vehicles, text, signage, anything urban, anything that reads "national park visitor centre."

---

### 5. `about-philosophy.svg`

- **Page:** About
- **Section:** "Our Philosophy" — sits beside the philosophy body copy.
- **Surrounding copy:** *"We don't just sell trips; we foster connections. Local Explorer was founded on the radical idea that travel should be a two-way exchange of culture, respect, and wonder."* + *"Every destination in our portfolio is vetted by our team personally. We spend weeks on the ground, vetting partners, tasting menus, and finding the hidden trailheads that aren't marked on any digital map."*
- **Values list nearby:** "100% LOCAL GUIDES · CARBON NEUTRAL FOOTPRINT · CULTURAL PRESERVATION PROJECTS"
- **Source:** `src/pages/About.jsx:51-55` — `.philosophyImage` rendered at `width:100%; aspect-ratio:4/5; object-fit:cover; border-radius:0.9rem;`.
- **Dimensions:** 1200 × 1500 px (4:5, portrait)
- **Priority:** Important

**Subject.** A founder / guide figure, mid-candid, in a real travel setting. The strongest version of this image: a person in their late 30s in travel-ready clothing (linen shirt, field jacket, no uniform) walking through a market lane, leaning over a map with a local, looking at a hand-pulled espresso at a counter, or writing in a small notebook on a terrace. Not a studio portrait, not a tourism-board group shot. A real moment from a real trip.

**Mood.** Approachable, candid, unperformed. The image is the "face" of the philosophy — it should feel like the kind of person you would trust to plan your trip, not the kind of person who sells you a timeshare.

**Framing.** Portrait crop (4:5). The face should sit in the upper third of the frame; the lower two-thirds is environment — market stalls, a doorway, a hand on a coffee cup, a notebook on a café table. Avoid dead-center face crops.

**Light.** Natural, slightly overcast or window-lit. Warm but not golden.

**Avoid.** Studio backdrop, ring light, suit-and-tie, the subject looking directly at the camera, multiple people in the frame (this is one human, not a team), any logo or branded clothing.

---

### 6. `curator-marcus.svg`

- **Page:** About
- **Surrounding copy:** Curators section intro: *"A collective of photographers, writers, and explorers united by a single obsession: discovery."*
- **Role:** "FOUNDER & CEO" — Marcus Thorne.
- **Source:** `src/pages/About.jsx:5-10` — `.curatorImage` rendered at `width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:0.45rem;`. Below the image: role label then name in caps.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A professional portrait of Marcus Thorne: male, late 30s, founder archetype. He should look like the person who started the agency in 2014 (per the about-page stats: "12 YEARS EXPLORING"). Smart-casual travel clothing — open-collar shirt, a field jacket, no tie. Outdoor setting: a mountain overlook, a coastal headland, or the doorway of a small hotel. Blurred background (shallow depth-of-field, f/2.8-ish).

**Framing.** Head-and-shoulders or 3/4 length. The face sits in the upper 60% of the frame. He can be looking slightly off-camera, or directly at the lens with a calm, considered expression (not a smile-for-the-camera smile — a "yes, hello, sit down" expression).

**Light.** Soft natural light, slightly side-lit. Avoid flash, avoid harsh overhead.

**Avoid.** Studio backdrop, suit, sunglasses, the subject's hand on a laptop, a generic "LinkedIn headshot" feel.

---

### 7. `curator-elena.svg`

- **Page:** About
- **Role:** "HEAD OF CONTENT" — Elena Rossi. (She is also the byline author on the Kyoto and Santorini journal stories, per `src/data/articles.js`.)
- **Source:** `src/pages/About.jsx:11-15`
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A professional portrait of Elena Rossi: female, mid-30s, editor / writer archetype. She is holding a notebook or a small camera, in an outdoor setting with natural light. The notebook / camera is a small narrative detail — it ties her to the byline credit on the journal stories.

**Framing.** 3/4 length, head and torso, with one hand visible holding the prop. Face in the upper 60% of the frame.

**Light.** Soft natural light from the side. Could be reading-by-a-window light, or golden late-afternoon terrace light.

**Avoid.** The same exact framing as the Marcus portrait — vary the camera angle and the prop. Avoid studio lighting, avoid the subject being in the same location as Marcus.

---

### 8. `curator-siddharth.svg`

- **Page:** About
- **Role:** "LEAD EXPEDITIONIST" — Siddharth Mehta. (Siddharth is the on-the-ground lead — his archetype is the field operator, not the office person.)
- **Source:** `src/pages/About.jsx:16-20`
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A professional portrait of Siddharth Mehta: male, early 40s, expedition-leader archetype. Field gear — a softshell jacket, a wide-brim hat, a topographic map tucked under one arm, or a pair of binoculars. Outdoor setting: a mountain trail, a jungle clearing, a Himalayan foothill, a desert plateau. The setting should be slightly more "remote" than Marcus or Elena's.

**Framing.** 3/4 length, head and torso, the field gear visible. Face in the upper 60%.

**Light.** Harsher outdoor light is acceptable here — he's the field person, not the editor. Midday side-light, a little contrast.

**Avoid.** The same location as the other curators. Avoid studio, avoid tie, avoid anything that suggests a desk.

---

### 9. `curator-chloe.svg`

- **Page:** About
- **Role:** "OPERATIONS DIRECTOR" — Chloe Chen. (The ops lead — runs logistics, the "behind the scenes" person who makes the trips actually work.)
- **Source:** `src/pages/About.jsx:21-25`
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A professional portrait of Chloe Chen: female, early 30s, operations-lead archetype. Neutral or business-casual styling — a clean shirt, a simple blazer, minimal jewelry. Indoor or city setting: a hotel lobby, a quiet office with a map on the wall, a doorway in a small European city, a window seat on a train. The vibe is "the person who has your boarding pass ready."

**Framing.** 3/4 length, head and torso. Face in the upper 60%. A clipboard, a passport, a phone, or a small notebook is a good prop.

**Light.** Soft indoor light, window-side.

**Avoid.** The same outdoor location as the others. Avoid studio. Avoid the same outfit colour as the other three curators (give each a distinct palette — Marcus: earth tones; Elena: linen / sage; Siddharth: rust / olive; Chloe: ivory / navy).

---

### 10. `montana-glacier-valley.svg`

- **Page:** Destinations
- **Tag:** "MONTANA, USA" (rendered as a small `.tagDark` pill)
- **Heading:** "GLACIER VALLEY"
- **Intro copy:** *"A high-country expedition through the quiet edges of Glacier National Park, far from the postcard pull-offs."*
- **Itinerary highlights:** "Backcountry access via the historic Sperry and Granite Park chalets; pristine alpine lakes reached only on foot; ranger-led conversations on glaciology and park history."
- **Source:** `src/data/destinations.js:56` — `slug: "glacier-valley"`, `bestTime: "JUL — SEP"`, `duration: "8 DAYS"`, `difficulty: "MODERATE"`, `startingFrom: "$3,420"`. `aspect: "3/4"`.
- **Dimensions:** 1200 × 1600 px (3:4, portrait)
- **Priority:** Important

**Subject.** Snow-capped mountain peaks above a glacial valley, with a winding river or a glacial lake in the middle distance. Reference points: the Going-to-the-Sun corridor, Logan Pass, the Sperry Chalet basin, or the Many Glacier area. No buildings except perhaps one tiny historic chalet in the lower foreground. No roads, no cars, no visitor centres.

**Mood.** Cold, remote, vast. The intro copy specifically calls out the "quiet edges" and "far from the postcard pull-offs" — the image should not be the standard Going-to-the-Sun viewpoint that every Montana tourism board uses. Find the angle that's a 20-minute walk off the main road.

**Framing.** Tall portrait (3:4). Peaks upper third, valley mid, foreground with rocks or alpine flowers lower third. The card overlay (tag + title) sits in the lower-left, so keep the lower-left visually quieter.

**Light.** Clear, cool, late morning. Sharp ridges, deep blue sky, snow showing texture (not blown out).

**Avoid.** Over-saturated HDR blues, "epic drone" angles, anything shot from a parking lot, elk or bear in foreground (too on-the-nose), road signs.

---

### 11. `guilin-emerald-curve.svg`

- **Page:** Destinations
- **Tag:** "GUILIN, CHINA" (rendered top-right as a `.tagLightTopRight` pill)
- **Heading:** "THE EMERALD CURVE"
- **Intro copy:** *"A slow journey along the Li River, where the karst peaks rise like brushstrokes from the water."*
- **Itinerary highlights:** "Private bamboo-raft drift on the most photographed bend of the Li; a cormorant fisherman demonstration at dusk; two nights in a restored courtyard house in Daxu old town."
- **Source:** `src/data/destinations.js:119` — `slug: "emerald-curve"`, `bestTime: "APR — JUN, SEP — OCT"`, `duration: "5 DAYS"`, `difficulty: "EASY"`, `startingFrom: "$1,890"`. `aspect: "1/1"`, `position: "topRight"` (the tag pill).
- **Dimensions:** 1400 × 1400 px (1:1, square)
- **Priority:** Important

**Subject.** The Li River's famous curve at sunrise or under low mist. Karst peaks rising from emerald water. Ideal: a single traditional bamboo raft with a fisherman visible in the lower third, for scale. The water is the hero — it should read as glassy, reflective, slightly green.

**Mood.** Misty, painterly, "Chinese scroll painting" mood. The intro's phrase "rise like brushstrokes" is the operative direction — the peaks should feel ink-drawn, not photographic.

**Framing.** Square. Peaks occupy the upper two-thirds; water the lower third with a slight reflection. A bamboo raft sits in the lower-left or lower-right intersection. The "GUILIN, CHINA" tag is in the **top-right corner** — keep the upper-right area low-detail (open sky, smooth rock face, not busy foliage).

**Light.** Pre-dawn or early morning. Mist on the water. Soft, diffuse, no harsh sun. The mist is what sells the image.

**Avoid.** Saturated cartoon-green water, a tourist cruise boat, paddle steamers, a clear bright blue sky, modern Guilin skyline, anything that reads "postcard stand."

---

### 12. `tours-zen-pathway.svg`

- **Page:** Tours
- **Heading:** "THE ZEN PATHWAY" (Kyoto, Japan — Cultural — 4 days — $1,250)
- **Intro copy:** *"A four-day immersion in the contemplative architecture of Kyoto — gardens, tea, and the slow ritual of a city that has been refining stillness for a thousand years."*
- **Highlights:** "Two private temple visits, including a moss garden closed to the public; hands-on calligraphy and ikebana sessions with a third-generation master; stay in a restored 19th-century ryokan in the Higashiyama hills."
- **Style note:** CSS applies `filter: grayscale(1)` to the rendered image, so a colour or monochrome source both work — but the source should still hold up at strong contrast in monochrome (think form, line, and texture, not colour punch).
- **Source:** `src/data/tours.js:2` — `slug: "zen-pathway"`, `bestTime: "MAR — MAY, OCT — NOV"`, `groupSize: "UP TO 8"`. Rendered as `.tourCard` image.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A meditative Kyoto scene. Options: a stone path disappearing into a bamboo grove (Arashiyama); a moss garden at a closed temple with raked gravel; a wooden temple gate in fog (the long approach to a sub-temple); a single stone lantern in a still garden. The image should look like the kind of place where a Zen monk would walk for forty minutes and not say a word.

**Mood.** Restrained, vertical, contemplative. The title is "The Zen Pathway" — the image should feel like the literal path the title describes.

**Framing.** Tall portrait, strong vertical element (a single bamboo, a single lantern, a single gate pillar) off-centre. Negative space in the upper third. Foliage / stone fills the lower two-thirds.

**Light.** Soft, overcast, or dappled. No sun in frame.

**Avoid.** Crowds at Arashiyama bamboo grove (the iconic crowded shot), autumn leaves (this is a year-round zen image, not a seasonal one), bright colours, busy kimono or festival imagery.

---

### 13. `tours-karst-frontier.svg`

- **Page:** Tours
- **Heading:** "KARST FRONTIER" (Guilin, China — Jeep Ride — 6 days — $2,100)
- **Intro copy:** *"A six-day traverse of the karst country, with jeep access to villages and viewpoints that don't appear on the standard route."*
- **Highlights:** "Off-road jeep traverses across the Yao and Zhuang minority highlands; two nights in a working rice farm in the Longsheng terraces; riverside dinner cooked by a cormorant fisherman's family."
- **Style note:** CSS applies `filter: grayscale(1)`.
- **Source:** `src/data/tours.js:45` — `slug: "karst-frontier"`, `bestTime: "APR — JUN, SEP — OCT"`, `groupSize: "UP TO 10"`, `difficulty: "MODERATE"`.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** Guilin karst peaks at sunrise or under heavy clouds, with a single 4×4 vehicle in the lower third for scale. The vehicle tells the "jeep ride" story; the karst tells the "Guilin" story. The image should feel like the moment the jeep stops at a viewpoint and the passenger gets out and goes quiet.

**Mood.** Atmospheric, slightly dramatic. Cloud, mist, or storm light is welcome. This is the "off-road" tour, not the "river drift" tour — give it weight.

**Framing.** Tall portrait, peaks in the upper two-thirds, vehicle small in the lower third. The vehicle should be a small element — maybe 10% of the frame — to preserve the sense of scale.

**Light.** Overcast or pre-storm. Soft, even light. Avoid midday harshness.

**Avoid.** Saturated cartoon-green (this will go grayscale — green reads as muddied mid-grey), the standard Li River bend (that's the destination card, not the tour card), crowded viewpoints.

---

### 14. `tours-summit-serenity.svg`

- **Page:** Tours
- **Heading:** "SUMMIT SERENITY" (Banff, Canada — Hiking — 5 days — $1,850)
- **Intro copy:** *"Five days of high-alpine walking in the Canadian Rockies, with long ridge days, glacial lakes, and quiet evenings at remote lodges."*
- **Highlights:** "Two guided ridge days with views across the Bow Range; glacial lake walks known only to the backcountry rangers; evening lectures from a glaciologist who joins the group for two nights."
- **Style note:** CSS applies `filter: grayscale(1)`.
- **Source:** `src/data/tours.js:97` — `slug: "summit-serenity"`, `bestTime: "JUL — SEP"`, `groupSize: "UP TO 8"`, `difficulty: "CHALLENGING"`.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A wide alpine summit view, or a lone hiker on a snow-dusted Canadian Rockies ridge. The hiker is small in the frame, walking away, on a high ridge with peaks and a glacial lake behind. No big summit celebrations, no flag, no group of friends high-fiving. One person, one ridge, one quiet.

**Mood.** Achievement without performance. The title "Summit Serenity" is the operative phrase — the image should feel like the moment *after* the summit, on the way down, when the noise is gone.

**Framing.** Tall portrait, ridge line diagonal across the frame. Sky upper third, ridge and figure middle, foreground rocks lower third.

**Light.** Clear, high-alpine, late morning. Sharp shadows, deep blue sky. Snow showing texture.

**Avoid.** Crowded summit photos, summit cairns stacked by tourists, bluebird-sky post cards, Banff town in frame, gondolas.

---

### 15. `tours-aegean-flavors.svg`

- **Page:** Tours
- **Heading:** "AEGEAN FLAVORS" (Santorini, Greece — Gastronomy — 3 days — $980)
- **Intro copy:** *"A short, sensory three days tracing the flavours of the caldera — vineyards, fish tavernas, and a long lunch in a private cave house."*
- **Highlights:** "Private tasting at an Assyrtiko vineyard with the winemaker; hands-on cooking class in a 19th-century cave house; late-night fish dinner at a taverna the locals keep to themselves."
- **Style note:** CSS applies `filter: grayscale(1)`.
- **Source:** `src/data/tours.js:144` — `slug: "aegean-flavors"`, `bestTime: "MAY — OCT"`, `groupSize: "UP TO 10"`, `difficulty: "EASY"`.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A Santorini table spread on a whitewashed terrace — olives, feta, fresh bread, an open bottle of Assyrtiko, a half-peeled tomato. The blue caldera in soft focus behind. Or: a single blue dome in the upper third of the frame with a table in the lower third. The food is the hero; the dome is the context.

**Mood.** Late morning on the terrace. Quiet. The intro mentions "a private cave house" — the image should feel like a meal at someone's house, not a restaurant with other diners in shot.

**Framing.** Tall portrait. Table in the lower two-thirds, caldera / dome in the upper third slightly out of focus.

**Light.** Bright Aegean light, but with shade (the table is under a pergola, the dome is in direct sun). Strong shadow contrast, but no blown highlights.

**Avoid.** Other diners in shot, a waiter, a menu, a credit-card sign, a souvenir shop, crowded Oia sunset, a wedding.

---

### 16. `tours-coastal-highway.svg`

- **Page:** Tours
- **Heading:** "COASTAL HIGHWAY" (California, USA — Jeep Ride — 7 days — $2,400)
- **Intro copy:** *"Seven slow days down the Pacific Coast Highway, with detours into Big Sur, side canyons, and the kind of roadhouse dinners that only happen off the main road."*
- **Highlights:** "Two nights at a remote clifftop lodge in Big Sur; a long-table dinner at a family vineyard in the Santa Ynez Valley; sunset hike to a sea cave known only to the local naturalists."
- **Style note:** CSS applies `filter: grayscale(1)`.
- **Source:** `src/data/tours.js:181` — `slug: "coastal-highway"`, `bestTime: "APR — JUN, SEP — OCT"`, `groupSize: "UP TO 8"`, `difficulty: "EASY"`.
- **Dimensions:** 900 × 1200 px (3:4, portrait)
- **Priority:** Important

**Subject.** A Big Sur / Pacific Coast Highway curve with cliffs, ocean, and a single open-top vehicle on the road. The car is a small element — 8–12% of the frame — heading into the curve, with the road leading the eye toward the horizon. Reference: the Bixby Bridge, the cliffs south of Big Sur Station, the McWay Falls overlook.

**Mood.** The "great American road trip" mood, but quiet. The intro calls it "slow days" — the image should feel like the moment you stop the car, get out, and stand on the cliff for ten minutes.

**Framing.** Tall portrait. Sky and distant headlands upper third, road and cliffs middle, foreground rocks / car lower third.

**Light.** Golden hour side-light, low sun, long shadows. Strong horizon line.

**Avoid.** Crowded Bixby Bridge viewpoint, an arcade of convertibles, surfers in shot, Santa Monica pier, anything that reads "LA" rather than "Big Sur."

---

### 17. `journal-kyoto-story.svg`

- **Page:** Journal
- **Tag:** "KYOTO, JAPAN"
- **Date / byline:** "NOV 12, 2024 — BY ELENA VANCE"
- **Heading:** "THE SILENCE OF HIGASHIYAMA: FINDING PEACE IN KYOTO'S OLD SOUL"
- **Excerpt:** *"Beyond the bustling markets and neon lights of central Kyoto lies a district frozen in time. Discover the winding stone paths and hidden tea houses where silence is the primary language."*
- **Body opening:** *"Higashiyama reveals itself in layers. You can pass through it in an afternoon and think you've seen it — the broad stone steps, the lacquered shopfronts, the hush that falls as you climb toward the temples…"*
- **Source:** `src/data/articles.js:1` — `slug: "silence-of-higashiyama"`, `author: "ELENA VANCE"`, `imageRatio: "wide"`. Rendered as the `.featuredImageWrap` on Journal.
- **Dimensions:** 1400 × 900 px (14:9, landscape)
- **Priority:** Important

**Subject.** A Higashiyama stone path at dawn, in the rain. The body of the article opens with a specific weather note: *"the rain had been falling since four. By eight, the stone paths from Sanjūsangen-dō toward Kiyomizu had turned a darker grey…"* — the image should match that moment. Wet stone, low mist, a single wooden façade, a paper lantern barely visible, a single figure from behind. No crowds, no clear sky, no festival.

**Mood.** The article's operative word is "silence" — the image should feel like the visual equivalent of a held breath.

**Framing.** Wide landscape, path receding to a vanishing point near the centre. Wooden façade in the middle distance. The "KYOTO, JAPAN" tag overlay sits in the upper-left of the card — keep the upper-left quadrant calm.

**Light.** Overcast, post-rain. Wet stone reflecting ambient light. No direct sun.

**Avoid.** The same autumn-maple image as the Destinations card (this is a different season — late autumn / early winter, rainy, post-leaf-fall). Avoid tourist crowds, geisha in shot, the Kiyomizu-dera stage platform (too iconic, too busy).

---

### 18. `journal-paris-cafe.svg`

- **Page:** Journal
- **Tag:** "TRAVEL TIPS"
- **Date / byline:** "OCT 28, 2024 — BY HENRI LANGLAIS"
- **Heading:** "7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS"
- **Excerpt:** *"Skip the obvious terraces and follow the regulars instead. These are the rooms where the conversation still turns to literature, where the espresso is unhurried, and where the light is good enough to write in."*
- **Body opening:** *"Paris is a city of cafes, but the right cafe is its own form of literature. You can read a writer in three sentences of overheard conversation, in the way the waiter greets the regular at the door, in the third-hour conversation that nobody is recording."*
- **Source:** `src/data/articles.js:34` — `slug: "paris-cafes-tourists-miss"`, `imageRatio: "tall"`. Rendered as the `.sideStory` card on Journal.
- **Dimensions:** 900 × 1200 px (3:4, portrait — but rendered cropped to ~270px height as a landscape band, so provide vertical buffer)
- **Priority:** Optional

**Subject.** A single espresso on a marble bistro table, with a Parisian façade softly blurred behind. The marble is the foreground hero; the façade is context. No people. No other tables in sharp focus. The image is a still life, not a crowd scene — matching the article's argument that the right café is one where you hear the third-hour conversation.

**Mood.** Morning. Warm. A book or a small notebook might be on the table next to the espresso.

**Framing.** Tall source, but the page crops to roughly landscape at 270px. Keep the espresso / table in the centre of the source so the crop keeps it visible. Provide ~25% of buffer above and below the table.

**Light.** Soft window light from the left. Marble should be subtly warm.

**Avoid.** A waiter, a phone, a menu, a crowded terrace with people, a tourist with a camera, the Eiffel Tower in frame, the obvious Café de Flore or Les Deux Magots.

---

### 19. `journal-canadian-rockies.svg`

- **Page:** Journal
- **Tag:** "ADVENTURE"
- **Date / byline:** "OCT 14, 2024 — BY MARCUS THORNE" (the founder writes the adventure piece)
- **Heading:** "WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES"
- **Excerpt:** *"A solo trek isn't a test of endurance — it's a conversation with yourself, held at altitude, in the long light of the high country."*
- **Body opening:** *"There's a particular silence on the high passes in late August. The marmots have gone quiet. The wind is steady. The light has the long, almost horizontal quality that photographers wait for all year…"*
- **Source:** `src/data/articles.js:57` — `slug: "wild-peaks-canadian-rockies"`, `imageRatio: "square"`. Rendered as a `.storyCard` on Journal.
- **Dimensions:** 900 × 1200 px (3:4, portrait — but rendered cropped to ~260px height; provide vertical buffer)
- **Priority:** Optional

**Subject.** A turquoise glacial lake (Peyto, Moraine, Bow) framed by pine forest and Rockies peaks, with no people. The article's phrase "long light of the high country" is the operative direction — the image should feel like late August, golden low light, an empty trail.

**Mood.** Stillness, solitude, scale. The water is the hero (turquoise) — make sure the colour is present in the source even if the page also uses it elsewhere in greyscale.

**Framing.** Tall source, page crops to landscape. Keep the lake and the peaks in the centre. ~30% buffer above and below.

**Light.** Late afternoon, low sun, the water reflecting blue.

**Avoid.** A hiker, a tent, a busy overlook, an obvious "postcard" Moraine Lake with the rock pile in foreground.

---

### 20. `journal-santorini-domes.svg`

- **Page:** Journal
- **Tag:** "LOCAL GUIDES"
- **Date / byline:** "SEP 30, 2024 — BY ELENA ROSSI" (Elena — Head of Content — writes the local guides pieces)
- **Heading:** "BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYWAYS"
- **Excerpt:** *"The postcards show you the front. These are the rooms behind the back doors — the small groceries, the family courtyards, the steps that lead to nowhere in particular."*
- **Body opening:** *"The first time I climbed through Oia on my own, I was looking for the famous sunset. I never found the sunset, because I'd taken a wrong turn somewhere in the upper village and ended up in a courtyard where an older woman was hanging laundry on a low line…"*
- **Source:** `src/data/articles.js:73` — `slug: "oia-secret-alleyways"`, `imageRatio: "square"`. Rendered as a `.storyCard` on Journal.
- **Dimensions:** 900 × 1200 px (3:4, portrait — but rendered cropped to ~260px height; provide vertical buffer)
- **Priority:** Optional

**Subject.** A narrow Oia alleyway, NOT the front-of-postcard view. The article's whole argument is that the front is the postcard, and the back is the real place. The image should show: a small grocery with the door open, a flight of whitewashed steps leading nowhere in particular, a blue-shuttered door, a courtyard with a low laundry line, or a cat on a wall. No caldera in shot. No other tourists.

**Mood.** Mid-morning, the light in the alley is warm and slightly slanted. The walls are white; the doors and shutters are blue or faded green. A small domestic detail is visible.

**Framing.** Tall source, page crops to landscape. Keep the alley in the centre. ~30% buffer above and below.

**Light.** Soft warm light, the alley is in slight shadow with one bright patch at the end.

**Avoid.** The famous three-dome sunset shot, the caldera in frame, the Oia castle, a wedding party, a queue at a viewpoint, a postcard angle.

---

### 21. `editorial-hero-valley.svg`

- **Page:** Editorial
- **Section:** Hero
- **Kicker:** "VOLUME 04 / EDITORIAL SERIES"
- **Heading:** "TRAVEL TALES"
- **Subhead:** *"Immersive stories from the edge of the world, curated for those who seek the authentic, the hidden, and the sublime."*
- **Source:** `src/pages/EditorialPage.jsx:9-23` — `.heroImage` rendered at `width:100%; height:720px; object-fit:cover;` (same dimensions and crop as the Journal hero).
- **Dimensions:** 1600 × 900 px (16:9)
- **Priority:** Important

**Subject.** A second sweeping landscape, visually similar in role to `journal-hero-valley.svg` but **distinctly different** so the two pages don't look identical. If the Journal hero is a glacial valley, this should be a coastline, a desert canyon, or a forest valley in autumn. Same compositional logic: one strong vertical element, lower-left quiet for the copy block, sky takes the upper half.

**Mood.** Same quiet editorial mood, but with a slightly warmer palette than the Journal hero — sandstone, terracotta, ochre, sage, deep green — so the two pages read as siblings rather than duplicates.

**Framing.** Wide horizontal, vertical element at the left third. Lower-left quiet (where the "VOLUME 04 / TRAVEL TALES" text sits).

**Light.** Late golden hour or overcast. Avoid the same exact lighting setup as the Journal hero.

**Avoid.** Being a near-duplicate of `journal-hero-valley.svg` (same valley, same colour palette, same time of day).

---

### 22. `editorial-kyoto-story.svg`

- **Page:** Editorial
- **Tag:** "KYOTO, JAPAN"
- **Heading:** "THE SILENCE OF HIGASHIYAMA" (same article as the Journal equivalent)
- **Source:** `src/pages/EditorialPage.jsx:42-62` — `.featureCard` image, with the meta block listing: "Nov 12, 2024 — By Elena Vance."
- **Dimensions:** 1400 × 900 px (14:9, landscape)
- **Priority:** Optional

**Subject.** A **different angle** on Kyoto from the Journal equivalent (`journal-kyoto-story.svg`). That one was a rainy dawn stone path. This one should be the alternate: Kyoto in autumn (red maples, a temple bell, a kimono silhouette from behind, a raked sand garden in rain, a single paper lantern glowing at dusk). Pick the version that doesn't duplicate the Journal image.

**Framing.** Wide landscape. Tag overlay in the top-left ("KYOTO, JAPAN") — keep the upper-left calm.

**Light.** Vary from the Journal image. If the Journal is rainy grey, this can be dusk-warm or autumn-clear.

**Avoid.** Replicating `journal-kyoto-story.svg`. Avoid the same path, the same lighting, the same framing.

---

### 23. `editorial-paris-cafe.svg`

- **Page:** Editorial
- **Tag:** "TRAVEL TIPS"
- **Heading:** "7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS" (same article as the Journal side story)
- **Source:** `src/pages/EditorialPage.jsx:64-75` — `.sideCard` image, with meta block "TRAVEL TIPS — 7 CAFES IN PARIS THAT TOURISTS ALWAYS MISS."
- **Dimensions:** 900 × 1200 px (3:4, portrait; rendered cropped to ~270px height, provide vertical buffer)
- **Priority:** Optional

**Subject.** A **different Paris scene** from the Journal equivalent (`journal-paris-cafe.svg`). That one was a single espresso on marble. This one should be the alternate: a Left Bank bookshop doorway, a wine bar at dusk, a hand holding a croissant against cobblestones, a zinc bar counter with a half-finished coffee, a brass espresso machine. Same still-life stillness; different subject.

**Framing.** Tall source, page crops to landscape. ~30% buffer above and below.

**Light.** Different from the Journal image — if that one was morning, this can be dusk or midday.

**Avoid.** Replicating `journal-paris-cafe.svg`. Avoid people, crowds, obvious tourist landmarks.

---

### 24. `editorial-canadian-rockies.svg`

- **Page:** Editorial
- **Tag:** "ADVENTURE"
- **Heading:** "WILD PEAKS: A GUIDE TO SOLO TREKKING THE CANADIAN ROCKIES" (same article as the Journal story card)
- **Source:** `src/pages/EditorialPage.jsx:78-88` — `.smallCard` image.
- **Dimensions:** 900 × 1200 px (3:4, portrait; rendered cropped to ~260px height, provide vertical buffer)
- **Priority:** Optional

**Subject.** A **different Canadian Rockies scene** from the Journal equivalent (`journal-canadian-rockies.svg`). That one was a turquoise glacial lake. This one should be the alternate: a hiking trail disappearing into alpine pines, a tent under stars, a climber silhouetted on a ridge, a wooden trail marker with a glacier behind, a pair of boots on a rock. The article is about solo trekking — the image should feel like one person on the trail, not a group.

**Framing.** Tall source, page crops to landscape. ~30% buffer.

**Light.** Vary from the Journal image. If that one was late afternoon, this can be dawn, dusk, or under cloud.

**Avoid.** Replicating `journal-canadian-rockies.svg`.

---

### 25. `editorial-santorini-domes.svg`

- **Page:** Editorial
- **Tag:** "LOCAL GUIDES"
- **Heading:** "BEYOND THE BLUE DOMES: OIA'S SECRET ALLEYS" (same article as the Journal story card)
- **Source:** `src/pages/EditorialPage.jsx:98-107` — `.smallCard` image.
- **Dimensions:** 900 × 1200 px (3:4, portrait; rendered cropped to ~260px height, provide vertical buffer)
- **Priority:** Optional

**Subject.** A **different Santorini interior scene** from the Journal equivalent (`journal-santorini-domes.svg`). That one was a narrow alleyway. This one should be the alternate: a whitewashed staircase seen from below, a blue-shuttered door slightly ajar, a cat on a wall, a candlelit taverna terrace at dusk, a single chair at a small courtyard table. Same domestic, post-postcard tone; different subject.

**Framing.** Tall source, page crops to landscape. ~30% buffer.

**Light.** Vary from the Journal image.

**Avoid.** Replicating `journal-santorini-domes.svg`. Avoid the three-dome sunset, avoid the caldera in frame.

---

## Replacement Workflow (for the next AI agent or photographer)

1. **Read** the **Brand & Mood Recap** at the top of this file.
2. **For each** entry above, generate or source a final image that matches the **Subject**, **Mood & light**, **Framing**, and **Avoid** lists. Pay attention to the **Editorial context** block — the headline, tag, and excerpt for the page are the brief.
3. **Export** each file with the same filename, keeping the extension `.svg` (or update the `Source` references in the JSX if you switch to `.jpg` / `.webp` / `.png`).
4. **Drop** the new files into the `img/` folder, overwriting the gray placeholder SVGs.
5. **Verify** by running `npm run dev` and visiting `/`, `/about`, `/destinations`, `/tours`, `/journal`, `/editorial`. Check that the headline overlay still reads clearly on each image.

### Critical / Important / Optional — what to ship first

- **Critical (4 images)** — ship first; the site looks broken without them:
  `hero-landing.svg`, `kyoto-autumn-path.svg`, `journal-hero-valley.svg`, `about-philosophy.svg` (founder portrait).
- **Important (14 images)** — ship next; the card grids and CTA banners.
- **Optional (7 images)** — editorial secondary cards; can ship as placeholders without harming the first impression.

### Reused files (single source, two appearances)

Four filenames are referenced from two different pages. Swapping them once updates both:

| Filename | Used in |
|---|---|
| `kyoto-autumn-path.svg` | Home (highlights) + Destinations (feature card) |
| `about-story.svg` | Home (highlights) + About (story CTA banner) |
| `journal-hero-valley.svg` | Home (highlights) + Journal (hero) |
| `about-philosophy.svg` | About (philosophy) only — used twice within About (hero philosophy + referenced in brief) |

### Editorial-twin files (must differ from each other)

The Journal and Editorial pages share the same article copy but need **distinct** images. When replacing, treat the two sets as siblings, not duplicates:

| Journal file | Editorial twin | Constraint |
|---|---|---|
| `journal-kyoto-story.svg` | `editorial-kyoto-story.svg` | Different angle, season, or time of day |
| `journal-paris-cafe.svg` | `editorial-paris-cafe.svg` | Different Paris subject, different lighting |
| `journal-canadian-rockies.svg` | `editorial-canadian-rockies.svg` | Different Rockies scene, different lighting |
| `journal-santorini-domes.svg` | `editorial-santorini-domes.svg` | Different Santorini interior, different lighting |
| `journal-hero-valley.svg` | `editorial-hero-valley.svg` | Different landscape type, different palette |
