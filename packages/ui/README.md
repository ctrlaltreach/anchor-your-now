# @anchor/ui

Shared React UI components used across Anchor web and mobile apps.

## What's Inside

- **Button**: Customizable button component
- More components to come...

## Usage

This package is automatically available in web and mobile apps via workspace dependencies.

### In Next.js (apps/web)

```typescript
import { Button } from '@anchor/ui'

export default function Page() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  )
}
```

### In Expo (apps/mobile)

```typescript
import { Button } from '@anchor/ui'
import { View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </View>
  )
}
```

## Adding New Components

1. Create component in `src/` (e.g., `src/Input.tsx`)
2. Export from `src/index.tsx`
3. Run `pnpm build` to compile
4. Component is automatically available in all apps

## Development

```bash
# Watch mode (rebuilds on changes)
pnpm dev

# Build once
pnpm build

# Lint
pnpm lint
```

## Component Guidelines

- Use TypeScript for all components
- Define clear prop interfaces
- Keep components simple and composable
- Support both web and React Native where possible
- Add JSDoc comments for better IntelliSense

## Structure

```
src/
├── index.tsx        # Main entry point
├── Button.tsx       # Button component
└── ...              # Other components
```

