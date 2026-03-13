# @vassale/sitare

A professional, accessible, and customizable React hook for password visibility toggling.

## Features

- **Framework Agnostic Core:** Logic is separated from React state.
- **Accessibility First:** Fully ARIA compliant out of the box.
- **Smart Defaults:** Includes minimal SVG icons by default.
- **Customizable:** Use your own icons or UI components.
- **Prop Merging:** Safely merges user props with hook-generated props.
- **State Sync:** Automatically handles `disabled` and `readOnly` states.

## Installation

```bash
npm install @vassale/sitare
# or
yarn add @vassale/sitare
# or
pnpm add @vassale/sitare
```

## Usage

### Basic Usage

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

### With Custom Icons

```tsx
import { useSitare } from '@vassale/sitare';
import { MyEyeIcon, MyEyeOffIcon } from './icons';

function PasswordInput() {
  const { inputProps, btnProps } = useSitare({
    icons: {
      show: <MyEyeIcon />,
      hide: <MyEyeOffIcon />
    }
  });

  return (
    <div>
      <input {...inputProps} />
      <button {...btnProps} />
    </div>
  );
}
```

### Merging Props

You can pass your own props to the hook to ensure they are merged correctly with the internal logic.

```tsx
import { useSitare } from '@vassale/sitare';

function PasswordInput() {
  const { inputProps, btnProps } = useSitare({
    btnProps: {
      className: 'my-custom-btn',
      onClick: () => console.log('Button clicked!'), // Both this and the toggle logic will run
    }
  });

  return (
    <div>
      <input {...inputProps} />
      <button {...btnProps} />
    </div>
  );
}
```

## API

### `useSitare(options)`

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

## License

MIT
