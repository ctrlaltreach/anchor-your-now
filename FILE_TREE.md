# Anchor Monorepo - Complete File Tree

This document shows the complete file structure of the Anchor monorepo.

```
anchor-your-now/
│
├── apps/
│   ├── web/                          # Next.js Frontend
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── layout.tsx       # Root layout
│   │   │       ├── page.tsx         # Home page
│   │   │       └── globals.css      # Global styles with Tailwind
│   │   ├── .eslintrc.json           # ESLint config
│   │   ├── .env.example             # Environment variables template
│   │   ├── next.config.js           # Next.js configuration
│   │   ├── package.json             # Dependencies & scripts
│   │   ├── postcss.config.js        # PostCSS config for Tailwind
│   │   ├── tailwind.config.ts       # Tailwind CSS configuration
│   │   ├── tsconfig.json            # TypeScript config
│   │   └── README.md                # Web app documentation
│   │
│   ├── mobile/                       # Expo Mobile App
│   │   ├── app/
│   │   │   ├── _layout.tsx          # Root layout
│   │   │   └── index.tsx            # Home screen
│   │   ├── assets/                  # Images & assets (to be created)
│   │   │   ├── icon.png
│   │   │   ├── splash.png
│   │   │   ├── adaptive-icon.png
│   │   │   └── favicon.png
│   │   ├── .eslintrc.js             # ESLint config
│   │   ├── .env.example             # Environment variables template
│   │   ├── app.json                 # Expo configuration
│   │   ├── package.json             # Dependencies & scripts
│   │   ├── tsconfig.json            # TypeScript config
│   │   └── README.md                # Mobile app documentation
│   │
│   └── api/                          # NestJS Backend
│       ├── src/
│       │   ├── app.controller.ts    # Main controller
│       │   ├── app.module.ts        # Root module
│       │   ├── app.service.ts       # Main service
│       │   └── main.ts              # Entry point
│       ├── .eslintrc.js             # ESLint config
│       ├── .env.example             # Environment variables template
│       ├── nest-cli.json            # NestJS CLI config
│       ├── package.json             # Dependencies & scripts
│       ├── tsconfig.json            # TypeScript config
│       └── README.md                # API documentation
│
├── packages/
│   ├── shared/                       # Shared Types & API Client
│   │   ├── src/
│   │   │   ├── api-client/
│   │   │   │   └── index.ts         # API client implementation
│   │   │   ├── types/
│   │   │   │   └── index.ts         # Shared TypeScript types
│   │   │   └── index.ts             # Package entry point
│   │   ├── package.json             # Dependencies & scripts
│   │   ├── tsconfig.json            # TypeScript config
│   │   ├── tsup.config.ts           # Build configuration
│   │   └── README.md                # Shared package docs
│   │
│   └── ui/                           # Shared UI Components
│       ├── src/
│       │   ├── Button.tsx           # Button component
│       │   └── index.tsx            # Package entry point
│       ├── package.json             # Dependencies & scripts
│       ├── tsconfig.json            # TypeScript config
│       ├── tsup.config.ts           # Build configuration
│       └── README.md                # UI package docs
│
├── .editorconfig                     # Editor configuration
├── .gitignore                        # Git ignore rules
├── .nvmrc                            # Node version specification
├── .prettierrc                       # Prettier configuration
├── CONTRIBUTING.md                   # Contribution guidelines
├── FILE_TREE.md                      # This file
├── LICENSE                           # MIT License
├── README.md                         # Main documentation
├── SETUP.md                          # Detailed setup guide
├── package.json                      # Root package.json with workspace scripts
├── pnpm-workspace.yaml               # pnpm workspaces configuration
├── tsconfig.base.json                # Base TypeScript config
└── turbo.json                        # Turborepo configuration
```

## File Counts

- **Apps**: 3 (web, mobile, api)
- **Packages**: 2 (shared, ui)
- **Total TypeScript Files**: ~20+
- **Config Files**: ~15+

## Key Files Explained

### Root Configuration

- **package.json**: Defines workspace-level scripts and dev dependencies
- **pnpm-workspace.yaml**: Configures pnpm workspaces (apps/* and packages/*)
- **turbo.json**: Turborepo pipeline configuration for builds, dev, lint, test
- **tsconfig.base.json**: Base TypeScript configuration inherited by all packages
- **.gitignore**: Standard Node.js + Next.js + Expo ignore patterns

### Apps

Each app has:
- **package.json**: App-specific dependencies and scripts
- **tsconfig.json**: TypeScript config extending base config
- **src/**: Source code directory
- **.env.example**: Environment variables template

### Packages

Each package has:
- **package.json**: Package dependencies and build scripts
- **tsconfig.json**: TypeScript config for the package
- **tsup.config.ts**: Build configuration using tsup
- **src/**: Source code with index.ts entry point

## Environment Files (Not in Git)

These need to be created manually (see SETUP.md):

```
apps/web/.env
apps/mobile/.env
apps/api/.env
```

## Build Artifacts (Git Ignored)

```
.turbo/
.next/
dist/
node_modules/
*.tsbuildinfo
```

## Next Steps

1. Follow **SETUP.md** for detailed setup instructions
2. Read **README.md** for quick start
3. Check individual app READMEs for app-specific docs
4. See **CONTRIBUTING.md** for contribution guidelines

