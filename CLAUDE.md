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