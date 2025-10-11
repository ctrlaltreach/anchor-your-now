# Anchor Web App

Next.js 14 frontend with TypeScript and Tailwind CSS.

## Setup

1. Install dependencies (from root):
   ```bash
   pnpm install
   ```

2. Create `.env` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

## Development

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
pnpm build
pnpm start
```

## Features

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Supabase integration
- Shared packages (@anchor/shared, @anchor/ui)

