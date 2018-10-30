import { deckSorted } from '../src/Sort.js';

describe('sort', function () {
  it('the cards should be in order according to their "shuffled position"', function () {
    chai.assert.isAbove(deckSorted[2].shuffledPosition, deckSorted[1].shuffledPosition);
  });
});
