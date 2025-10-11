# Contributing to Anchor

Thank you for your interest in contributing to Anchor! This document provides guidelines and instructions for contributing.

## Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/anchor.git
   cd anchor
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**
   - Write your code
   - Follow the existing code style
   - Add tests if applicable

5. **Test Your Changes**
   ```bash
   # Run all tests
   pnpm test
   
   # Run linter
   pnpm lint
   
   # Format code
   pnpm format
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

7. **Push & Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## Code Style

- **TypeScript**: Use TypeScript for all code
- **Formatting**: Use Prettier (runs automatically)
- **Linting**: Fix all ESLint errors before committing
- **Naming**:
  - Files: Use kebab-case (`user-service.ts`)
  - Components: Use PascalCase (`UserProfile.tsx`)
  - Variables/Functions: Use camelCase (`getUserData`)
  - Constants: Use UPPER_SNAKE_CASE (`API_BASE_URL`)

## Project Structure

```
anchor/
├── apps/
│   ├── web/      # Next.js changes
│   ├── mobile/   # Expo changes
│   └── api/      # NestJS changes
└── packages/
    ├── shared/   # Shared types & utilities
    └── ui/       # Shared UI components
```

## Adding Dependencies

```bash
# To a specific workspace
pnpm --filter @anchor/web add package-name

# To root (only dev tools)
pnpm add -Dw package-name
```

## Testing

- Write unit tests for utilities and services
- Write integration tests for API endpoints
- Write component tests for UI components

## Pull Request Guidelines

1. **Title**: Use conventional commit format
2. **Description**: Explain what and why (not how)
3. **Tests**: Add tests for new features
4. **Documentation**: Update docs if needed
5. **Screenshots**: Add screenshots for UI changes

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas

Thank you for contributing! 🎉

