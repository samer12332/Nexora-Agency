# Nexora Agency Website

Premium bilingual (English/Arabic) agency portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Features

- Bilingual UI: English (LTR) and Arabic (RTL)
- Sticky smart navbar with active section tracking
- Smooth section scrolling with offset handling
- Premium animation system (cards, hero, timeline, micro-interactions)
- Mobile-first responsive layout
- Contact form with `mailto:` flow
- Social links in Footer and Contact section

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  WhyUs.tsx
  Process.tsx
  Solutions.tsx
  Trust.tsx
  Contact.tsx
  Footer.tsx
data/
  content.ts
public/
  logo.png
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Contact Behavior

The contact form currently uses a `mailto:` flow, which opens the visitor's default email client with prefilled content.

## Repository

GitHub: https://github.com/samer12332/Nexora-Agency

