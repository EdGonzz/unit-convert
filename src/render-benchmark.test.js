/**
 * Render performance benchmark — measures the cost of full DOM replacement
 * vs. targeted textContent updates.
 *
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { format } from './utils.js';
import { convertLength, convertVolume, convertMass } from './conversions.js';

/* ---------- helpers that mirror the production components ---------- */

const Header = (val) => `
  <header>
    <h1>UNIT CONVERTER_v1.0</h1>
    <input type="number" id="input-value" value="${val}" />
    <button id="convert-btn">[RUN]</button>
  </header>`;

const ResultCard = (title, id) => `
  <article>
    <h2>[ ${title} ]</h2>
    <p id="${id}"></p>
  </article>`;

const shell = (val) => `
  <main>
    <div>
      ${Header(val)}
      <section>
        ${ResultCard('Length', 'length-result')}
        ${ResultCard('Volume', 'volume-result')}
        ${ResultCard('Mass', 'mass-result')}
      </section>
    </div>
  </main>`;

function computeTexts(value) {
  const l = convertLength(value);
  const v = convertVolume(value);
  const m = convertMass(value);
  return {
    length: `${value} m = ${format(l.forward)} ft | ${value} ft = ${format(l.reverse)} m`,
    volume: `${value} L = ${format(v.forward)} gal | ${value} gal = ${format(v.reverse)} L`,
    mass: `${value} kg = ${format(m.forward)} lb | ${value} lb = ${format(m.reverse)} kg`,
  };
}

/* ---------- simulation functions ---------- */

/** Old approach: full innerHTML replacement on every render */
function fullDomRender(container, value) {
  container.innerHTML = shell(value);
  const texts = computeTexts(value);
  container.querySelector('#length-result').textContent = texts.length;
  container.querySelector('#volume-result').textContent = texts.volume;
  container.querySelector('#mass-result').textContent = texts.mass;
}

/** New approach: innerHTML once, then targeted textContent updates */
function targetedRender(container, value, isFirst) {
  if (isFirst) {
    container.innerHTML = shell(value);
  }
  const texts = computeTexts(value);
  container.querySelector('#length-result').textContent = texts.length;
  container.querySelector('#volume-result').textContent = texts.volume;
  container.querySelector('#mass-result').textContent = texts.mass;
}

/* ---------- benchmark ---------- */

const ITERATIONS = 1_000;
const VALUES = Array.from({ length: ITERATIONS }, (_, i) => i + 1);

describe('Render performance benchmark', () => {
  it('should show targeted updates are faster than full DOM replacement', () => {
    const containerA = document.createElement('div');
    const containerB = document.createElement('div');

    // Warm up
    fullDomRender(containerA, 1);
    targetedRender(containerB, 1, true);

    // --- Baseline: full innerHTML every time ---
    const startFull = performance.now();
    for (const v of VALUES) {
      fullDomRender(containerA, v);
    }
    const durationFull = performance.now() - startFull;

    // --- Optimized: innerHTML once, then targeted updates ---
    const startTargeted = performance.now();
    targetedRender(containerB, VALUES[0], true); // first render
    for (let i = 1; i < VALUES.length; i++) {
      targetedRender(containerB, VALUES[i], false);
    }
    const durationTargeted = performance.now() - startTargeted;

    const speedup = durationFull / durationTargeted;
    const improvement = ((1 - durationTargeted / durationFull) * 100).toFixed(1);

    console.log('');
    console.log('┌──────────────────────────────────────────────┐');
    console.log('│       Render Performance Benchmark           │');
    console.log('├──────────────────────────────────────────────┤');
    console.log(`│  Iterations:      ${ITERATIONS.toLocaleString().padStart(22)} │`);
    console.log(`│  Full DOM (old):  ${(durationFull.toFixed(2) + ' ms').padStart(22)} │`);
    console.log(`│  Targeted (new):  ${(durationTargeted.toFixed(2) + ' ms').padStart(22)} │`);
    console.log(`│  Speedup:         ${(speedup.toFixed(2) + 'x').padStart(22)} │`);
    console.log(`│  Improvement:     ${(improvement + '%').padStart(22)} │`);
    console.log('└──────────────────────────────────────────────┘');
    console.log('');

    // The targeted approach must be faster
    expect(durationTargeted).toBeLessThan(durationFull);
    // We expect at least a 20% improvement
    expect(speedup).toBeGreaterThan(1.2);
  });

  it('should produce identical output for both approaches', () => {
    const containerA = document.createElement('div');
    const containerB = document.createElement('div');

    const testValue = 42;
    fullDomRender(containerA, testValue);
    targetedRender(containerB, testValue, true);

    // Both approaches must produce the same visible result
    expect(containerA.querySelector('#length-result').textContent)
      .toBe(containerB.querySelector('#length-result').textContent);
    expect(containerA.querySelector('#volume-result').textContent)
      .toBe(containerB.querySelector('#volume-result').textContent);
    expect(containerA.querySelector('#mass-result').textContent)
      .toBe(containerB.querySelector('#mass-result').textContent);
  });
});
