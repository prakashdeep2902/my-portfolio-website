# Prakash Deep Sharma — Portfolio

Premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui + Radix primitives
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

| File | Purpose |
|------|---------|
| `src/lib/data.ts` | Site content, projects, skills, blog posts |
| `src/lib/ai-responses.ts` | AI assistant placeholder responses |
| `src/lib/siteConfig` in `data.ts` | Email, GitHub, LinkedIn URLs |
| `public/resume.pdf` | Add your resume for the download button |

### Connect OpenAI (AI Assistant)

Replace placeholder logic in `src/lib/ai-responses.ts` with an API route:

1. Create `src/app/api/chat/route.ts`
2. Call OpenAI from the server with `OPENAI_API_KEY`
3. Update `AssistantWidget` to fetch from `/api/chat`

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) for optimal Next.js performance.

## Project Structure

```
src/
├── app/              # Next.js app router, SEO, sitemap
├── components/
│   ├── ai/           # Floating assistant widget
│   ├── effects/      # Animations, cursor, typing
│   ├── layout/       # Navbar, footer
│   ├── sections/     # Page sections
│   └── ui/           # shadcn/ui components
├── hooks/            # Scroll & active section hooks
├── lib/              # Data, utils, AI responses
└── types/            # TypeScript interfaces
```

## License

Private — © 2026 Prakash Deep Sharma
