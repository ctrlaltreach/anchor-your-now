# Expo Upgrade Notes

## Latest Changes

### Expo SDK 54 (Current - Latest Stable)

We've upgraded to **Expo SDK 54** - the latest stable release with React Native 0.76!

#### What Changed

**Major Package Updates:**
- `expo`: `~49.0.15` → `~54.0.0`
- `expo-router`: `^2.0.0` → `~4.0.0`
- `expo-status-bar`: `~1.6.0` → `~2.0.0`
- `react`: `18.2.0` → `18.3.1`
- `react-native`: `0.72.6` → `0.76.5` ⚡ (Major upgrade!)
- `react-native-safe-area-context`: `4.6.3` → `4.14.0`
- `react-native-screens`: `~3.22.0` → `~4.4.0`

**New Dependencies:**
- `expo-linking`: `~7.0.0` (Required for Expo Router 4)
- `expo-constants`: `~17.0.0` (Required for SDK 54)

**Script Updates:**
All scripts now use `npx expo` instead of the deprecated global `expo` CLI:
- `expo start` → `npx expo start`
- `expo build` → `npx expo export`

**New Features in SDK 54:**
- 🚀 React Native 0.76 with New Architecture ready
- ⚡ Expo Router 4.0 with improved navigation
- 📱 Better TypeScript support with typed routes
- 🎨 Enhanced Metro bundler performance
- 🔧 Improved developer experience
- 🌐 Better web support
- 📦 Smaller bundle sizes

#### Migration Guide

If you're upgrading from an older version:

1. **Update dependencies:**
   ```bash
   cd apps/mobile
   pnpm install
   ```

2. **Clear cache:**
   ```bash
   npx expo start --clear
   ```

3. **Update Expo Go app:**
   - iOS: Update from App Store
   - Android: Update from Play Store

4. **Remove global expo-cli** (if installed):
   ```bash
   npm uninstall -g expo-cli
   ```

## Why Use Bundled CLI?

The global `expo-cli` is deprecated. Benefits of the bundled CLI:

✅ **Always up-to-date**: Installed with your project dependencies
✅ **No version conflicts**: Each project has its own CLI version
✅ **Better performance**: Optimized for the SDK version you're using
✅ **Official recommendation**: Supported by Expo team

## Expo SDK Compatibility

| SDK | React Native | Node | Expo Go Required | Release Date |
|-----|--------------|------|------------------|--------------|
| 54  | 0.76.5       | 18+  | Latest (≥2.33)   | Jan 2025     |
| 50  | 0.73.6       | 18+  | 2.31.0+          | Jan 2024     |
| 49  | 0.72.6       | 18+  | 2.28.0+          | Jun 2023     |

## Useful Commands

```bash
# Start development server
npx expo start

# Start with cache cleared
npx expo start --clear

# Start in tunnel mode (for complex networks)
npx expo start --tunnel

# Run on iOS simulator
npx expo start --ios

# Run on Android emulator
npx expo start --android

# Check diagnostics
npx expo-doctor

# Update dependencies
npx expo install --fix
```

## Troubleshooting

### "Expo CLI is not installed"
This is fine! Use `npx expo` instead of `expo`.

### "Unable to resolve module"
```bash
# Clear all caches
rm -rf node_modules
pnpm install
npx expo start --clear
```

### "Incompatible Expo Go version"
Update Expo Go app from App Store / Play Store to the latest version.

### TypeScript errors
```bash
# Regenerate typed routes
npx expo customize tsconfig.json
```

## What's New in React Native 0.76?

- **New Architecture Support**: Ready for React Native's new architecture (disabled by default)
- **Better Performance**: Improved rendering and startup times
- **TypeScript Improvements**: Better type safety out of the box
- **Debugging Tools**: Enhanced debugging experience
- **Faster Metro**: Improved bundler performance

## Resources

- [Expo SDK 54 Release Notes](https://blog.expo.dev/expo-sdk-54)
- [Expo Router 4.0 Docs](https://docs.expo.dev/router/introduction/)
- [React Native 0.76 Release](https://reactnative.dev/blog)
- [New Expo CLI Announcement](https://blog.expo.dev/the-new-expo-cli-f4250d8e3421)

