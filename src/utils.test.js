import { describe, it, expect } from 'vitest';
import { format } from './utils.js';

describe('format()', () => {
  it('formats integer to 3 decimal places', () => {
    expect(format(10)).toBe('10.000');
  });

  it('formats float with many decimals to 3 decimal places', () => {
    expect(format(10.123456)).toBe('10.123');
  });

  it('rounds to 3 decimal places (up)', () => {
    expect(format(10.1236)).toBe('10.124');
  });

  it('rounds to 3 decimal places (down)', () => {
    expect(format(10.1234)).toBe('10.123');
  });

  it('formats 0 to "0.000"', () => {
    expect(format(0)).toBe('0.000');
  });

  it('formats negative numbers correctly', () => {
    expect(format(-1.23456)).toBe('-1.235');
  });
});
