console.log("Memory JS connected");

let cardFlipped = false;
let freezeBoard = false;
let firstCard = null;
let secondCard = null;
let pairs = 0;

const deck = ` <div class="card">
<div class="front">JS</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">JS</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">React</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">React</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">Python</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">Python</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">Server</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">Server</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">CSS</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">CSS</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">HTML</div>
<div class="back"></div>
</div>
<div class="card">
<div class="front">HTML</div>
<div class="back"></div>
</div>`;

const flipCard = (e) => {
  // if two cards are turned over, freeze the board
  if (freezeBoard) return;
  // ^ a return stops future logic from running

  // If user clicks the card that is already turned over, do nothing
  if (e.currentTarget === firstCard) return;

  // if there are less than 2 cards and the user clicks a card, apply the 'flip' class to the card to turn it over
  e.currentTarget.classList.add("flip");
  // ^ adds flip class via html/ css styling

  //Check to see if this is the first or second card flipped. If the first, save the element.
  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = e.currentTarget;
    // ^ if no cards are flipped, set card flipped to true and set value of first card to the current card
  } else {
    // If second card, also save the element, then compare the values on each card
    cardFlipped = false;
    // ^ else set to false because that means two cards are flipped
    secondCard = e.currentTarget;

    // if flipped cards dont match, freeze the board and remove flip class after 3 seconds
    if (firstCard.innerHTML !== secondCard.innerHTML) {
      freezeBoard = true;

      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        // ^ removes flip class and turns unmatched cards back over
        cardFlipped = false;
        freezeBoard = false;
        firstCard = null;
        secondCard = null;
        // ^ reset all variables if flipped cards dont match
      }, 1500);
    } else {
      // if cards match, add one to "pairs" (keep track up to 6)
      pairs += 1;

      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      // then remove event listeners that runs flipCard function from specified (flipped) cards

      // game is over when there are 6 pairs. Display a message and a play again button
      if (pairs === 6) {
        document.querySelector(
          "#game-container"
        ).innerHTML = `<h3>WINNA WINNA CHICKEN DINNA</h3><button id="play-again" class="btn btn-success">Play Again<button>`;
        // add event listener to play again button.. when play again button is clicked, run start game function
        document
          .querySelector("#play-again")
          .addEventListener("click", startGame);
      }
    }
  }
};

const shuffle = (cards) => {
  for (const card of cards) {
    // get a random number between 0-12
    let randomNum = Math.floor(Math.random() * 12);
    /* ^ .random provides a number between 0 and 1. then 
     we Multiply it by 12 and .floor rounds down to nearest integer */

    // add the random number as flex order on element
    card.style.order = randomNum;
    //targets the card's style attribute and order property and sets it to a random number
  }
};

//for of loop- for every card in the array of cards, add an event listener for clicked
const addEventsOnCards = (cards) => {
  for (const card of cards) {
    card.addEventListener("click", flipCard);
  }
};
const startGame = () => {
  document.querySelector("#game-container").innerHTML = deck;
  // ^ sets html equal to deck
  const cards = document.querySelectorAll(".card");
  // ^ selects all cards (all elements with class of "card" in them in the html)
  shuffle(cards);
  addEventsOnCards(cards);
};

startGame();
