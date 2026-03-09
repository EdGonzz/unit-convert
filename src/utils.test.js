import { test } from 'node:test';
import assert from 'node:assert/strict';
import { format } from './utils.js';

test('format function', async (t) => {
  await t.test('formats integer to 3 decimal places', () => {
    assert.strictEqual(format(10), '10.000');
  });

  await t.test('formats float with many decimals to 3 decimal places', () => {
    assert.strictEqual(format(10.123456), '10.123');
  });

  await t.test('rounds to 3 decimal places (up)', () => {
    assert.strictEqual(format(10.1236), '10.124');
  });

  await t.test('rounds to 3 decimal places (down)', () => {
    assert.strictEqual(format(10.1234), '10.123');
  });

  await t.test('formats 0 to "0.000"', () => {
    assert.strictEqual(format(0), '0.000');
  });

  await t.test('formats negative numbers correctly', () => {
    assert.strictEqual(format(-1.23456), '-1.235');
  });
});
