import { Bowerman, Swordsman, Magician } from './characters';

class Team {
  constructor() {
    this.characterType = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => this.characterType.add(character));
  }

  personIter() {
    return this.characterType[Symbol.iterator]();
  }
}

const teamHeroes = new Team();

const bowerman = new Bowerman();
const swordsman = new Swordsman();
const magician = new Magician();

teamHeroes.addAll(bowerman, swordsman, magician);

const personIterator = teamHeroes.personIter();

console.log(personIterator.next().value);
console.log(personIterator.next().value);
console.log(personIterator.next().value);
console.log(personIterator.next().value);
