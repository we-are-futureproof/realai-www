# RealAI Website

**Where real estate meets real intelligence.**

A Next.js website for RealAI, showcasing AI agents and human-guided AI deployment services for real estate brokerages.

## Overview

RealAI transforms real estate brokerages with professional-grade AI deployment. The future of real estate isn't artificial - we combine 20+ years of real estate expertise with cutting-edge AI technology.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **TypeScript**: Full type safety
- **Package Manager**: pnpm
- **Form Handling**: Formspree integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd www2

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── ai-tools-landscape/ # AI tools guide
│   ├── discovery/         # Discovery form
│   ├── our-approach/      # Methodology page
│   ├── vs-meetalfred/     # Comparison page
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── navigation.tsx     # Site navigation
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
├── public/               # Static assets
│   ├── logo.png          # Company logo
│   └── llms.txt          # LLM context file
└── styles/               # Global styles
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags
- **Form Integration**: Formspree-powered discovery questionnaire
- **Consistent Navigation**: Responsive navigation across all pages
- **Brand Integration**: Professional logo and consistent messaging
- **Social Sharing**: Rich OpenGraph and Twitter Card metadata

## Pages

1. **Homepage** (`/`) - Main value proposition and AI agent overview
2. **About** (`/about`) - Team information and company mission
3. **Our Approach** (`/our-approach`) - 4-phase methodology
4. **AI Tools Guide** (`/ai-tools-landscape`) - Comprehensive AI tools breakdown
5. **vs MeetAlfred** (`/vs-meetalfred`) - Competitive comparison
6. **Discovery** (`/discovery`) - Lead qualification form

## Form Submission

The discovery form submits to Formspree (endpoint: `mzzrlpgo`) for lead collection and processing.

## Deployment

The site is configured for easy deployment on Vercel, Netlify, or similar platforms:

- Build command: `pnpm build`
- Output directory: `.next`
- Node.js version: 18+

## Development Notes

- ESLint and TypeScript errors are ignored during builds (configured in `next.config.mjs`)
- Images are unoptimized for static export compatibility
- Uses CSS variables for theming via shadcn/ui
- Dark mode support configured but not actively used

## Brand Assets

- **Logo**: 1000x400px PNG format in `/public/logo.png`
- **Taglines**: 
  - "Where real estate meets real intelligence"
  - "The future of real estate isn't artificial"

## License

Private project for RealAI.

---

For questions or support, contact the development team.