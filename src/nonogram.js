import { createElement } from './utils';
import { currentGame } from './app';
import sound1 from './assets/click-left.mp3';
import sound2 from './assets/click-right.mp3';
import { timer } from './timer';

const audioLeftBtn = createElement('audio', 'audio');
audioLeftBtn.src = sound1;
const audioRightBtn = createElement('audio', 'audio');
audioRightBtn.src = sound2;

const createTable = (className, data) => {
  const table = createElement('table', className);
  for (let i = 0; i < data.length; i++) {
    const row = createElement('tr', `${className}__row`);
    if (i % 5 === 0) {
      row.classList.add(`${className}__row--block`);
    }
    for (let j = 0; j < data[i].length; j++) {
      const cell = createElement('td', `${className}__data`);
      if (className === 'upper-clues' || className === 'left-clues') {
        cell.textContent = data[i][j];
      }
      if (className === 'nonogram') {
        cell.addEventListener('click', () => {
          cell.classList.toggle(`${className}__data--filled`);
          audioLeftBtn.play();
          currentGame.updateField(i, j);
          currentGame.check();
          timer.startTimer();
        });
        cell.addEventListener('contextmenu', (evt) => {
          evt.preventDefault();
          audioRightBtn.play();
          cell.classList.toggle(`${className}__data--cross`);
        });
      }
      if (j % 5 === 0) {
        cell.classList.add(`${className}__column--block`);
      }
      if (data[i][j] === 1) {
        cell.classList.add(`${className}__data--filled`);
      }
      row.append(cell);
    }
    table.append(row);
  }
  return table;
};

const calcLeftClues = (nonogram) => {
  return new Array(nonogram.length).fill(null).map((_, matrixIdx) => {
    const currArr = nonogram[matrixIdx];
    const resArr = [];
    let tmp = 0;
    currArr.forEach((item, idx) => {
      if (item === 1) {
        tmp += 1;
      } else if (idx !== 0 && item === 0 && currArr[idx - 1] === 1) {
        resArr.push(tmp);
        tmp = 0;
      }
    });
    if (tmp !== 0) {
      resArr.push(tmp);
    }
    return resArr;
  });
};

const calcUpperClues = (nonogram) => {
  return new Array(nonogram[0].length).fill(null).map((_, columnIdx) => {
    const resArr = [];
    let tmp = 0;
    nonogram.forEach((row, rowIdx) => {
      if (row[columnIdx] === 1) {
        tmp += 1;
      } else if (
        rowIdx !== 0 &&
        row[columnIdx] === 0 &&
        nonogram[rowIdx - 1][columnIdx] === 1
      ) {
        resArr.push(tmp);
        tmp = 0;
      }
    });
    if (tmp !== 0) {
      resArr.push(tmp);
    }
    return resArr;
  });
};

const createNonogram = (field, solution) => {
  const table = createElement('table', 'container');
  const topRow = createElement('tr', 'container__row');
  topRow.append(createElement('td', 'container__data data-empty'));
  const upperCluesCell = createElement('td', 'container__data upper-clues');
  upperCluesCell.append(createTable('upper-clues', calcUpperClues(solution)));
  topRow.append(upperCluesCell);
  const bottomRow = createElement('tr', 'container__row');
  const leftCluesCell = createElement(
    'td',
    'container__data left-clues-container'
  );
  leftCluesCell.append(createTable('left-clues', calcLeftClues(solution)));
  bottomRow.append(leftCluesCell);
  bottomRow.append(createTable('nonogram', field));
  table.append(topRow);
  table.append(bottomRow);
  return table;
};

export { createTable, createNonogram, audioLeftBtn, audioRightBtn };
