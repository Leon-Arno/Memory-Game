'use strict';

const cards = document.querySelectorAll('.card');

//* creates a flip class
const cardFlip = () => {
  this.classList.toggle('flip');
};

//* Loops through each card to attach eventListener
cards.forEach(card => card.addEventListener('click', cardFlip));
