# Anchor - Complete Setup Guide

This guide will walk you through setting up the Anchor monorepo from scratch.

## Prerequisites

### Required Software

1. **Node.js v18+**
   ```bash
   # Check your Node version
   node --version
   
   # If using nvm
   nvm use 18
   ```

2. **pnpm v8+**
   ```bash
   # Install pnpm globally
   npm install -g pnpm
   
   # Or use corepack (recommended)
   corepack enable
   corepack prepare pnpm@8.9.0 --activate
   ```

3. **Supabase Account**
   - Sign up at https://supabase.com
   - Create a new project
   - Note down your project credentials

## Step 1: Install Dependencies

From the root directory:

```bash
pnpm install
```

This will install all dependencies for all apps and packages.

## Step 2: Set Up Supabase

1. Go to https://app.supabase.com
2. Create a new project (note: wait 2-3 minutes for setup to complete)
3. Go to Settings > API
4. Copy the following values:
   - **Project URL** (SUPABASE_URL)
   - **anon/public key** (SUPABASE_ANON_KEY)
   - **service_role key** (SUPABASE_SERVICE_ROLE_KEY) - **Keep this secret!**

## Step 3: Configure Environment Variables

### apps/web/.env

```bash
cd apps/web
cat > .env << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
EOF
```

### apps/mobile/.env

```bash
cd ../mobile
cat > .env << 'EOF'
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
EOF
```

### apps/api/.env

```bash
cd ../api
cat > .env << 'EOF'
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
PORT=3001
EOF
```

**Replace** the placeholder values with your actual Supabase credentials!

## Step 4: Create Mobile App Assets (Optional)

The mobile app requires some image assets. For development, you can use placeholders:

```bash
cd apps/mobile
mkdir -p assets
```

Create the following placeholder images (or use your own):
- `assets/icon.png` - 1024x1024px app icon
- `assets/splash.png` - 1284x2778px splash screen  
- `assets/adaptive-icon.png` - 1024x1024px Android adaptive icon
- `assets/favicon.png` - 48x48px favicon for web

**Quick placeholder creation** (requires ImageMagick):
```bash
# Install ImageMagick first: brew install imagemagick
magick -size 1024x1024 xc:#0070f3 assets/icon.png
magick -size 1284x2778 xc:#0070f3 assets/splash.png
magick -size 1024x1024 xc:#0070f3 assets/adaptive-icon.png
magick -size 48x48 xc:#0070f3 assets/favicon.png
```

Or download free placeholder images from https://placeholder.com or similar services.

## Step 5: Run the Development Servers

From the **root directory**:

```bash
cd ../..  # Back to root
pnpm dev
```

This will start all three apps concurrently:
- ✅ **Web** (Next.js): http://localhost:3000
- ✅ **API** (NestJS): http://localhost:3001
- ✅ **Mobile** (Expo): Scan QR code with Expo Go app

### Run Individual Apps

If you prefer to run apps separately:

```bash
# Web only
pnpm --filter @anchor/web dev

# API only
pnpm --filter @anchor/api dev

# Mobile only
pnpm --filter @anchor/mobile dev
```

## Step 6: Verify Everything Works

### Test the Web App
1. Open http://localhost:3000
2. You should see "Anchor" welcome page

### Test the API
1. Open http://localhost:3001
2. You should see "Anchor API is running!"
3. Check http://localhost:3001/health for health status

### Test the Mobile App
1. Install "Expo Go" app on your phone (iOS/Android)
2. Scan the QR code shown in terminal
3. App should load and show "Anchor" welcome screen

**Note**: The mobile app now uses **Expo SDK 54** (latest stable) with React Native 0.76 and the bundled CLI (`npx expo`), not the deprecated global `expo-cli`.

## Step 7: Build for Production

```bash
# Build all apps
pnpm build

# Or build individually
pnpm --filter @anchor/web build
pnpm --filter @anchor/api build
pnpm --filter @anchor/mobile build
```

## Common Issues & Troubleshooting

### pnpm command not found
```bash
npm install -g pnpm
```

### Turbo command not found
```bash
pnpm install  # Re-run install
```

### Port already in use
```bash
# Kill processes on ports 3000 or 3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### TypeScript errors in Next.js
```bash
cd apps/web
pnpm build  # This will show specific errors
```

### Expo app not loading
1. Make sure you're on the same WiFi network
2. Ensure you have the latest Expo Go app installed
3. Try running with tunnel: `cd apps/mobile && npx expo start --tunnel`
4. Clear Expo cache: `cd apps/mobile && npx expo start --clear`

### Database connection errors
- Verify your Supabase credentials in `.env` files
- Check that your Supabase project is active
- Ensure you're using the correct API keys

## Next Steps

1. **Database Schema**: Set up your database tables in Supabase
2. **Authentication**: Implement auth in web/mobile apps
3. **API Routes**: Add API endpoints in apps/api
4. **Shared Types**: Define types in packages/shared
5. **UI Components**: Build reusable components in packages/ui

## Useful Commands

```bash
# Add a package to a specific workspace
pnpm --filter @anchor/web add package-name

# Remove a package
pnpm --filter @anchor/web remove package-name

# Run tests
pnpm test

# Lint all code
pnpm lint

# Format code
pnpm format

# Clean everything
pnpm clean && pnpm install
```

## Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com)
- [Expo Docs](https://docs.expo.dev)
- [Supabase Docs](https://supabase.com/docs)

---

**Need help?** Check the individual README files in each app directory for app-specific documentation.

