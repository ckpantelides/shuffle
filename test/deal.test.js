import { christos } from '../src/Deal.js';

describe('deal', function () {
  it('each player should have 7 cards', function () {
    chai.expect(christos.length).to.equal(7);
  });
  it('each player should be an array', function () {
  chai.expect(christos).to.be.an('array');
  });
});
