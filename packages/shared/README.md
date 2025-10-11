# @anchor/shared

Shared TypeScript types, interfaces, and utilities used across all Anchor apps.

## What's Inside

- **Types**: Common TypeScript types and interfaces
- **API Client**: HTTP client for communicating with the backend
- **Utilities**: Shared utility functions

## Usage

This package is automatically available in all apps via workspace dependencies.

### In Next.js (apps/web)

```typescript
import { User, ApiClient, type ApiResponse } from '@anchor/shared'

const client = new ApiClient('http://localhost:3001')
const response = await client.get<User>('/api/user/123')
```

### In Expo (apps/mobile)

```typescript
import { User, ApiClient } from '@anchor/shared'

const client = new ApiClient('http://localhost:3001')
// Use the client in your components
```

### In NestJS (apps/api)

```typescript
import { User, type ApiResponse } from '@anchor/shared'

// Use shared types in your controllers/services
```

## Adding New Types

1. Add type definitions in `src/types/`
2. Export from `src/types/index.ts`
3. Run `pnpm build` to compile
4. Types are automatically available in all apps

## Development

```bash
# Watch mode (rebuilds on changes)
pnpm dev

# Build once
pnpm build

# Lint
pnpm lint
```

## Structure

```
src/
├── index.ts           # Main entry point
├── types/
│   └── index.ts      # Type definitions
└── api-client/
    └── index.ts      # API client class
```

