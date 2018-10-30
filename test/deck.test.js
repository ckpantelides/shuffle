import { deck } from '../src/Deck.js';
import { Card } from '../src/Card.js';

 describe('deck', function () {
  it('should have 52 cards', function () {
    chai.expect(deck.length).to.equal(52);
  });
  it('each card should be an instance of the Card object', function () {
  chai.expect(deck[20]).to.be.an.instanceof(Card);
  });
});
