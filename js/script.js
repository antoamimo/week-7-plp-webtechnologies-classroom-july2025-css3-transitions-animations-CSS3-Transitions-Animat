// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// 2.1: Function with parameters and a return value
function calculateCircleArea(radius) {
  // Demonstrates local scope: 'area' and 'pi' are only accessible inside this function.
  const pi = 3.14159;
  const area = pi * radius * radius;
  return area;
}

// 2.2: Function demonstrating global vs. local scope
// 'userName' is a global variable
const userName = "Visitor";

function getGreeting(name) {
  // 'name' is a local parameter.
  // The variable 'greeting' also has local scope.
  const greeting = `Hello, ${name}! Welcome to the site.`;
  return greeting;
}

// 2.3: Reusable function to add/remove a class
function toggleClass(element, className) {
  element.classList.toggle(className);
}


// Part 3: Combining CSS Animations with JavaScript

document.addEventListener('DOMContentLoaded', () => {

  // Event listener for Part 2's Calculate button
  const calculateBtn = document.getElementById('calculate-area-btn');
  const radiusInput = document.getElementById('circle-radius');
  const areaOutput = document.getElementById('area-output');

  calculateBtn.addEventListener('click', () => {
    // Use the reusable function to get a value.
    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius) && radius > 0) {
      const area = calculateCircleArea(radius);
      areaOutput.textContent = `The area of a circle with radius ${radius} is: ${area.toFixed(2)}`;
    } else {
      areaOutput.textContent = "Please enter a valid positive number for the radius.";
    }
  });

  // Event listener for Part 2's Greet button
  const greetBtn = document.getElementById('greet-btn');
  const greetingInput = document.getElementById('greeting-input');
  const greetingOutput = document.getElementById('greeting-output');

  greetBtn.addEventListener('click', () => {
    const name = greetingInput.value.trim();
    // The getGreeting function uses its local 'name' parameter,
    // which shadows the global 'userName' variable.
    const greeting = getGreeting(name || userName);
    greetingOutput.textContent = greeting;
  });


  // 3.1: Triggering a box animation with a button click
  const moveBoxBtn = document.getElementById('move-box-btn');
  const jsBox = document.getElementById('js-box');
  moveBoxBtn.addEventListener('click', () => {
    // Use the reusable toggleClass function to trigger the CSS transition
    toggleClass(jsBox, 'moved');
  });

  // 3.2: Triggering a card flip animation on click
  const flipCardContainer = document.getElementById('flip-card-container');
  const flipCard = document.getElementById('flip-card');
  flipCardContainer.addEventListener('click', () => {
    // Use the reusable toggleClass function to trigger the CSS transition
    toggleClass(flipCard, 'flipped');
  });

  // 3.3: Triggering a loading animation with a button click
  const startLoadingBtn = document.getElementById('start-loading-btn');
  const loadingSpinner = document.getElementById('loading-spinner');
  const statusText = document.getElementById('status-text');

  startLoadingBtn.addEventListener('click', () => {
    // Show the spinner and update the text
    loadingSpinner.classList.remove('hidden');
    statusText.textContent = 'Loading...';

    // Simulate a delay (e.g., fetching data)
    setTimeout(() => {
      // Hide the spinner and update the text after a delay
      loadingSpinner.classList.add('hidden');
      statusText.textContent = 'Loading complete!';
    }, 3000); // 3-second delay
  });
});