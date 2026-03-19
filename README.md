<div align="center">
  <img src="./public/hero.jpg" alt="Vira Stack Password" />
</div>

<br />

<div align="center">
  <a href="https://www.npmjs.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/npm/v/@virastack/password-toggle?style=flat-square&color=black" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/npm/dt/@virastack/password-toggle?style=flat-square&color=black" alt="npm downloads" />
  </a>
  <a href="https://bundlephobia.com/package/@virastack/password-toggle">
    <img src="https://img.shields.io/bundlephobia/minzip/@virastack/password-toggle?style=flat-square&color=black" alt="bundle size" />
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

- [**AI Rules**](https://github.com/virastack/ai-rules) – Standardized AI rules for consistent code generation
- [**Next.js Boilerplate**](https://github.com/virastack/nextjs-boilerplate) – Full-featured, scalable Next.js starter kit
- [**Input Mask**](https://github.com/virastack/input-mask) – Lightweight, zero-dependency input masking library
- [**Password Toggle**](https://github.com/virastack/password-toggle) – Accessible, headless password visibility component
- [**Modern Web in 3 Mins**](https://github.com/virastack/modern-web-in-3-minutes) – Learn the standards of modern web development in 3 minutes.

... and more at [**virastack.com**](https://virastack.com)

## License

Licensed under the <a href="https://github.com/virastack/password-toggle/blob/main/LICENSE">MIT License</a>.

## Maintainer

A project by [**Ömer Gülçiçek**](https://omergulcicek.com)

[![Follow Ömer Gülçiçek](https://img.shields.io/github/followers/omergulcicek?label=Follow&style=social)](https://github.com/omergulcicek)
