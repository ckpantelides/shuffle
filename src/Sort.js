import { deckShuffled } from './Shuffle.js';

// compareNumbers function from MDN .sort() documentation
function compareNumbers(a, b) {
  return a.shuffledPosition - b.shuffledPosition;
}

let deckSorted = deckShuffled;

deckSorted.sort(compareNumbers);

/*
add function checking whether any two cards' original position is in order
*/

export { deckSorted };
