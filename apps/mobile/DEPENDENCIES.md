# Expo SDK 54 - Dependencies Reference

## Current Versions (All Optimized for SDK 54)

### Expo Core Packages

| Package | Version | Purpose |
|---------|---------|---------|
| `expo` | ~54.0.0 | Core Expo SDK |
| `expo-router` | ~4.0.0 | File-based routing |
| `expo-constants` | ~17.0.0 | Device/app constants |
| `expo-linking` | ~7.0.0 | Deep linking support |
| `expo-font` | ~13.0.0 | Custom font loading |
| `expo-splash-screen` | ~0.29.0 | Splash screen control |
| `expo-status-bar` | ~2.0.0 | Status bar styling |
| `expo-system-ui` | ~4.0.0 | System UI customization |

### React Ecosystem

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.3.1 | React core library |
| `react-dom` | 18.3.1 | React DOM rendering |
| `react-native` | 0.76.5 | React Native framework |

### React Native Components

| Package | Version | Purpose |
|---------|---------|---------|
| `react-native-web` | ~0.19.13 | Web platform support |
| `react-native-screens` | ~4.4.0 | Native screen components |
| `react-native-safe-area-context` | 4.14.0 | Safe area handling |
| `react-native-gesture-handler` | ~2.20.0 | Touch gesture system |
| `react-native-reanimated` | ~3.16.0 | High-performance animations |

### Backend & Services

| Package | Version | Purpose |
|---------|---------|---------|
| `@supabase/supabase-js` | ^2.39.0 | Supabase client SDK |

### Development Tools

| Package | Version | Purpose |
|---------|---------|---------|
| `@babel/core` | ^7.25.0 | JavaScript compiler |
| `typescript` | ^5.3.3 | TypeScript compiler |
| `eslint` | ^8.57.0 | Code linting |
| `prettier` | ^3.3.0 | Code formatting |
| `eslint-config-expo` | ^7.1.2 | Expo ESLint config |

## Version Compatibility Matrix

| Expo SDK | React Native | React | Node | Expo Go |
|----------|--------------|-------|------|---------|
| 54 | 0.76.5 | 18.3.1 | 18+ | 2.33+ |
| 50 | 0.73.6 | 18.2.0 | 18+ | 2.31+ |
| 49 | 0.72.6 | 18.2.0 | 18+ | 2.28+ |

## Important Notes

### React Native 0.76 Features
- **New Architecture Ready**: Can be enabled via `newArchEnabled: true` in app.json
- **Better Performance**: Improved rendering and startup times
- **Enhanced TypeScript**: Better type inference and safety
- **Debugging Tools**: Improved debugging experience with better error messages

### Expo Router 4.0 Features
- **Typed Routes**: Auto-completion and type safety for navigation
- **Improved Performance**: Faster navigation and rendering
- **Enhanced Deep Linking**: Better URL handling and parsing
- **Better Error Handling**: Clearer error messages and recovery

### Required Native Modules

These packages require native code and are managed by Expo:

1. **expo-splash-screen** - Native splash screen API
2. **expo-font** - Native font loading
3. **react-native-reanimated** - Native animation driver
4. **react-native-gesture-handler** - Native gesture recognition
5. **react-native-screens** - Native screen optimization
6. **react-native-safe-area-context** - Native safe area detection

## Adding New Dependencies

### For Expo-compatible packages:
```bash
cd apps/mobile
npx expo install package-name
```

This ensures version compatibility with SDK 54.

### For standard npm packages:
```bash
pnpm --filter @anchor/mobile add package-name
```

### Checking Compatibility:
```bash
cd apps/mobile
npx expo-doctor
```

This will warn you about incompatible packages.

## Upgrade Path

When a new Expo SDK is released:

1. Check release notes: https://blog.expo.dev
2. Update `expo` package version in package.json
3. Run `npx expo install --fix` to update all dependencies
4. Update `react-native` to the compatible version
5. Test thoroughly before production deployment

## Troubleshooting Dependencies

### If you see "peer dependency" warnings:
```bash
pnpm install --force
```

### If packages seem incompatible:
```bash
cd apps/mobile
npx expo-doctor
```

### To verify all versions:
```bash
cd apps/mobile
npx expo install --check
```

### To update to latest compatible versions:
```bash
cd apps/mobile
npx expo install --fix
```

## Known Working Configurations

This configuration has been tested and verified to work with:

- ✅ iOS 14+ (via Expo Go)
- ✅ Android 5+ (API 21+, via Expo Go)
- ✅ Web browsers (Chrome, Safari, Firefox)
- ✅ TypeScript 5.3
- ✅ Node.js 18+
- ✅ pnpm 8+

## References

- [Expo SDK 54 Changelog](https://blog.expo.dev/expo-sdk-54)
- [React Native 0.76 Release](https://reactnative.dev/blog)
- [Expo Router Documentation](https://docs.expo.dev/router)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)

## Support

For version-specific issues:
- Expo SDK issues: https://github.com/expo/expo/issues
- React Native issues: https://github.com/facebook/react-native/issues
- Specific package issues: Check the package's GitHub repository

