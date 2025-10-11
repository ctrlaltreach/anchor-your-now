# Expo Troubleshooting Guide

## Common Errors and Solutions

### ❌ Invariant Violation Errors

**Symptoms:**
- Red screen with "Invariant Violation" error
- "Element type is invalid" errors
- "Cannot read property of undefined" errors

**Root Causes:**
1. Missing required dependencies for Expo Router 4
2. Outdated package versions
3. Cache issues
4. Incorrect Babel configuration

**Solution:**

#### Quick Fix (Automated)
```bash
# From the root directory
./fix-expo-errors.sh
```

#### Manual Fix

1. **Stop all running processes:**
   ```bash
   # Press Ctrl+C in terminal running Expo
   # Or kill processes:
   pkill -f expo
   pkill -f metro
   ```

2. **Clean everything:**
   ```bash
   rm -rf node_modules
   rm -rf apps/mobile/node_modules
   rm -rf apps/mobile/.expo
   rm -rf apps/mobile/ios
   rm -rf apps/mobile/android
   ```

3. **Reinstall dependencies:**
   ```bash
   pnpm install
   ```

4. **Start with clear cache:**
   ```bash
   cd apps/mobile
   npx expo start --clear
   ```

### ❌ "Unable to resolve module" Errors

**Solution:**
```bash
cd apps/mobile
rm -rf node_modules .expo
cd ../..
pnpm install
cd apps/mobile
npx expo start --clear
```

### ❌ "Expo Go is not compatible" Error

**Cause:** Your Expo Go app is too old for SDK 54

**Solution:**
1. Update Expo Go from App Store (iOS) or Play Store (Android)
2. You need version 2.33 or higher
3. If updated and still doesn't work, try:
   ```bash
   cd apps/mobile
   npx expo start --clear --dev-client
   ```

### ❌ "Cannot find module 'react-native-reanimated'"

**Solution:**
```bash
pnpm --filter @anchor/mobile add react-native-reanimated
cd apps/mobile
npx expo start --clear
```

### ❌ Babel Configuration Issues

**Symptoms:**
- "Plugin/Preset not found" errors
- Reanimated not working properly

**Solution:**
Ensure `babel.config.js` exists with correct configuration:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
```

### ❌ Metro Bundler Hanging or Slow

**Solution:**
```bash
# Clear Metro cache
rm -rf apps/mobile/.expo
rm -rf node_modules/.cache

# Restart with clear cache
cd apps/mobile
npx expo start --clear --reset-cache
```

### ❌ "Error: Metro has encountered an error"

**Solution:**
```bash
# Kill all Node processes
pkill -f node

# Clean and restart
cd apps/mobile
rm -rf .expo node_modules
cd ../..
pnpm install
cd apps/mobile
npx expo start --clear
```

### ❌ TypeScript Errors with Expo Router

**Solution:**
```bash
cd apps/mobile
npx expo customize tsconfig.json
# Select 'tsconfig.json' when prompted
```

## Required Dependencies Checklist

Make sure these are in your `package.json`:

### Core Dependencies:
- ✅ `expo` (~54.0.0)
- ✅ `expo-router` (~4.0.0)
- ✅ `expo-constants` (~17.0.0)
- ✅ `expo-linking` (~7.0.0)
- ✅ `expo-splash-screen` (~0.29.0)
- ✅ `expo-font` (~13.0.0)
- ✅ `expo-system-ui` (~4.0.0)
- ✅ `react` (18.3.1)
- ✅ `react-native` (0.76.5)
- ✅ `react-dom` (18.3.1)
- ✅ `react-native-web` (~0.19.13)
- ✅ `react-native-reanimated` (~3.16.0)
- ✅ `react-native-gesture-handler` (~2.20.0)
- ✅ `react-native-safe-area-context` (4.14.0)
- ✅ `react-native-screens` (~4.4.0)

## Required Files Checklist

- ✅ `babel.config.js` - Babel configuration
- ✅ `metro.config.js` - Metro bundler config
- ✅ `app/_layout.tsx` - Root layout
- ✅ `app/+html.tsx` - HTML root for web
- ✅ `app/+not-found.tsx` - 404 page
- ✅ `app/index.tsx` - Home page

## Diagnostic Commands

```bash
# Check Expo version
npx expo --version

# Check for outdated packages
cd apps/mobile
npx expo-doctor

# Check Metro bundler health
npx expo start --no-dev --minify

# Generate type definitions
npx expo customize tsconfig.json

# Clear all caches
watchman watch-del-all (if watchman installed)
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*
```

## Still Having Issues?

1. **Check Expo Go version**: Must be 2.33 or higher
2. **Check Node version**: Must be 18 or higher
3. **Try tunnel mode**: `npx expo start --tunnel`
4. **Check for conflicting packages**: Run `npx expo-doctor`
5. **Read full logs**: Look at terminal output carefully

## Need More Help?

- Check `apps/mobile/UPGRADE_NOTES.md` for upgrade details
- See Expo documentation: https://docs.expo.dev
- Expo Router docs: https://docs.expo.dev/router
- Report issues: Include full error message and steps to reproduce

## Quick Reference

```bash
# Full reset (nuclear option)
rm -rf node_modules apps/mobile/{node_modules,.expo,ios,android}
pnpm install
cd apps/mobile && npx expo start --clear

# Start from root directory
pnpm dev

# Start only mobile app
pnpm --filter @anchor/mobile dev

# Start with tunnel (for complex networks)
cd apps/mobile && npx expo start --tunnel

# Clear cache and restart
cd apps/mobile && npx expo start --clear
```

