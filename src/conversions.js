/** @typedef {{ forward: string; reverse: string }} ConversionResult */

/** Conversion factors */
export const METER_TO_FEET = 3.281;
export const LITER_TO_GALLON = 0.264;
export const KILO_TO_POUND = 2.204;

/**
 * Convert meters ↔ feet
 * @param {number} value
 * @returns {ConversionResult}
 */
export const convertLength = (value) => ({
  forward: value * METER_TO_FEET,
  reverse: value / METER_TO_FEET,
});

/**
 * Convert liters ↔ gallons
 * @param {number} value
 * @returns {ConversionResult}
 */
export const convertVolume = (value) => ({
  forward: value * LITER_TO_GALLON,
  reverse: value / LITER_TO_GALLON,
});

/**
 * Convert kilograms ↔ pounds
 * @param {number} value
 * @returns {ConversionResult}
 */
export const convertMass = (value) => ({
  forward: value * KILO_TO_POUND,
  reverse: value / KILO_TO_POUND,
});
