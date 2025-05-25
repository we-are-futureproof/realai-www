# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (currently configured to ignore during builds)

## Architecture Overview

This is a Next.js 15 application using the App Router pattern with TypeScript and Tailwind CSS. The project uses shadcn/ui components built on Radix UI primitives.

### Project Structure

- **App Router**: Uses Next.js App Router with pages in `/app` directory
- **Components**: shadcn/ui components in `/components/ui` with shared utilities
- **Styling**: Tailwind CSS with CSS variables for theming and shadcn/ui design tokens
- **Type Safety**: TypeScript with strict mode enabled

### Current Pages

**Main Pages:**
- `/` - Homepage (main value proposition)
- `/about` - Team backgrounds and company mission
- `/our-approach` - 4-phase methodology and value proposition
- `/ai-tools-landscape` - Comprehensive guide to real estate AI tools
- `/discovery` - Detailed questionnaire for custom strategy
- `/roi-calculator` - ROI calculation tool

**Comparison Pages (16 total):**
- `/compare/realai-vs-activecampaign` - Email automation comparison
- `/compare/realai-vs-building-inhouse` - In-house development vs RealAI
- `/compare/realai-vs-cinc` - Lead generation platform comparison
- `/compare/realai-vs-diy-ai` - DIY AI solutions comparison
- `/compare/realai-vs-follow-up-boss` - CRM integration comparison
- `/compare/realai-vs-hubspot` - General CRM vs real estate-specific AI
- `/compare/realai-vs-kvcore` - All-in-one platform comparison
- `/compare/realai-vs-lofty` - IDX and marketing platform comparison
- `/compare/realai-vs-meetalfred` - LinkedIn automation comparison
- `/compare/realai-vs-roof-ai` - AI chatbot comparison
- `/compare/realai-vs-salesforce` - Enterprise CRM comparison
- `/compare/realai-vs-structurely` - AI assistant comparison
- `/compare/realai-vs-top-producer` - Legacy CRM comparison
- `/compare/realai-vs-traditional-software` - Rule-based vs AI comparison
- `/compare/realai-vs-virtual-assistants` - Virtual assistant comparison
- `/compare/realai-vs-wise-agent` - CRM platform comparison

### Key Technologies

- Next.js 15 with React 19
- shadcn/ui component library (configured in `components.json`)
- Radix UI primitives for accessible components
- Tailwind CSS with custom design system
- TypeScript with path aliases (`@/*` mapping)

### Component System

Uses shadcn/ui component architecture:
- Components are in `/components/ui` following shadcn conventions
- Utility function `cn()` in `/lib/utils.ts` combines clsx and tailwind-merge
- All components use Tailwind CSS with CSS variables for theming
- Dark mode support configured via `class` strategy

### Build Configuration

- ESLint and TypeScript errors are ignored during builds (see `next.config.mjs`)
- Images are unoptimized for static export compatibility
- Uses pnpm as package manager