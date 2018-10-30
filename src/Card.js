class Card {
    constructor (value, suit, position) {
      this.value = value;
      this.suit = suit;
      this.position = position;
      this.shuffledPosition = 0;
    }
    greeting() {
      console.log(`${this.value} of ${this.suit}`);
    }
}

export { Card };
