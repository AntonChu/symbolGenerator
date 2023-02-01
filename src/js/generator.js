export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  * [Symbol.iterator]() {
    const length = this.members.size - 1;
    const arr = [];
    this.members.forEach((hero) => arr.push(hero));
    for (let i = 0; i < length; i++) {
      yield arr[i].type;
    }
  }
}
