'use strict';

const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard;
let secondCard;

//* creates a flip class
function cardFlip() {
  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  flippedCard = false;
}

function checkCardMatch() {
  if (firstCard.dataset.technologies === secondCard.dataset.technologies) {
    disableCards();
    return;
  }
}

const disableCards = () => {
  firstCard.removeEventListener('click', cardFlip);
  secondCard.removeEventListener('click', cardFlip);
};

//* Loops through each card to attach eventListener
cards.forEach(card => card.addEventListener('click', cardFlip));
