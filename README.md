# Anchor - Cross-Platform Application

A modern, cross-platform application built with Next.js and React Native, featuring shared UI components and seamless functionality across web and mobile devices.

## 🚀 Features

- **Cross-Platform**: Shared components that work on both web and mobile
- **Modern UI**: Beautiful, responsive design with Tailwind CSS and custom components
- **TypeScript**: Full type safety across the entire codebase
- **Monorepo**: Organized with pnpm workspaces and Turborepo
- **Reusable Components**: Comprehensive UI component library
- **Responsive Design**: Optimized for all screen sizes

## 📱 Platforms

- **Web**: Next.js 14 with Tailwind CSS
- **Mobile**: React Native with Expo
- **API**: NestJS backend (optional)

## 🏗️ Architecture

```
anchor-your-now/
├── apps/
│   ├── web/          # Next.js web application
│   ├── mobile/       # React Native mobile app
│   └── api/          # NestJS API server
├── packages/
│   ├── ui/           # Shared UI components
│   └── shared/       # Shared utilities and types
└── ...
```

## 🎨 UI Components

### Web Components
- `Button` - Various styles and sizes
- `Input` - Form input with validation
- `Card` - Content containers
- `Modal` - Overlay dialogs
- `Badge` - Status indicators
- `Alert` - Notification messages
- `Select` - Dropdown selections
- `Textarea` - Multi-line text input
- `Checkbox` - Boolean input
- `LoadingSpinner` - Loading indicators

### Mobile Components
- `MobileButton` - Touch-optimized buttons
- `MobileInput` - Native text inputs
- `MobileCard` - Mobile-friendly cards

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- pnpm v8+
- Expo CLI (for mobile development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anchor-your-now
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables (see SETUP.md for details)

4. Start development servers:
```bash
pnpm dev
```

This will start:
- Web app: http://localhost:3000
- Mobile app: Scan QR code with Expo Go
- API server: http://localhost:3001

## 📖 Usage

### Web Application

The web app features a modern dashboard with:
- Responsive navigation
- Feature showcase
- Interactive components
- Modal dialogs
- Form handling

### Mobile Application

The mobile app provides:
- Native mobile experience
- Touch-optimized interactions
- Responsive layouts
- Platform-specific styling

### Shared Components

Use components from the `@anchor/ui` package:

```tsx
import { Button, Card, Input } from '@anchor/ui'

// Web usage
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>

// Mobile usage
<MobileButton variant="primary" onPress={handlePress}>
  Click me
</MobileButton>
```

## 🎯 Key Features Demonstrated

1. **Cross-Platform Consistency**: Same functionality across web and mobile
2. **Component Reusability**: Shared UI components with platform-specific implementations
3. **Modern Development**: TypeScript, modern tooling, and best practices
4. **Responsive Design**: Optimized for all screen sizes
5. **Interactive Elements**: Modals, forms, and dynamic content

## 🏃‍♂️ Development

### Available Scripts

```bash
# Development
pnpm dev                 # Start all apps
pnpm --filter @anchor/web dev    # Web only
pnpm --filter @anchor/mobile dev # Mobile only

# Building
pnpm build              # Build all apps
pnpm --filter @anchor/ui build   # Build UI package

# Testing
pnpm test               # Run all tests
pnpm lint               # Lint all code
pnpm format             # Format code
```

### Adding New Components

1. Create component in `packages/ui/src/`
2. Add mobile version in `packages/ui/src/mobile/`
3. Export from `packages/ui/src/index.tsx`
4. Build the package: `pnpm --filter @anchor/ui build`
5. Use in apps: `import { Component } from '@anchor/ui'`

## 📱 Mobile Development

The mobile app uses Expo with the following features:
- Expo Router for navigation
- React Native components
- Native styling with StyleSheet
- Platform-specific optimizations

### Running on Device

1. Install Expo Go app on your device
2. Run `pnpm --filter @anchor/mobile dev`
3. Scan the QR code with Expo Go
4. App will load on your device

## 🌐 Web Development

The web app uses Next.js 14 with:
- App Router
- Tailwind CSS for styling
- Server-side rendering
- Static generation

### Deployment

```bash
# Build for production
pnpm --filter @anchor/web build

# Start production server
pnpm --filter @anchor/web start
```

## 🔧 Configuration

### Environment Variables

See `SETUP.md` for detailed environment configuration.

### Styling

- **Web**: Tailwind CSS with custom components
- **Mobile**: React Native StyleSheet with consistent design tokens

## 📚 Documentation

- [Setup Guide](SETUP.md) - Detailed setup instructions
- [Quick Reference](QUICK_REFERENCE.md) - Common commands and patterns
- [Contributing](CONTRIBUTING.md) - Development guidelines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Mobile app powered by [Expo](https://expo.dev/)
- UI components inspired by modern design systems
- Monorepo setup with [Turborepo](https://turbo.build/)

---

**Anchor** - Your foundation for cross-platform applications.