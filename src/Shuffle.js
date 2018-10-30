import { deck } from './Deck.js';

// getRndInteger function from w3schools documentation
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let deckShuffled = deck;

for (let d = 0; d < deck.length; d++) {
  deckShuffled[d].shuffledPosition = getRndInteger(1, 100000);
}

export { deckShuffled };
