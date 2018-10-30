import { deckSorted } from './Sort.js';

// the four players
var christos = new Array();
let belinda = new Array();
let logan = new Array();
let george = new Array();

// deal the cards by pushing each card to the player arrays
for (let newCard = 0; newCard < 28; newCard += 4 ) {

  christos.push(deckSorted[newCard]);
  belinda.push(deckSorted[newCard + 1]);
  logan.push(deckSorted[newCard + 2]);
  george.push(deckSorted[newCard + 3]);

}

// create a string of all the dealt cards' greeting methods for each array input (i.e. each player)
function dealtCards(array) {
  var text = '';
  for (let t = 0; t < array.length; t++) {
    text += array[t].greeting();
  }
  return text;
}

console.log("christos has the:") + dealtCards(christos);
console.log("\n");
console.log("belinda has the:") + dealtCards(belinda);
console.log("\n");
console.log("logan has the:") + dealtCards(logan);
console.log("\n");
console.log("george has the:") + dealtCards(george);

export { christos };
