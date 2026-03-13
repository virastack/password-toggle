import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSitare } from './useSitare';
import React from 'react';

describe('useSitare', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useSitare());

    expect(result.current.isVisible).toBe(false);
    expect(result.current.inputProps.type).toBe('password');
    expect(result.current.btnProps['aria-pressed']).toBe(false);
  });

  it('should toggle visibility', () => {
    const { result } = renderHook(() => useSitare());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isVisible).toBe(true);
    expect(result.current.inputProps.type).toBe('text');
    expect(result.current.btnProps['aria-pressed']).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isVisible).toBe(false);
    expect(result.current.inputProps.type).toBe('password');
  });

  it('should respect defaultVisible prop', () => {
    const { result } = renderHook(() => useSitare({ defaultVisible: true }));

    expect(result.current.isVisible).toBe(true);
    expect(result.current.inputProps.type).toBe('text');
  });

  it('should handle disabled state', () => {
    const { result } = renderHook(() => useSitare({ disabled: true }));

    expect(result.current.inputProps.disabled).toBe(true);
    expect(result.current.btnProps.disabled).toBe(true);

    act(() => {
      result.current.toggle();
    });

    // Should not toggle when disabled
    expect(result.current.isVisible).toBe(false);
  });

  it('should handle readOnly state', () => {
    const { result } = renderHook(() => useSitare({ readOnly: true }));

    expect(result.current.inputProps.readOnly).toBe(true);
    expect(result.current.btnProps.disabled).toBe(true); // Button should be disabled for readOnly inputs too

    act(() => {
      result.current.toggle();
    });

    // Should not toggle when readOnly
    expect(result.current.isVisible).toBe(false);
  });

  it('should merge user props correctly', () => {
    const userOnClick = vi.fn();
    const userClassName = 'custom-class';

    const { result } = renderHook(() => useSitare({
      btnProps: {
        onClick: userOnClick,
        className: userClassName,
      }
    }));

    // Check className merging
    // Note: The hook doesn't add a default className, so it should just be the user's
    expect(result.current.btnProps.className).toBe(userClassName);

    // Check onClick merging
    act(() => {
      // We need to simulate the click on the button props
      result.current.btnProps.onClick?.({} as React.MouseEvent<HTMLButtonElement>);
    });

    expect(result.current.isVisible).toBe(true); // Internal toggle should work
    expect(userOnClick).toHaveBeenCalled(); // User handler should be called
  });

  it('should use custom icons', () => {
    const CustomShow = () => <div>Show</div>;
    const CustomHide = () => <div>Hide</div>;

    const { result } = renderHook(() => useSitare({
      icons: {
        show: <CustomShow />,
        hide: <CustomHide />
      }
    }));

    // Initial state (hidden) -> show icon
    // We check if the element type matches
    expect((result.current.btnProps.children as React.ReactElement).type).toBe(CustomShow);

    act(() => {
      result.current.toggle();
    });

    // Visible state -> hide icon
    expect((result.current.btnProps.children as React.ReactElement).type).toBe(CustomHide);
  });

  it('should generate correct ARIA attributes', () => {
    const { result } = renderHook(() => useSitare({ id: 'test-id' }));

    expect(result.current.inputProps.id).toBe('test-id');
    expect(result.current.btnProps['aria-controls']).toBe('test-id');
    expect(result.current.btnProps['aria-label']).toBe('Toggle password visibility');
    expect(result.current.btnProps.type).toBe('button');
  });
});
