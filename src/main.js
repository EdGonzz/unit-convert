
import './style.css';
import { Header } from './components/Header.js';
import { ResultCard } from './components/ResultCard.js';
import { format } from './utils.js';
import { typeWriter } from './dom-utils.js';

import { convertLength, convertVolume, convertMass } from './conversions.js';

const app = document.querySelector('#app');

let currentValue = 20;


function render() {
  const length = convertLength(currentValue);
  const volume = convertVolume(currentValue);
  const mass = convertMass(currentValue);

  const lengthText = `${currentValue} meters = ${format(length.forward)} feet | ${currentValue} feet = ${format(length.reverse)} meters`;
  const volumeText = `${currentValue} liters = ${format(volume.forward)} gallons | ${currentValue} gallons = ${format(volume.reverse)} liters`;
  const massText = `${currentValue} kilos = ${format(mass.forward)} pounds | ${currentValue} pounds = ${format(mass.reverse)} kilos`;

  app.innerHTML = `
    <main class="min-h-screen bg-transparent flex flex-col items-center" role="main">
      <div class="w-full max-w-[550px]">
        ${Header(currentValue)}
        
        <section class="px-6 md:px-8" aria-label="Conversion results">
          ${ResultCard("Length (Meter/Feet)", "length-result")}
          ${ResultCard("Volume (Liters/Gallons)", "volume-result")}
          ${ResultCard("Mass (Kilograms/Pounds)", "mass-result")}
        </section>
      </div>
    </main>
  `;

  attachEvents();

  // Typing animation for results
  const lengthResult = document.getElementById('length-result');
  const volumeResult = document.getElementById('volume-result');
  const massResult = document.getElementById('mass-result');

  typeWriter(lengthResult, lengthText, 20);
  typeWriter(volumeResult, volumeText, 20);
  typeWriter(massResult, massText, 20);
}

function handleInputChange(e) {
  const newVal = parseFloat(e.value);
  if (!isNaN(newVal)) {
    currentValue = newVal;
    render();
  }
}

function attachEvents() {
  const input = document.getElementById('input-value');
  const btn = document.getElementById('convert-btn');

  btn.addEventListener('click', () => {
    handleInputChange(input)
  });

  input.addEventListener('change', (e) => {
    handleInputChange(input)
  });
}

render();