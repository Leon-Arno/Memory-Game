'use strict';

const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard;
let secondCard;
let lockCard = false;

//* creates a flip class
let cardFlip = function() {
  // ? prevents triple flipping.
  if (lockCard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;

  checkCardMatch();
};

const checkCardMatch = () => {
  let matched =
    firstCard.dataset.technologies === secondCard.dataset.technologies;
  matched ? disableCards() : unflipCards();
};

const disableCards = () => {
  firstCard.removeEventListener('click', cardFlip);
  secondCard.removeEventListener('click', cardFlip);
  resetCards();
};

const unflipCards = () => {
  lockCard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCards();
  }, 1200);
};

const resetCards = () => {
  [flippedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

// ! IIFE
(() => {
  cards.forEach(card => {
    let randomPositions = Math.floor(Math.random() * 12);
    card.style.order = randomPositions;
  });
})();

//* Loops through each card to attach eventListener
cards.forEach(card => card.addEventListener('click', cardFlip));
