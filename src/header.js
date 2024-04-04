import { createElement } from './utils';
import { puzzles } from './puzzles';
import { currentGame, main } from './app';
import { createPreviews } from './preview';
import { audioLeftBtn, audioRightBtn } from './nonogram';
import { audioWin } from './game';
import { timer } from './timer';

const handleRandomBtn = () => currentGame.startRandom();

const handleSolveBtn = () => currentGame.solve();

const handleResetBtn = () => currentGame.emptyField();

const handleContinueBtn = () => currentGame.continue();

const handleSaveBtn = () => currentGame.save();

const handleReturnBtn = () => {
  main.innerHTML = '';
  const previews = createPreviews(puzzles);
  main.append(previews);
  timer.stopTimer();
  timer.resetTimer();
};

const handleThemeBtn = () => document.body.classList.toggle('body--dark');

const handleSoundBtn = () => {
  audioLeftBtn.muted = !audioLeftBtn.muted;
  audioRightBtn.muted = !audioRightBtn.muted;
  audioWin.muted = !audioWin.muted;
};

const createHeader = () => {
  const header = createElement('header', 'header');
  const buttonElements = createElement('div', 'header__buttons');
  const randomBtn = createElement(
    'button',
    'header__button header__button--random',
    'Random game'
  );
  const resetBtn = createElement(
    'button',
    'header__button header__button--reset',
    'Reset game'
  );
  const solveBtn = createElement(
    'button',
    'header__button header__button--solution',
    'Solution'
  );
  const saveBtn = createElement(
    'button',
    'header__button header__button--save',
    'Save'
  );
  const continueBtn = createElement(
    'button',
    'header__button header__button--continue',
    'Continue last game'
  );
  const themeBtn = createElement(
    'button',
    'header__button header__button--theme',
    'Dark/light theme'
  );
  const soundBtn = createElement(
    'button',
    'header__button header__button--theme',
    'Sound on/off'
  );
  const returnBtn = createElement(
    'button',
    'header__button header__button--return',
    'Back to Menu'
  );
  randomBtn.addEventListener('click', handleRandomBtn);
  resetBtn.addEventListener('click', handleResetBtn);
  solveBtn.addEventListener('click', handleSolveBtn);
  saveBtn.addEventListener('click', handleSaveBtn);
  continueBtn.addEventListener('click', handleContinueBtn);
  returnBtn.addEventListener('click', handleReturnBtn);
  themeBtn.addEventListener('click', handleThemeBtn);
  soundBtn.addEventListener('click', handleSoundBtn);
  buttonElements.append(randomBtn);
  buttonElements.append(resetBtn);
  buttonElements.append(solveBtn);
  buttonElements.append(saveBtn);
  buttonElements.append(continueBtn);
  buttonElements.append(themeBtn);
  buttonElements.append(soundBtn);
  buttonElements.append(returnBtn);
  header.append(timer.getTimerElement());
  header.append(buttonElements);

  return header;
};

export { createHeader };
