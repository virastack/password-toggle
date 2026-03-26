<div align="center">
  <img src="./public/hero.jpg" alt="Vira Stack Password" />
</div>

<br />

<div align="center">
  <a href="https://www.npmjs.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/npm/v/@virastack/password-toggle" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/npm/dt/@virastack/password-toggle" alt="npm downloads" />
  </a>
  <a href="https://bundlephobia.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/bundlephobia/minzip/@virastack/password-toggle" alt="bundle size" />
  </a>
</div>

<br />

# ViraStack Password Toggle

Fully accessible and customizable password visibility hook for React.

- ♿ **Accessibility First:** Fully ARIA compliant out of the box for better screen reader support.
- 🧩 **Framework Agnostic:** Logic is separated from React state, making it adaptable and clean.
- 🎨 **Smart Defaults:** Includes minimal SVG icons by default, so you can start using it immediately.
- 🔄 **Prop Merging:** Safely merges user props with hook-generated props to prevent overrides.
- 🔒 **State Sync:** Automatically handles `disabled` and `readOnly` states for a consistent UX.

### [Read the docs →](https://virastack.com/password)

## Quick Start

```bash
npm install @virastack/password-toggle
```

```tsx
import { useViraPassword } from '@virastack/password-toggle';

function App() {
  const { inputProps, btnProps } = useViraPassword();

  return (
    <div>
      <input {...inputProps} placeholder="Enter password" />
      <button {...btnProps} />
    </div>
  );
}
```

## Explore the ViraStack Ecosystem

### Projects

- [**Next.js Boilerplate**](https://github.com/virastack/nextjs-boilerplate) - Production-ready Next.js 16+ starter template built with Tailwind CSS 4 and TypeScript.
- [**AI Rules**](https://github.com/virastack/ai-rules) - AI-native architecture kit and high-discipline protocols for modern React applications.
- [**Input Mask**](https://github.com/virastack/input-mask) - Lightweight, zero-dependency input masking library optimized for React Hook Form.
- [**Password Toggle**](https://github.com/virastack/password-toggle) - Fully accessible and highly customizable password visibility hook for React.
- [**Modern Web in 3 Minutes**](https://github.com/virastack/modern-web-in-3-minutes) - Master modern web development standards in just 3 minutes.

### 🚧 Coming Soon

- [**Start (CLI)**](https://github.com/virastack/cli) - Automated scaffolding tool to initialize and scale high-discipline ViraStack architectures.
- [**TanStack Boilerplate**](https://github.com/virastack/tanstack-boilerplate) - Production-ready TanStack Start starter template built with Tailwind CSS 4 and TypeScript.
- [**Standards**](https://github.com/virastack/standards) - A unified suite of ESLint, Prettier, and architectural rules to enforce absolute code integrity.
- [**Error Guard**](https://github.com/virastack/error-guard) - Pro-grade error handling and smart recovery protocols for zero-friction React environments.

... and more at [**virastack.com**](https://virastack.com)

## License

Licensed under the <a href="https://github.com/virastack/password-toggle/blob/main/LICENSE">MIT License</a>.

## Maintainer

A project by [**Ömer Gülçiçek**](https://omergulcicek.com)

[![Follow Ömer Gülçiçek](https://img.shields.io/github/followers/omergulcicek?label=Follow&style=social)](https://github.com/omergulcicek)
