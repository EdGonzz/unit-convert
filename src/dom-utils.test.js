import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { typeWriter } from './dom-utils.js';

describe('typeWriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('types out text character by character', () => {
    const element = { textContent: '' };
    const text = 'Hello';

    typeWriter(element, text, 10);

    // The first character is rendered immediately because type() is called directly
    expect(element.textContent).toBe('H');

    vi.advanceTimersByTime(10);
    expect(element.textContent).toBe('He');

    vi.advanceTimersByTime(10);
    expect(element.textContent).toBe('Hel');

    vi.advanceTimersByTime(20);
    expect(element.textContent).toBe('Hello');
  });

  it('cancels previous typing animation if called again on the same element', () => {
    const element = { textContent: '' };

    // Start first animation
    typeWriter(element, 'First', 10);

    // The first character 'F' is typed immediately
    expect(element.textContent).toBe('F');

    // Advance by 20ms to type two more characters: 'i', 'r'
    vi.advanceTimersByTime(20);
    expect(element.textContent).toBe('Fir');

    // Start second animation on the same element before the first one finishes
    typeWriter(element, 'Second', 10);

    // The textContent should be reset and start with the first character of 'Second'
    expect(element.textContent).toBe('S');

    // Advance timers
    vi.advanceTimersByTime(10);
    expect(element.textContent).toBe('Se');

    vi.advanceTimersByTime(100);
    expect(element.textContent).toBe('Second');

    // The first animation shouldn't interfere anymore.
    // We already passed the time when 'First' would have completed.
    expect(element.textContent).toBe('Second');
  });
});
