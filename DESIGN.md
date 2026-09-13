---
name: Diego Jaramillo
description: Portfolio of a backend and AI-integration developer, built as a laboratory optical bench.
colors:
  bench: "#05070e"
  bench-deep: "#03050a"
  plate: "#0c1220"
  ink: "#eef2fb"
  ink-hot: "#ffffff"
  ink-soft: "#9aa8c4"
  ink-mute: "#7d8aa6"
  rule: "rgba(154, 168, 196, 0.14)"
  rule-soft: "rgba(154, 168, 196, 0.07)"
  w-inbound: "#ff4d2e"
  w-recall: "#ffb020"
  w-resolve: "#3ddc8a"
  w-schedule: "#37d6f0"
  w-handoff: "#6e7bff"
  w-isolate: "#b15cff"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "3.6rem"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2.15rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    fontFeature: "'ss01', 'cv05'"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 80"
  measured:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.03em"
    fontFeature: "'tnum'"
rounded:
  focus: "4px"
  field: "10px"
  alert: "12px"
  glass: "14px"
  pill: "9999px"
spacing:
  shell: "78rem"
  gutter-sm: "1.25rem"
  gutter: "2rem"
  rail-indent-sm: "1.5rem"
  rail-indent: "2.25rem"
  section-sm: "4rem"
  section: "5rem"
  heading-gap: "3rem"
  block-gap: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bench}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-hot}"
    textColor: "{colors.bench}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  input-field:
    backgroundColor: "rgba(3, 5, 10, 0.55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.75rem 0.9rem"
  glass-plate:
    textColor: "{colors.ink}"
    rounded: "{rounded.glass}"
    padding: "1.25rem"
  nav-bar:
    backgroundColor: "rgba(5, 7, 14, 0.82)"
    textColor: "{colors.ink-soft}"
    height: "4.25rem"
  lang-detent:
    backgroundColor: "rgba(3, 5, 10, 0.5)"
    textColor: "{colors.ink-mute}"
    rounded: "{rounded.pill}"
---

# Design System: Diego Jaramillo

## Overview

**Creative North Star: "The Optical Bench"**

The site is a laboratory bench in the dark. One beam of white light enters, crosses glass, disperses, and each wavelength lands on a labeled detector. Every visual device is a piece of that apparatus: anodized black bench, optical glass as the only raised material, a single vertical rail from which the page hangs, engraved labels, and measured values set like instrument readouts. Nothing is ornament; a color, a mark, or a typeface change always states something.

Density is instrument-like rather than editorial: tight engraved labels, ruled specification tables, hairline dividers, and generous vertical rhythm between sections. Rank is carried by area, not by heading size: the flagship system takes a whole raised section with glass plates, while other projects sit as ruled rows on the bench. There is one orchestrated moment of motion, the arrival of the beam on page load; everything after that responds to the visitor.

The system rejects the dev-portfolio arrangement of equal skill cards, equal project cards and tag soup. It also rejects color as decoration: the spectrum is a legend.

**Key Characteristics:**
- Dark anodized bench with a one-step-deeper tone for raised sections.
- Six spectral wavelengths, each bound to exactly one meaning site-wide.
- White light (ink) is the only color of interaction.
- Optical glass: blurred, saturated, lit top edge, dispersing chromatic border.
- Archivo for words, narrowed to 80% width for engraved labels; Martian Mono only for numbers.
- One vertical rail with a station mark at every section heading.
- One arrival sequence; reduced motion lands everything in its final state.

## Colors

A near-black bench lit by cool white ink, with six saturated wavelengths reserved as a legend.

### Primary
- **White Light** (ink, #eef2fb): The beam before the prism and the color of the visitor's action. Primary button fill, focus ring, text caret, selection tint, headings and primary text. Hover on the primary button brightens to **Hot White** (ink-hot, #ffffff).

### Secondary (the spectral legend)
Each wavelength means one thing everywhere it appears, as stroke, dot, label text, glass edge or station mark.
- **Inbound Orange** (w-inbound, #ff4d2e): the incoming message and the channel it arrives on (WhatsApp).
- **Recall Amber** (w-recall, #ffb020): retrieval, the knowledge base.
- **Resolve Green** (w-resolve, #3ddc8a): the answered, resolved outcome; also the contact form's sent state.
- **Schedule Cyan** (w-schedule, #37d6f0): scheduling and calendar booking.
- **Handoff Indigo** (w-handoff, #6e7bff): handing the conversation to a human advisor.
- **Isolate Violet** (w-isolate, #b15cff): tenant isolation and security.

The canonical order (inbound, recall, resolve, schedule, handoff, isolate) is the order light disperses in, and is used only when the whole spectrum appears together.

### Neutral
- **Anodized Bench** (bench, #05070e): page background, the gap ring around marks.
- **Deep Bench** (bench-deep, #03050a): raised sections (the system case study, capabilities, contact) and the scrollbar track.
- **Plate** (plate, #0c1220): opened select-menu options. The direction contract named it for rail plates; the build uses Deep Bench for raised sections instead.
- **Soft Ink** (ink-soft, #9aa8c4): body copy, leads, secondary nav links, default section station mark.
- **Muted Ink** (ink-mute, #7d8aa6): engraved field and table labels, placeholders, footer text, neutral marks.
- **Rule** (rule, rgba(154,168,196,0.14)): the vertical rail, input borders, ghost button borders.
- **Soft Rule** (rule-soft, rgba(154,168,196,0.07)): table row dividers, list separators, graduation ticks, nav bottom edge.

### Named Rules
**The Legend Rule.** Each of the six wavelengths is bound to one stage meaning for the whole site. An item that is not one of those stages takes a neutral mark (Muted Ink dot, uncolored heading). Color is never assigned by list position, index, or to create variety.

**The White Light Rule.** Everything the visitor operates is white light: the primary action, the focus ring, the caret, the selection. Wavelengths never fill, outline or tint a control; they are what the system does with the action, not the action.

**The Dispersion Exception.** The full spectrum may appear together only as dispersion, always in canonical order: the prism's edge stroke, the nameplate bar in the navigation, the beam descending the case-study path, the hairline that closes the page. The hero's spectral field (large blurred wavelength glows at 24 to 30% alpha under 64px blur) is the material the glass refracts and lives only behind the hero bench.

## Typography

**Display Font:** Archivo (variable, with the `wdth` axis loaded; fallback system-ui, sans-serif)
**Body Font:** Archivo
**Label/Mono Font:** Martian Mono (fallback ui-monospace, monospace), for measured values only

**Character:** One grotesque carries every word, switching between normal width for reading and an 80% narrowed cut for engraved instrument labels. A wide monospace appears only where a number is being read off the instrument.

### Hierarchy
- **Display** (600, 2.5rem on phones, 3.2rem at sm, 3.6rem at lg; line-height 1.03; -0.035em; balanced wrap): the single hero claim, max 47rem wide.
- **Headline** (600, 1.75rem rising to 2.15rem at sm; -0.025em): section headings on the rail. The flagship system name runs larger (1.9rem to 2.4rem, -0.03em) because rank is area.
- **Title** (600, 1.3rem, -0.02em, engraved): project names; engraved 0.88 to 1rem for plate titles, capability group titles and case-study subsection headings.
- **Body** (400, 0.9 to 1rem, line-height 1.6 to 1.7, Soft Ink): paragraphs capped at 58 to 68ch; the first About paragraph and project summaries promote to White Light.
- **Label** (600 or 400, 0.72 to 0.8rem, engraved, Muted Ink): form labels, spec-table terms, channel names, "problem / built / stack" labels. Sentence case; the only uppercase is the ES and EN language codes.
- **Measured** (Martian Mono 400, 0.76 to 0.78rem, -0.03em, tabular numerals): spec-table values that begin with a digit.

### Named Rules
**The Measured Value Rule.** Martian Mono is only for values that start with a digit, decided by `isMeasured` (`/^\d/`) in lib/content.ts. Everything else, including stack names and prose values in the same table, is Archivo.

**The Engraving Rule.** Labels are narrowed Archivo (font-stretch 80%, +0.02em), never small caps, never uppercase tracking, and never a kicker line above a heading.

## Layout

A single shell (78rem max width, 1.25rem gutters on phones, 2rem from sm) holds every section. Inside it, one vertical rail (1px Rule line fading in and out over the top and bottom 8%) runs the left edge, and content is indented 1.5rem from it on phones and 2.25rem from sm. Each section heading carries a 7px station mark centered on the rail.

Sections breathe at 4rem vertical padding on phones and 5rem from sm, with a 2.5 to 3rem gap under the heading and 3rem between blocks. Raised sections alternate onto Deep Bench so the page reads as bench, raised bay, bench.

Structure favors asymmetric two-column grids that collapse to one column: body with a 17 to 22rem specification column at lg, 19rem channel list beside the form, 8.5rem stage labels beside stage detail at sm. Lists are ruled rows separated by Soft Rule hairlines, never grids of equal cards.

The hero fills the viewport height. Its bench is a 17rem (sm) to 18rem (lg) band: an SVG on a 1200 by 400 canvas stretched to the band, the prism centered at 34% (13.9rem wide at lg, 11.7rem at sm), the inbound beam ending at x=356 and the dispersed rays starting at x=460, and three detector plates filling the right 34% in three rows. Below sm the rays are dropped; the beam label, prism and stacked plates flow vertically. Horizontal overflow is clipped on the hero section, never on body, so the fixed navigation stays fixed.

Anchors scroll smoothly with 5.5rem scroll padding to clear the 4.25rem navigation.

## Elevation & Depth

Depth is optical, not paper. The bench is flat; the only raised material is glass, which needs something behind it to refract. Glass is a faint white gradient (8.5% to 1.2%) under a 20px blur with 1.55 saturation, an inset lit top edge, a dim bottom edge, a long soft drop, and a 1px border that disperses: it starts in the plate's own wavelength (or white when the plate has none) and fades out across the lit corner. A pointer-following specular highlight fades in on hover and focus-within.

### Shadow Vocabulary
- **Glass body** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.26), inset 1px 0 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.04), 0 22px 48px -26px rgba(0,0,0,0.9)`): every glass plate.
- **White light glow** (`box-shadow: inset 0 -1px 0 rgba(5,7,14,0.18), 0 12px 32px -18px rgba(238,242,251,0.55)`): primary action at rest; widens to `0 16px 40px -16px rgba(238,242,251,0.75)` on hover.
- **Detector glow** (`box-shadow: 0 0 10px <wavelength>` to `0 0 14px <wavelength>`): the small dot of a legend mark, separated from its surroundings by a 4px bench-colored ring where it sits on a line.
- **Field focus halo** (`box-shadow: 0 0 0 3px rgba(238,242,251,0.09)`): focused input.

### Named Rules
**The Only Glass Rule.** Glass is the sole raised material. Containers that are not optical plates stay flat on the bench and separate with hairlines.

**The Prefix-First Rule.** Every backdrop filter declares `-webkit-backdrop-filter` before `backdrop-filter`. In the reverse order, Lightning CSS (Tailwind v4's processor) emits only the prefixed form, Chrome ignores it, and the glass silently loses its blur.

**The Opaque Bar Rule.** The fixed navigation is glass with a near-opaque bench tint (82% to 68%), because light content and white buttons pass beneath it; transparent glass there puts white text on white.

## Shapes

Corners are soft and few. Glass plates round at 14px, inputs at 10px, the inline error notice at 12px, and every button, detent and mark is a full pill or circle. The focus outline rounds at 4px. The recurring geometry is optical: the equilateral prism with its internal refraction line, straight hairline rays, circular detector dots, and a graduated rule with a tick every 8px (a major tick every fifth on the hero bench). Hard offset shadows, bevels and outlined cards are absent.

## Components

### Buttons
Rounded pills of light; confident and quiet.
- **Shape:** full pill (9999px).
- **Primary (white light):** White Light fill, Bench text, 600 weight at 0.875rem, 0.75rem by 1.5rem padding (0.5rem by 1rem in the navigation, full width in the form).
- **Hover / Focus:** brightens to Hot White with a wider glow; presses down 1px on active; 2px White Light focus outline offset 3px. Disabled drops to 55% opacity without glow.
- **Ghost:** transparent with a Rule border and White Light text; hover adds a 6% white wash. Used for the secondary action and the services call to action.
- Button copy is imperative and names its outcome.

### Inputs / Fields
- **Style:** 1px Rule border, bench at 55% fill, 10px radius, 0.75rem by 0.9rem padding, 0.9375rem text; engraved Muted Ink label above.
- **Focus:** border brightens to 50% White Light with a 3px 9% white halo and the fill deepens to 78%. No wavelength color on focus.
- **Select:** custom Muted Ink chevron; options open on Plate.
- **Error / Disabled:** errors appear as a White Light notice (28% border, 5% fill) with a warning icon, not in a wavelength; disabled fields drop to 50% opacity.

### Navigation
- **Style:** fixed top bar, shell-width, 0.875rem vertical padding. At rest a bench gradient veil keeps it legible; after 20px of scroll it becomes opaque glass with a Soft Rule bottom edge.
- **Nameplate:** engraved name beside a 3px spectral bar in canonical order.
- **Links:** 0.82rem Soft Ink, brightening to White Light on hover; hidden below md.
- **Language detent:** a two-position pill switch, ES and EN in engraved uppercase at 0.74rem; the lit position is a 14% white slider with an inset lit edge that slides 300ms.
- **Mobile:** menu icon opens a glass drawer of Soft Rule-divided links; body scroll locks and Escape closes it.

### Glass Detector Plate (signature)
A glass plate declares its wavelength in `--w`; the dispersing edge and a 6px glowing dot take that color, the title is engraved at 0.88rem, the body is Soft Ink at 0.8rem. On the hero bench the plates shift up to 5px with the prism's pointer refraction.

### Specification Table (signature)
Ruled definition rows: Muted Ink term at 0.78 to 0.8rem on the left, White Light value right-aligned, Soft Rule between rows and no rule above the first. Values follow the Measured Value Rule. Every project carries one; a graduated rule separates it from the stack line.

### Rail Station and Legend Marks (signature)
A 7px circular mark with a 3px halo where the rail meets a heading. Section headings use a Soft Ink mark with a bench gap ring; content blocks use a station tinted by their wavelength or, without a stage meaning, Muted Ink. State is read from the mark, never from a tinted background.

### Optical Bench (signature)
The hero apparatus: an inbound-orange beam with a wide faint halo stroke, a glass prism holding the portrait at 52% of its height centered on the incenter at 63.6%, three wavelength rays with a soft glow filter, three detector plates, and a graduated baseline. The prism rotates up to 5 degrees toward the pointer's vertical position over 0.5s.

### Motion
- **Easing:** every arrival and refraction uses `cubic-bezier(0.16, 1, 0.3, 1)`; state transitions use `ease` at 0.18 to 0.3s.
- **Arrival sequence (once, on load):** claim, nameplate, intro and actions lift 14px at 0, 0.1, 0.18, 0.26s (0.72s); the beam draws (1.05s); the prism flares from 82% scale at 0.4s (0.9s); rays at 0.55s; plates at 0.62s plus 0.11s each.
- **Ambient:** hero field glows drift 2.5rem by 1.75rem over 19s, alternating.

**The One Arrival Rule.** There is one orchestrated motion, the beam's arrival. Nothing else animates on scroll or on its own; later motion answers the pointer.

**The Wrapper Rule.** An element running `arrive-flare` (or any arrival keyframe ending in `transform: none`) never also carries a layout or interaction transform. Wrap it: position on the outer layer, arrive on the middle layer, refract or drift on the inner one. The animation's final state otherwise overrides the inline transform.

**The Still Bench Rule.** Under `prefers-reduced-motion: reduce`, arrival and drift animations are removed with elements at full opacity and final position, transitions collapse to 0.01ms, and smooth scrolling turns off.

## Do's and Don'ts

### Do:
- **Do** bind a wavelength only to its stage: inbound message and channel, retrieval, resolved answer, scheduling, human handoff, isolation and security.
- **Do** give an item with no stage meaning a neutral Muted Ink mark and an uncolored heading.
- **Do** make every control White Light: primary fill, 2px focus outline offset 3px, caret, selection at 22% white.
- **Do** set a value in Martian Mono with tabular numerals only when it starts with a digit; set everything else in Archivo.
- **Do** set labels as engraved Archivo (font-stretch 80%, +0.02em) in sentence case.
- **Do** hang every section from the one rail with a station mark at its heading.
- **Do** declare `-webkit-backdrop-filter` before `backdrop-filter` on every glass surface.
- **Do** give fixed or overlapping glass a near-opaque bench tint so its text survives whatever passes beneath.
- **Do** wrap an arriving element instead of stacking its arrival animation with a positioning or refraction transform.
- **Do** encode rank by area and use ruled specification rows for evidence.

### Don't:
- **Don't** assign wavelengths by list position, index or for variety, and don't use them to fill, border or tint buttons, links or inputs.
- **Don't** show all six wavelengths together except as canonical-order dispersion.
- **Don't** use Martian Mono for words, stack names or prose values.
- **Don't** add kickers, eyebrows or uppercase tracked labels above headings.
- **Don't** raise anything that is not an optical glass plate; separate flat content with hairlines.
- **Don't** add a second vertical axis, scroll-triggered reveals or a second orchestrated animation.
- **Don't** put `overflow-x` clipping on body; clip the section that overflows.
- **Don't** make a design rule depend on the embeddable chat widget.
