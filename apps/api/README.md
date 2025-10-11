# Anchor API

NestJS backend API with TypeScript.

## Setup

1. Install dependencies (from root):
   ```bash
   pnpm install
   ```

2. Create `.env` file:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   PORT=3001
   ```

## Development

```bash
pnpm dev
```

API runs on http://localhost:3001

## Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Build

```bash
pnpm build
pnpm start
```

## Testing

```bash
pnpm test
pnpm test:watch
pnpm test:cov
```

