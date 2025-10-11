# Anchor - Quick Reference Guide

## 🚀 Getting Started (30 seconds)

```bash
pnpm install          # Install dependencies
pnpm dev              # Start all apps
```

Open:
- Web: http://localhost:3000
- API: http://localhost:3001
- Mobile: Scan QR code with Expo Go

## 📦 Package Manager Commands

```bash
# Install a package to a specific app
pnpm --filter @anchor/web add package-name
pnpm --filter @anchor/api add package-name
pnpm --filter @anchor/mobile add package-name

# Install dev dependency
pnpm --filter @anchor/web add -D package-name

# Remove a package
pnpm --filter @anchor/web remove package-name

# Install to root (workspace-level dev tools only)
pnpm add -Dw package-name
```

## 🛠️ Common Commands

### Development

```bash
pnpm dev                              # All apps
pnpm --filter @anchor/web dev         # Web only
pnpm --filter @anchor/api dev         # API only
pnpm --filter @anchor/mobile dev      # Mobile only
pnpm --filter @anchor/mobile ios      # iOS simulator
pnpm --filter @anchor/mobile android  # Android emulator
```

### Build

```bash
pnpm build                            # Build all
pnpm --filter @anchor/web build       # Web only
pnpm --filter @anchor/api build       # API only
pnpm --filter @anchor/mobile build    # Mobile only
```

### Quality Checks

```bash
pnpm lint                             # Lint all
pnpm test                             # Test all
pnpm format                           # Format all with Prettier
```

### Cleanup

```bash
pnpm clean                            # Clean all build artifacts
rm -rf node_modules && pnpm install   # Fresh install
```

## 📂 Workspace Names

- `@anchor/web` - Next.js frontend
- `@anchor/api` - NestJS backend
- `@anchor/mobile` - Expo mobile app
- `@anchor/shared` - Shared types & API client
- `@anchor/ui` - Shared UI components

## 🔑 Environment Variables

### apps/web/.env
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

### apps/mobile/.env
```bash
EXPO_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=xxx
```

### apps/api/.env
```bash
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
PORT=3001
```

## 📝 File Locations

### Add a new page (Next.js)
`apps/web/src/app/your-page/page.tsx`

### Add a new API endpoint (NestJS)
`apps/api/src/your-module/your-module.controller.ts`

### Add a new mobile screen (Expo)
`apps/mobile/app/your-screen.tsx`

### Add shared types
`packages/shared/src/types/index.ts`

### Add shared UI component
`packages/ui/src/YourComponent.tsx`

## 🐛 Troubleshooting

### Port already in use
```bash
lsof -ti:3000 | xargs kill -9  # Kill Next.js
lsof -ti:3001 | xargs kill -9  # Kill NestJS
```

### TypeScript errors
```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Cache issues
```bash
rm -rf .turbo .next dist node_modules
pnpm install
```

### Expo not loading
```bash
# Clear cache and restart
cd apps/mobile && npx expo start --clear

# Try tunnel mode (slower but works with complex networks)
cd apps/mobile && npx expo start --tunnel

# Check Expo Go app is up to date
# Update it from App Store / Play Store
```

## 🎯 Code Locations

```
apps/web/src/app/          → Next.js pages (App Router)
apps/api/src/              → NestJS controllers, services, modules
apps/mobile/app/           → Expo screens (File-based routing)
packages/shared/src/       → Shared types, utilities, API client
packages/ui/src/           → Reusable React components
```

## 📚 Import Examples

### Using shared package in Next.js
```typescript
import { User, ApiClient } from '@anchor/shared'
import { Button } from '@anchor/ui'
```

### Using shared package in Expo
```typescript
import { User, ApiClient } from '@anchor/shared'
import { Button } from '@anchor/ui'
```

### Using shared package in NestJS
```typescript
import { User } from '@anchor/shared'
```

## 🔄 Typical Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes**
   - Edit files in relevant app/package
   - Add types to `packages/shared` if needed
   - Add UI components to `packages/ui` if needed

3. **Test locally**
   ```bash
   pnpm dev
   # Test in browser/simulator
   ```

4. **Check quality**
   ```bash
   pnpm lint
   pnpm test
   pnpm build
   ```

5. **Commit & push**
   ```bash
   git add .
   git commit -m "feat: add my feature"
   git push origin feature/my-feature
   ```

## 🏗️ Adding New Features

### Add a new shared type
1. Edit `packages/shared/src/types/index.ts`
2. Export type
3. Run `pnpm --filter @anchor/shared build`
4. Use in any app: `import { YourType } from '@anchor/shared'`

### Add a new API endpoint
1. Create/edit controller in `apps/api/src/`
2. Add route handler
3. Test with `curl http://localhost:3001/your-endpoint`

### Add a new page (Web)
1. Create `apps/web/src/app/your-page/page.tsx`
2. Visit http://localhost:3000/your-page

### Add a new screen (Mobile)
1. Create `apps/mobile/app/your-screen.tsx`
2. Navigate to it in the app

## 📊 Tech Stack Quick Links

- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com)
- [Expo Docs](https://docs.expo.dev)
- [Supabase Docs](https://supabase.com/docs)
- [Turborepo Docs](https://turbo.build/repo)
- [pnpm Docs](https://pnpm.io)

## 💡 Tips

- **Hot reload**: All apps support hot reload in dev mode
- **Type safety**: TypeScript is configured across all apps
- **Code sharing**: Use `packages/shared` for types and utilities
- **Parallel builds**: Turbo caches and parallelizes builds
- **Monorepo benefits**: Share code, types, and tooling across apps

## 🎓 Learning Path

1. Start with `apps/web` (easiest to see changes)
2. Add some UI components in `packages/ui`
3. Define types in `packages/shared`
4. Build API endpoints in `apps/api`
5. Create mobile screens in `apps/mobile`

---

**Need more help?** Check:
- `README.md` - Project overview
- `SETUP.md` - Detailed setup
- `CONTRIBUTING.md` - Contribution guide
- Individual app READMEs in each app directory

