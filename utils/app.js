let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let suits = ["♠", "♣", "♥", "♦"];
let totalcards = [...numbers, ...numbers, ...numbers, ...numbers];

let copiaNumbers = numbers.slice();
let totalCartasCopia = totalcards.slice();

const display = document.getElementById('display');
const totalCartasElement = document.getElementById('totalCartas');
const button = document.getElementById('button');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let intervalId;
let totalCartasBaraja = totalCartasCopia.length;

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = Math.floor(Math.random() * copiaNumbers.length);

  let generateCard = `<div class="suitup"><span id="suitup">${randomSuit}</span></div>
  <div class="num"><span id="num">${numbers[randomNumber]}</span></div>
  <div class="suitdown"><span id="suitdown">${randomSuit}</span></div>`;

  totalCartasCopia.splice(randomNumber, 1);
  totalCartasBaraja = totalCartasCopia.length;

  if (randomSuit === "♥" || randomSuit === "♦") {
    generateCard = "<span class='red'>" + generateCard + "</span>";
  } else {
    generateCard = "<span class='black'>" + generateCard + "</span>";
  }

  totalCartasElement.textContent = `Total de cartas restantes en la baraja: ${totalCartasBaraja}`;

  return generateCard;
}

startButton.addEventListener('click', function() {
  if (!intervalId && totalCartasBaraja > 0) {
    intervalId = setInterval(function() {
      const card = getRandomCard();
      display.innerHTML = card;
    }, 2000);
  }
});

stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
  intervalId = null;
});

button.addEventListener("click", function() {
  if (totalCartasBaraja > 0) {
    const card = getRandomCard();
    display.innerHTML = card;
  } else {
    display.innerHTML = "Recarga la página";
    button.disabled = true;
  }
});






