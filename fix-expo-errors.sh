#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔧 FIXING EXPO INVARIANT VIOLATION ERRORS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Stop any running processes
echo "1️⃣  Stopping any running processes..."
pkill -f "expo" || true
pkill -f "metro" || true
echo "   ✅ Processes stopped"
echo ""

# Clean node_modules and caches
echo "2️⃣  Cleaning node_modules and caches..."
rm -rf node_modules
rm -rf apps/mobile/node_modules
rm -rf apps/mobile/.expo
rm -rf apps/mobile/ios
rm -rf apps/mobile/android
rm -rf apps/*/node_modules/.cache
rm -rf .turbo
echo "   ✅ Cleaned"
echo ""

# Reinstall dependencies
echo "3️⃣  Reinstalling dependencies (this may take a minute)..."
pnpm install
echo "   ✅ Dependencies installed"
echo ""

# Clear Metro cache
echo "4️⃣  Clearing Metro bundler cache..."
cd apps/mobile
npx expo start --clear &
EXPO_PID=$!
echo "   ✅ Started Expo with cleared cache"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ SETUP COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📱 The Expo dev server is now starting..."
echo "   Scan the QR code with your Expo Go app (v2.33+)"
echo ""
echo "   To stop: Press Ctrl+C"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Wait for the expo process
wait $EXPO_PID

