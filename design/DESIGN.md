---
name: Voyage Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#50616c'
  on-secondary: '#ffffff'
  secondary-container: '#d0e2ef'
  on-secondary-container: '#546570'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1616'
  on-tertiary-container: '#9b7d7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d3e5f2'
  secondary-fixed-dim: '#b7c9d6'
  on-secondary-fixed: '#0c1d27'
  on-secondary-fixed-variant: '#384953'
  tertiary-fixed: '#fedad8'
  tertiary-fixed-dim: '#e1bebd'
  on-tertiary-fixed: '#2a1616'
  on-tertiary-fixed-variant: '#594140'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-hero:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-sm:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  display-hero-mobile:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 80px
  stack-md: 40px
  stack-sm: 12px
---

## Brand & Style

This design system is built for a modern travel agency that views exploration through an editorial lens. It moves away from standard "utility" travel booking and toward a curated, magazine-style experience. The brand personality is bold, adventurous, and sophisticated, yet highly accessible through its soft color palette.

The design style is a hybrid of **Modern Minimalism** and **Bold Editorial**. It uses high-contrast typography and large-scale photography to create a sense of immersion. The interface relies on a structured grid and significant white space (or rather, "colored space") to allow content to breathe, evoking the feeling of a premium physical travel journal.

Key brand attributes:
- **Cinematic Photography:** Full-width or large-scale bleed images.
- **Typographic Authority:** Heavy, condensed headings that command attention.
- **Chromatic Softness:** Muted pastel backgrounds that reduce visual fatigue and provide a distinctive "Local Explorer" identity.

## Colors

The color strategy uses a "Page-by-Section" approach. Instead of a single background color, the design system employs four primary pastel variants to distinguish different content areas or destination types.

- **Primary & Neutral:** A deep, high-contrast Black (#1A1A1A) is used for all text, borders, and iconography to ensure maximum legibility against pastel backgrounds.
- **Background Palette:** 
    - **Pale Blue:** Used for mountain or coastal destinations.
    - **Soft Pink:** Used for services and utility sections.
    - **Peach:** Used for desert or urban exploration sections.
    - **Light Yellow:** Used for family and group tour features.
- **Inversion:** Occasional use of "Hero Black" containers for primary CTA buttons to create a focal point.

## Typography

The typography system relies on a high-contrast pairing between a tall, condensed display face and a technical, clean sans-serif.

- **Headlines:** `Bebas Neue` provides the editorial "magazine" look. It should be used for all primary titles, stats, and section headers. Due to its condensed nature, it can be used at very large scales without breaking the layout.
- **Body & Interface:** `Hanken Grotesk` offers a contemporary, sharp feel for long-form text and UI labels. It balances the "loudness" of the headings with professional clarity.
- **Styling Note:** Headings should almost always be in Uppercase to maintain the brand’s authoritative voice.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, centered within the viewport. The layout is characterized by "asymmetric balance"—placing large headings on one side while balancing with imagery or text blocks on the other.

- **Margins:** Generous outer margins (64px) are essential to maintain the editorial feel.
- **Grid Behavior:** Elements should snap to the grid, but photography can occasionally "bleed" to the edge of the screen to break the frame.
- **Vertical Rhythm:** Use large vertical spacing (`stack-lg`) between major sections to prevent the pastel colors from blending together.
- **Mobile Adaptivity:** On mobile, the 12-column grid collapses to a 4-column system. Headlines scale significantly downward to ensure they don't wrap awkwardly.

## Elevation & Depth

This design system rejects traditional shadows and depth in favor of a **Flat-Graphic** aesthetic. Hierarchy is established through layering and color contrast rather than light and shadow.

- **Tonal Layering:** Depth is created by placing high-quality photography cards over the pastel backgrounds.
- **Bold Outlines:** Use 1px or 2px solid black borders for interactive elements like input fields or certain card containers.
- **High-Contrast Overlays:** Text placed directly on photography must use a semi-transparent black overlay (20-40% opacity) or be white with a subtle text protection gradient to ensure the bold typography remains legible.
- **Negative Space:** Depth is perceived through the "purity" of the layout; more important items are given more surrounding space.

## Shapes

The shape language is a mix of geometric rigidity and organic curves.

- **Core Elements:** Navigation items, secondary buttons, and form fields use a **standard 0.5rem (8px)** corner radius to feel modern and friendly.
- **Feature Elements:** Primary CTA buttons and "Selected" state cards use a distinctive **custom corner treatment**: a large radius (2rem+) on one or two opposing corners, creating a unique "leaf" or "abstract" shape that mirrors the organic nature of travel.
- **Imagery:** Travel photography should remain sharp (0px radius) or use a very subtle 4px radius to feel like printed magazine cutouts.

## Components

### Buttons
- **Primary:** Solid black background, white `Hanken Grotesk` text, with a signature curved corner on the bottom-right. Always includes an "arrow" icon (→).
- **Secondary:** Ghost style with a 1.5px black border and sharp or slightly rounded corners.

### Cards (Destinations)
- Vertical orientation with a fixed aspect ratio (e.g., 4:5). 
- Typography is overlaid at the top-left (Location) and bottom-left (Title). 
- Include a "pill" label at the top for specific categories (e.g., "KYOTO, JAPAN").

### Navigation
- **Top Bar:** Transparent background, black text. Links are in `Hanken Grotesk` uppercase. 
- **Utility:** A rounded "Language" switcher and a simple "Menu" icon (two horizontal lines of unequal length).

### Form Inputs
- Minimalist design. A single bottom border (2px black) or a fully enclosed box with 8px radius and a light stroke. 
- Labels sit above the field in `label-caps` style.

### Lists & Stats
- Statistical callouts (e.g., "70+ TOURS") use `headline-md` for the number and `body-md` for the description, separated by a thin vertical divider line.