export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  * [Symbol.iterator]() {
    const obj = {};
    this.members.forEach((hero) => obj[hero.type] = hero); // eslint-disable-line
    for (const item in obj) { // eslint-disable-line
      yield item;
    }
  }
}
