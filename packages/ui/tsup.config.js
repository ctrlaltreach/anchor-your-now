import { defineConfig } from 'tsup'

export default defineConfig([
  // Web build (no React Native)
  {
    entry: ['src/index.tsx'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['react'],
    outDir: 'dist',
  },
  // Mobile build (with React Native)
  {
    entry: ['src/mobile.tsx'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    external: ['react', 'react-native'],
    outDir: 'dist/mobile',
  },
])
