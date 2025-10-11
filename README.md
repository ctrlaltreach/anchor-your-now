# Anchor

A full-stack TypeScript monorepo powered by Turborepo, pnpm workspaces, Next.js, Expo, NestJS, and Supabase.

## 🏗️ Project Structure

```
anchor/
├── apps/
│   ├── web/          # Next.js frontend (TypeScript + App Router)
│   ├── mobile/       # Expo (React Native) mobile app
│   └── api/          # NestJS backend API
├── packages/
│   ├── shared/       # Shared TypeScript types & API client
│   └── ui/           # Shared React UI components
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.x or higher
- **pnpm**: v8.x or higher
- **Supabase account** (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd anchor-your-now
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create `.env` files in each app directory:

   **apps/web/.env**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   **apps/mobile/.env**
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   **apps/api/.env**
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   PORT=3001
   ```

4. **Run in development mode**
   ```bash
   pnpm dev
   ```

   This starts all apps concurrently:
   - Web: http://localhost:3000
   - API: http://localhost:3001
   - Mobile: Expo dev server (scan QR code)

## 📦 Workspaces

### Apps

#### `apps/web` - Next.js Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (optional)
- **Dev**: `pnpm --filter @anchor/web dev`
- **Build**: `pnpm --filter @anchor/web build`

#### `apps/mobile` - Expo Mobile App
- **Framework**: Expo SDK 54 / React Native 0.76
- **Router**: Expo Router v4
- **Language**: TypeScript
- **CLI**: Uses bundled Expo CLI (`npx expo`)
- **Dev**: `pnpm --filter @anchor/mobile dev`
- **iOS**: `pnpm --filter @anchor/mobile ios`
- **Android**: `pnpm --filter @anchor/mobile android`

#### `apps/api` - NestJS Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Dev**: `pnpm --filter @anchor/api dev`
- **Build**: `pnpm --filter @anchor/api build`

### Packages

#### `packages/shared` - Shared Types & API Client
- Shared TypeScript types and interfaces
- API client for frontend-backend communication
- **Build**: `pnpm --filter @anchor/shared build`

#### `packages/ui` - Shared UI Components
- Reusable React components
- Used in both web and mobile apps
- **Build**: `pnpm --filter @anchor/ui build`

## 🛠️ Available Scripts

### Root Commands

```bash
# Install all dependencies
pnpm install

# Run all apps in development
pnpm dev

# Build all apps and packages
pnpm build

# Run all apps in production mode
pnpm start

# Lint all apps and packages
pnpm lint

# Run tests across all workspaces
pnpm test

# Format code with Prettier
pnpm format

# Clean all node_modules and build artifacts
pnpm clean
```

### Per-Workspace Commands

```bash
# Run commands in specific workspace
pnpm --filter @anchor/web dev
pnpm --filter @anchor/api build
pnpm --filter @anchor/mobile test

# Or navigate to workspace directory
cd apps/web
pnpm dev
```

## 🔧 Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Frontend**: Next.js 14 (TypeScript)
- **Mobile**: Expo (React Native + TypeScript)
- **Backend**: NestJS (TypeScript)
- **Database**: Supabase (PostgreSQL)
- **Type Safety**: TypeScript across all apps
- **Package Manager**: pnpm
- **Build Tool**: Turbo

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Expo Docs](https://docs.expo.dev/)
- [NestJS Docs](https://docs.nestjs.com/)
- [Supabase Docs](https://supabase.com/docs)
- [Turborepo Docs](https://turbo.build/repo/docs)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm test`
4. Submit a pull request

## 📝 License

MIT
