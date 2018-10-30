import { deckShuffled } from '../src/Shuffle.js';

describe('shuffle', function () {
  it('each card should be shuffled', function () {
    chai.expect(deckShuffled[34].shuffledPosition).to.not.equal(0);
  });
  it('to have 52 cards', function () {
  chai.expect(deckShuffled.length).to.equal(52);
  });
});
