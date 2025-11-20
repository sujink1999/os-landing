# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vanta OS Landing Page - A Next.js 16 marketing site for Vanta OS, an AI-driven operating system for high-performance living. The site features complex animations, video experiences, and an email capture flow with API integration.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (with webpack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs on http://localhost:3000

## Architecture Overview

### App Structure

This is a Next.js 16 App Router project with a hybrid rendering approach:

- **Root Layout** (`src/app/layout.js`) - Server component that wraps all pages with `ClientLayout`
- **ClientLayout** (`src/app/ClientLayout.js`) - Client component that provides `GlobalProvider` context to entire app
- **Routes**:
  - `/` - Simple "Coming Soon" page
  - `/demo` - Component showcase page for glassmorphic inputs and buttons
  - `/complex` - Standalone view of the ComplexSystem animation
  - `/invest` - Main landing page with full marketing experience (uses `Landing` component)

### Key Architectural Patterns

1. **Global Context Pattern**: `GlobalContext` (`src/context/GlobalContext.js`) manages email submission state:
   - Stores `hasRecordedEmail` boolean flag in localStorage (not the actual email)
   - Provides `recordEmail()` function to POST to API and update state
   - API endpoint: `${NEXT_PUBLIC_API_URL}/api/investors`
   - Used to gate access to content after email submission

2. **Component Organization**:
   - `src/components/landing/` - Marketing page sections (Hero, Globe, Carousel, Footer, etc.)
   - `src/components/system/` - UI system components and health dashboard widgets
   - Landing components are composed into the full experience via `Landing.js`

3. **System Components Pattern**: The `/complex` route and `Splash` component use `ComplexSystem.js`, which orchestrates an animated health dashboard with multiple interconnected widgets:
   - Uses fixed 1200x900px canvas, scaled via CSS transforms to fit viewport
   - Animates ~15 health widgets (HumanModel, Brain, BioMarkers, Insurance, etc.) with staggered delays
   - Each widget animates independently using CSS animations and BorderAnimation component

4. **Splash Animation Sequence** (`Splash.js`):
   - Step 1 (2s): Show "YOUR HEALTH IS COMPLEX" text
   - Step 2 (6s): ComplexSystem animation appears
   - Step 3 (3s): Overlay with "YOUR HEALTHCARE DOESN'T HAVE TO BE"
   - Step 4 (1s): Fade to black
   - Step 5: Email capture form with GlowingInput and GlowingButton
   - On submission, calls `recordEmail()` and context handles transition

### Animation Libraries

- **GSAP with ScrollTrigger**: Used extensively in landing components (especially Hero.js) for scroll-driven video playback and timeline animations
- **CSS Animations**: Custom Tailwind animations for components (fade-in, scale, line-expand, gradient shimmer)
- **Three.js via react-globe.gl**: Globe component for 3D visualization

### Styling System

- **Tailwind CSS 4**: Primary styling framework
- **Custom Fonts**:
  - "Aoi Mono" - Monospace font for body text
  - "Tussilago" - Display font for headlines
  - Fonts loaded via @font-face in `globals.css` from `/public/assets/fonts/`
- **Design System**: Glassmorphic UI with glowing effects (GlowingInput, GlowingButton, GlassButton components)

### Environment Variables

Required in `.env.local` or `.env`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Used by GlobalContext for email submission API endpoint.

## Common Patterns

### Adding New Landing Sections

1. Create component in `src/components/landing/`
2. Import and add to composition in `Landing.js`
3. Sections are full-width, stacked vertically with `bg-black` background

### Working with ComplexSystem

- ComplexSystem has fixed dimensions (1200x900px)
- Scale it using CSS transforms: `scale(calc(90vh / 900px))` for desktop, `scale(calc(50vh / 900px))` for mobile
- Add new widgets by importing into ComplexSystem.js and positioning with absolute coordinates
- Use staggered `delay` props for animation sequencing

### Creating New System Components

- Follow glassmorphic design pattern (backdrop-blur, transparency, glowing borders)
- Use BorderAnimation for animated borders
- Most widgets are positioned absolutely within ComplexSystem's canvas
- Animation delays create choreographed entrance sequence

### Video Components

- Hero component uses scroll-driven video playback via GSAP ScrollTrigger
- Store videos in `/public/assets/videos/`
- Use `ref` and GSAP timeline to sync video.currentTime with scroll progress

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- GSAP with ScrollTrigger
- Three.js (via react-globe.gl)
- react-calendly for scheduling integration
