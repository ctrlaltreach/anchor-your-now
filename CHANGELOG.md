# Changelog

All notable changes to the Anchor monorepo will be documented in this file.

## [Unreleased]

### Changed
- **Expo SDK 54 Upgrade**: Upgraded to latest stable SDK 54 (2025-01-11)
  - Expo: `~49.0.15` → `~54.0.0` (Major upgrade!)
  - Expo Router: `^2.0.0` → `~4.0.0`
  - React Native: `0.72.6` → `0.76.5` (Major upgrade!)
  - React: `18.2.0` → `18.3.1`
  - Added `expo-linking` and `expo-constants` dependencies
  - All scripts use `npx expo` (bundled CLI)
  - TypeScript config now extends `expo/tsconfig.base`
  - Added Metro config for better bundling
  - New Architecture ready (disabled by default)
  - See `apps/mobile/UPGRADE_NOTES.md` for full details

## [0.1.0] - 2024-10-11

### Added
- Initial monorepo scaffold with Turborepo + pnpm workspaces
- Next.js 14 web app with TypeScript and Tailwind CSS
- Expo mobile app with Expo Router
- NestJS backend API
- Shared packages for types and UI components
- Supabase integration setup
- Comprehensive documentation (README, SETUP, QUICK_REFERENCE, etc.)
- ESLint and Prettier configuration
- Development and production build scripts

### Features
- TypeScript configured across all apps and packages
- Hot reload for all apps
- Turborepo build caching and parallelization
- Shared type safety between frontend and backend
- Reusable UI components package

---

## Version History

- **0.1.0** (2024-10-11): Initial scaffold release
  - 3 apps (web, mobile, api)
  - 2 packages (shared, ui)
  - Full TypeScript support
  - Expo SDK 50

