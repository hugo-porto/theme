# CLAUDE.md

This file provides guidance for AI assistants working on this codebase.

## Project Overview

Personal website and blog for Nicolás Palavecino — a technology leader focused on platform engineering, SRE, and tech leadership. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deployed as a static site on Netlify.

- **Live URL:** https://nicolaspalavecino.com
- **Node requirement:** >= 18.0.0

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Production build (static export to out/)
npm run lint     # Run ESLint
npm start        # Start production server
```

There are no tests configured in this project. Validate changes with `npm run build` and `npm run lint`.

## Architecture

### Tech Stack

- **Framework:** Next.js 14 with App Router (`output: 'export'` for static site generation)
- **Language:** TypeScript 5.4 (strict mode enabled)
- **Styling:** Tailwind CSS 3.4 with `@tailwindcss/typography` plugin
- **Content:** MDX files parsed with `next-mdx-remote`, `gray-matter`, and `reading-time`
- **Icons:** `lucide-react`
- **Date formatting:** `date-fns`
- **Deployment:** Netlify (static export to `out/` directory)

### Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (metadata, fonts, ThemeProvider)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles, Tailwind directives, utility classes
│   ├── about/page.tsx            # About page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/page.tsx       # Dynamic blog post page (static generation)
│   ├── work/page.tsx             # Services/Work with me page
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/                   # Reusable React components
│   ├── Header.tsx                # Responsive navigation (client component)
│   ├── Footer.tsx                # Footer with social links (server component)
│   ├── ThemeProvider.tsx         # Dark mode context provider (client component)
│   └── ThemeToggle.tsx           # Theme toggle button (client component)
├── content/
│   └── posts/                    # Blog posts as MDX files with YAML frontmatter
└── lib/
    └── posts.ts                  # Blog post utilities (getAllPosts, getPostBySlug, getAllTags)
```

### Key Configuration Files

- `next.config.js` — Static export, trailing slashes, React strict mode, CSS optimization, console removal in production
- `tsconfig.json` — Strict mode, ES2020 target, path alias `@/*` maps to `./src/*`
- `tailwind.config.js` — Class-based dark mode, custom color palette (primary: sky blue, neutral: gray), Inter + JetBrains Mono fonts, typography plugin with dark variant
- `netlify.toml` — Build config, security headers, asset caching, RSS redirects

## Code Conventions

### Component Patterns

- **Server components by default.** Only use `'use client'` when the component needs browser APIs, event handlers, or React hooks (useState, useEffect, useContext).
- Current client components: `Header.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`.
- Use composition over inheritance for component structure.
- Use `lucide-react` for all icons — do not introduce other icon libraries.

### Imports

- Use the `@/` path alias for all imports from `src/` (e.g., `import Header from '@/components/Header'`).
- Import types with `import type { ... }` when importing only types.

### Styling

- Use Tailwind utility classes directly in JSX. Avoid CSS modules or styled-components.
- Dark mode: use Tailwind `dark:` variants (class-based strategy). The theme is managed by `ThemeProvider` using React Context + localStorage.
- Custom utility classes are defined in `src/app/globals.css` under `@layer components` (e.g., `.btn-primary`, `.btn-secondary`, `.text-gradient`).
- Responsive design follows mobile-first approach with Tailwind breakpoints (`md:`, `lg:`).
- Custom color tokens: `primary-{50-900}` (sky blue) and `neutral-{50-950}` (gray).

### TypeScript

- Strict mode is enforced (`strict: true` in tsconfig).
- All components and functions should be properly typed.
- The `Post` interface is defined in `src/lib/posts.ts`.

### Blog Content

Blog posts are MDX files in `src/content/posts/`. Each post requires this frontmatter format:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short description for listings and SEO"
tags: ["Tag1", "Tag2"]
---
```

- Filenames become URL slugs (e.g., `future-of-sre.mdx` -> `/blog/future-of-sre/`).
- Reading time is calculated automatically by the `reading-time` library.
- Posts are sorted by date (newest first) in `getAllPosts()`.
- MDX supports GitHub Flavored Markdown (via `remark-gfm`) and syntax highlighting (via `rehype-highlight`).

### SEO

- Page metadata is configured using the Next.js Metadata API in `layout.tsx` and individual pages.
- Dynamic sitemap is generated in `src/app/sitemap.ts`.
- OpenGraph and Twitter Card metadata are set in the root layout.
- URLs use trailing slashes (configured in `next.config.js`).

## Deployment

- **Platform:** Netlify with `@netlify/plugin-nextjs`
- **Build output:** Static files in `out/` directory
- **Build command:** `npm run build`
- **Node version:** 18 (set in `netlify.toml`)
- Pushes to the main branch trigger automatic builds and deploys.
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are configured in `netlify.toml`.
- Static assets (fonts, images) have 1-year cache headers.
