
import './style.css';
import { Header } from './components/Header.js';
import { ResultCard } from './components/ResultCard.js';

const app = document.querySelector('#app');

let currentValue = 20;

const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.204;

const format = (num) => num.toFixed(3);

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  let paragraph = '';
  function type() {
    if (i < text.length) {
      paragraph += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
    element.textContent = paragraph;
  }
  type();
}

function render() {
  const feet = format(currentValue * METER_TO_FEET);
  const meters = format(currentValue / METER_TO_FEET);
  
  const gallons = format(currentValue * LITER_TO_GALLON);
  const liters = format(currentValue / LITER_TO_GALLON);
  
  const pounds = format(currentValue * KILO_TO_POUND);
  const kilos = format(currentValue / KILO_TO_POUND);

  const lengthText = `${currentValue} meters = ${feet} feet | ${currentValue} feet = ${meters} meters`;
  const volumeText = `${currentValue} liters = ${gallons} gallons | ${currentValue} gallons = ${liters} liters`;
  const massText = `${currentValue} kilos = ${pounds} pounds | ${currentValue} pounds = ${kilos} kilos`;

  app.innerHTML = `
    <div class="min-h-screen bg-transparent flex flex-col items-center">
      <div class="w-full max-w-[550px]">
        ${Header(currentValue)}
        
        <div class="px-6 md:px-8">
          ${ResultCard("Length (Meter/Feet)")}
          ${ResultCard("Volume (Liters/Gallons)")}
          ${ResultCard("Mass (Kilograms/Pounds)")}
        </div>
      </div>
    </div>
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

function attachEvents() {
  const input = document.getElementById('input-value');
  const btn = document.getElementById('convert-btn');

  btn.addEventListener('click', () => {
    const newVal = parseFloat(input.value);
    if (!isNaN(newVal)) {
      currentValue = newVal;
      render();
    }
  });

  input.addEventListener('change', (e) => {
    e.preventDefault();
    const newVal = parseFloat(input.value);
    if (!isNaN(newVal)) {
      currentValue = newVal;
      render();
    }
  });
}

render();