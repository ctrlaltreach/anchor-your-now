# Anchor Mobile App

Expo (React Native) mobile application.

## Setup

1. Install dependencies (from root):
   ```bash
   pnpm install
   ```

2. Create `.env` file:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Create placeholder assets (or use your own):
   - `assets/icon.png` - 1024x1024px app icon
   - `assets/splash.png` - 1284x2778px splash screen
   - `assets/adaptive-icon.png` - 1024x1024px Android adaptive icon
   - `assets/favicon.png` - 48x48px favicon for web

## Development

```bash
# Start Expo dev server
pnpm dev

# Run on iOS simulator (requires Xcode)
pnpm ios

# Run on Android emulator (requires Android Studio)
pnpm android

# Run on web
pnpm web
```

**Note**: All commands now use the bundled Expo CLI (`npx expo`) instead of the global CLI.

## Build

```bash
pnpm build
```

This exports the app for production deployment.

