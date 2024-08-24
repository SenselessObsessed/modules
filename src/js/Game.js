import Character from './Domain.js';

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
  console.log('saved');
}

export function writeGameSaving() {
}
