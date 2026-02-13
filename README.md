# Nicolás Palavecino - Personal Website

A modern, minimal, and performant personal website for a technology leader building toward CTO.

Built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for speed, SEO, and developer experience.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Blog Engine**: MDX-powered blog with syntax highlighting, reading time, and tags
- **SEO Optimized**: Open Graph, Twitter Cards, sitemap, robots.txt
- **Dark Mode**: System-aware theme with manual toggle
- **Performance**: Lighthouse score > 90, optimized assets, lazy loading
- **Responsive**: Mobile-first design, works on all devices
- **Type Safe**: Full TypeScript coverage with strict mode

## 📦 Project Structure

```
nicolas-palavecino-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing & individual posts
│   │   ├── work/              # Work with me page
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   └── sitemap.ts         # Dynamic sitemap generation
│   ├── components/            # React components
│   │   ├── Header.tsx         # Site header with navigation
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ThemeProvider.tsx  # Theme context provider
│   │   └── ThemeToggle.tsx    # Dark mode toggle
│   ├── content/               # Content files
│   │   └── posts/             # Blog posts (MDX)
│   ├── lib/                   # Utility functions
│   │   └── posts.ts           # Blog post utilities
│   └── styles/                # Global styles
├── public/                    # Static assets
│   ├── images/               # Images
│   └── robots.txt            # SEO robots file
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── netlify.toml              # Netlify deployment config
└── package.json              # Dependencies and scripts
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Deployment**: Netlify
- **Icons**: Lucide React

## 📝 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nicolas-palavecino-web.git
cd nicolas-palavecino-web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Netlify (Recommended)

1. **Connect to GitHub**:
   - Push your code to GitHub
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

3. **Add Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

4. **Environment Variables** (If needed):
   - Go to Site settings → Environment variables
   - Add any variables from `.env.example`

### Manual Deployment

Build for production:
```bash
npm run build
```

The static site will be generated in the `out/` directory.

## ✍️ Writing Blog Posts

Create new blog posts in `src/content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
description: "A brief description of your post"
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content here...
```

The blog engine automatically:
- Calculates reading time
- Generates slugs from filenames
- Sorts posts by date
- Renders MDX with syntax highlighting

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    // Your brand colors
  },
}
```

### Metadata

Update site metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Your description',
  // ...
}
```

### Social Links

Update social links in `src/components/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/yourhandle' },
  // ...
]
```

## 📊 Performance

This site is optimized for performance:

- Static site generation (SSG)
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS purging with Tailwind
- Lazy loading components

Target Lighthouse scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

MIT License - feel free to use this as a template for your own site.

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

Nicolás Palavecino - [contact@nicolaspalavecino.com](mailto:contact@nicolaspalavecino.com)

---

**Built with care for technology leaders who want a professional, performant web presence.**
