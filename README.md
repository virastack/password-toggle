<div align="center">
  <img src="./public/sitare.svg" alt="Sitare" width="160" />
</div>

# Sitare

**A professional, accessible, and customizable React hook for password visibility toggling.**

Sitare is a lightweight, framework-agnostic hook designed to handle password visibility toggling with ease. It prioritizes accessibility, offers smart defaults, and allows full customization of icons and UI components.

![npm](https://img.shields.io/npm/v/@vassale/sitare)
![bundlephobia](https://img.shields.io/bundlephobia/minzip/@vassale/sitare)
![types](https://img.shields.io/npm/types/@vassale/sitare)
![license](https://img.shields.io/npm/l/@vassale/sitare)
![npm downloads](https://img.shields.io/npm/dw/@vassale/sitare)

## 🚀 Live Demo & Documentation

For interactive demos, full API reference, and advanced usage examples, visit:

👉 **[sitare.omergulcicek.com](https://sitare.omergulcicek.com)**

---

## ✨ Why Sitare?

Most password visibility implementations are repetitive or lack proper accessibility attributes. Sitare provides a robust, "React-First" solution.

* **🧩 Framework Agnostic Core:** Logic is separated from React state, making it adaptable and clean.
* **♿ Accessibility First:** Fully ARIA compliant out of the box for better screen reader support.
* **🎨 Smart Defaults:** Includes minimal SVG icons by default, so you can start using it immediately.
* **🛠️ Customizable:** Use your own icons or UI components to match your design system.
* **🔄 Prop Merging:** Safely merges user props with hook-generated props to prevent overrides.
* **🔒 State Sync:** Automatically handles `disabled` and `readOnly` states for a consistent UX.

## 🚀 Installation

```bash
npm install @vassale/sitare
```

## 🛠️ Quick Start

Sitare provides a simple hook that gives you everything you need to build a password input.

```tsx
import { useSitare } from '@vassale/sitare';

function PasswordInput() {
  const { inputProps, btnProps } = useSitare();

  return (
    <div className="password-input-container">
      <input {...inputProps} placeholder="Enter password" />
      <button {...btnProps} />
    </div>
  );
}
```

## 📦 Features & API

Sitare is designed to be flexible. You can customize icons, merge props, and control state manually if needed.

### With Custom Icons

```tsx
const { inputProps, btnProps } = useSitare({
  icons: {
    show: <MyEyeIcon />,
    hide: <MyEyeOffIcon />
  }
});
```

### API Reference

#### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `defaultVisible` | `boolean` | `false` | Initial visibility state. |
| `icons` | `{ show: ReactNode, hide: ReactNode }` | `undefined` | Custom icons for show/hide states. |
| `disabled` | `boolean` | `false` | Disables both input and button. |
| `readOnly` | `boolean` | `false` | Sets input to read-only and disables button. |
| `id` | `string` | `undefined` | Custom ID for the input. |
| `inputProps` | `InputHTMLAttributes` | `undefined` | Props to merge into the input. |
| `btnProps` | `ButtonHTMLAttributes` | `undefined` | Props to merge into the button. |

#### Returns

| Name | Type | Description |
|------|------|-------------|
| `inputProps` | `object` | Props to spread onto the `<input>` element. |
| `btnProps` | `object` | Props to spread onto the `<button>` element. |
| `isVisible` | `boolean` | Current visibility state. |
| `toggle` | `() => void` | Function to toggle visibility manually. |
| `setVisible` | `(visible: boolean) => void` | Function to set visibility manually. |

For more details, please check the **[official documentation](https://sitare.omergulcicek.com)**.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Built with ❤️ by [Ömer Gülçiçek](https://omergulcicek.com)
