"use strict";

const cardContainer = document.getElementsByClassName('card-container')[0];
const card = document.getElementsByClassName('card')[0];

for (let i = 0; i < 100; i++) {
    cardContainer.appendChild(card.cloneNode(true));
}
