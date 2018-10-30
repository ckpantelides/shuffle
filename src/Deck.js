import { Card } from './Card.js';

// arrays of the values and suits of the cards
let vals = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
'nine', 'ten', 'jack', 'queen', 'king' ];
let types = ['clubs', 'spades', 'diamonds', 'hearts' ];

let deck = new Array();

// loop through the suit & value arrays to create the ordered deck array
for (let i = 0; i < types.length; i++) {
  for (let j = 0; j < vals.length; j++) {
    let num = j + (13 * i);
    deck[num] = new Card(vals[j], types[i], num + 1);
  }
}

export { deck };
export { Card };
