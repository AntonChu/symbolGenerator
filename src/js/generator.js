export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  * [Symbol.iterator]() {
    for (const item of this.members.keys()) { // eslint-disable-line
      yield item.type;
    }
  }
}
