import {
  compareMatrices,
  createElement,
  createMatrix,
  getRandomNumber,
} from './utils';
import { createNonogram } from './nonogram';
import { puzzles } from './puzzles';
import sound3 from './assets/winning sound.mp3';
import { timer } from './timer';

const audioWin = createElement('audio', 'audio');
audioWin.src = sound3;

const createModalOverlay = () => {
  const overlay = createElement('div', 'modal-overlay');
  const modal = createElement('div', 'modal');
  const heading = createElement(
    'h2',
    'modal__heading',
    'Congrats, you solved the nonogram!'
  );
  const text = createElement(
    'p',
    'modal__text',
    `Your time is: ${timer.getTime()}`
  );
  const button = createElement('button', 'modal__button', 'Play again');
  modal.append(heading);
  modal.append(text);
  modal.append(button);
  overlay.append(modal);
  return overlay;
};

const createRecordsTable = (games = null) => {
  const table = createElement('div', 'records');
  const heading = createElement(
    'h2',
    'records__heading',
    "Last games' results"
  );
  const list = createElement('ol', 'records__list');
  if (games) {
    games.forEach((game) => {
      const record = createElement(
        'li',
        'records__list-item',
        `${game.name} ${game.level} \n${game.timeTaken} minutes`
      );
      list.append(record);
    });
  } else {
    list.textContent = 'No games yet...';
  }
  table.append(heading);
  table.append(list);
  return table;
};

class Game {
  constructor(container) {
    this.container = container;
    this.finishedGames = [];
  }

  setSettings(puzzle) {
    this.solution = puzzle.solution;
    this.field = createMatrix(puzzle.solution.length);
    this.game = { name: puzzle.name, level: puzzle.level };
  }

  start() {
    this.container.innerHTML = '';
    this.container.append(createNonogram(this.field, this.solution));
    this.container.append(
      createRecordsTable(JSON.parse(localStorage.getItem('gamesList')))
    );
    console.log(this.solution);
  }

  startRandom() {
    const randomPuzzle = puzzles[getRandomNumber(puzzles.length - 1)];
    this.setSettings(randomPuzzle);
    this.start();
    timer.resetTimer();
  }

  solve() {
    this.field = this.solution;
    this.start();
    timer.stopTimer();
    this.field = createMatrix(this.field.length);
  }

  updateField(x, y) {
    this.field[x][y] = Number(!this.field[x][y]);
  }

  emptyField() {
    this.field = createMatrix(this.field.length);
    this.start();
    timer.stopTimer();
    timer.resetTimer();
  }

  check() {
    if (compareMatrices(this.solution, this.field)) {
      const modalOverlay = createModalOverlay();
      this.container.append(modalOverlay);
      audioWin.play();
      timer.stopTimer();
      this.game.timeTaken = timer.getTime();
      this.game.date = new Date();
      this.finishedGames.push(this.game);
      this.finishedGames.sort((a, b) => b.date - a.date);
      if (this.finishedGames.length > 5) {
        this.finishedGames = this.finishedGames.slice(0, 5);
      }
      localStorage.setItem('gamesList', JSON.stringify(this.finishedGames));
      const button = modalOverlay.querySelector('.modal__button');
      button.addEventListener('click', () => {
        this.startRandom();
      });
    }
  }

  save() {
    const gameData = {
      field: this.field,
      solution: this.solution,
    };
    localStorage.setItem('savedGame', JSON.stringify(gameData));
  }

  continue() {
    const { field, solution } = JSON.parse(localStorage.getItem('savedGame'));
    this.field = field;
    this.solution = solution;
    this.start();
  }
}

export { Game, audioWin };
