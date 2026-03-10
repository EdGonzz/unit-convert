import { describe, it, expect } from 'vitest';
import {
  convertLength,
  convertVolume,
  convertMass,
  METER_TO_FEET,
  LITER_TO_GALLON,
  KILO_TO_POUND,
} from './conversions.js';

describe('convertLength()', () => {
  it('converts meters to feet (forward)', () => {
    const result = convertLength(10);
    expect(result.forward).toBeCloseTo(10 * METER_TO_FEET, 5);
  });

  it('converts feet to meters (reverse)', () => {
    const result = convertLength(10);
    expect(result.reverse).toBeCloseTo(10 / METER_TO_FEET, 5);
  });

  it('handles zero', () => {
    const result = convertLength(0);
    expect(result.forward).toBe(0);
    expect(result.reverse).toBe(0);
  });

  it('handles negative values', () => {
    const result = convertLength(-5);
    expect(result.forward).toBeCloseTo(-5 * METER_TO_FEET, 5);
    expect(result.reverse).toBeCloseTo(-5 / METER_TO_FEET, 5);
  });
});

describe('convertVolume()', () => {
  it('converts liters to gallons (forward)', () => {
    const result = convertVolume(10);
    expect(result.forward).toBeCloseTo(10 * LITER_TO_GALLON, 5);
  });

  it('converts gallons to liters (reverse)', () => {
    const result = convertVolume(10);
    expect(result.reverse).toBeCloseTo(10 / LITER_TO_GALLON, 5);
  });

  it('handles zero', () => {
    const result = convertVolume(0);
    expect(result.forward).toBe(0);
    expect(result.reverse).toBe(0);
  });

  it('handles large values', () => {
    const result = convertVolume(1000);
    expect(result.forward).toBeCloseTo(1000 * LITER_TO_GALLON, 5);
    expect(result.reverse).toBeCloseTo(1000 / LITER_TO_GALLON, 5);
  });
});

describe('convertMass()', () => {
  it('converts kilograms to pounds (forward)', () => {
    const result = convertMass(10);
    expect(result.forward).toBeCloseTo(10 * KILO_TO_POUND, 5);
  });

  it('converts pounds to kilograms (reverse)', () => {
    const result = convertMass(10);
    expect(result.reverse).toBeCloseTo(10 / KILO_TO_POUND, 5);
  });

  it('handles zero', () => {
    const result = convertMass(0);
    expect(result.forward).toBe(0);
    expect(result.reverse).toBe(0);
  });

  it('handles decimal values', () => {
    const result = convertMass(2.5);
    expect(result.forward).toBeCloseTo(2.5 * KILO_TO_POUND, 5);
    expect(result.reverse).toBeCloseTo(2.5 / KILO_TO_POUND, 5);
  });
});

describe('Conversion roundtrip integrity', () => {
  it('length: converting forward then reverse returns close to original', () => {
    const value = 42;
    const { forward } = convertLength(value);
    const backToOriginal = forward / METER_TO_FEET;
    expect(backToOriginal).toBeCloseTo(value, 5);
  });

  it('volume: converting forward then reverse returns close to original', () => {
    const value = 42;
    const { forward } = convertVolume(value);
    const backToOriginal = forward / LITER_TO_GALLON;
    expect(backToOriginal).toBeCloseTo(value, 5);
  });

  it('mass: converting forward then reverse returns close to original', () => {
    const value = 42;
    const { forward } = convertMass(value);
    const backToOriginal = forward / KILO_TO_POUND;
    expect(backToOriginal).toBeCloseTo(value, 5);
  });
});
