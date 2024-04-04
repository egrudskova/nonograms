import './styles.css';
import { createElement } from './utils';
import { currentGame } from './app';
import { createTable } from './nonogram';
import { timer } from './timer';

const createPreviews = (puzzlesArr) => {
  const previewsContainer = createElement('div', 'previews-container');
  puzzlesArr.forEach((puzzle) => {
    const preview = createElement('div', 'preview');
    preview.classList.add(`preview--${puzzle.level}`);
    const previewLink = createElement('a', 'preview__link');
    previewLink.append(createTable('preview__inner', puzzle.solution));
    const puzzleName = createElement(
      'h2',
      'preview__heading',
      `${puzzle.name}`
    );
    previewLink.append(puzzleName);
    const level = createElement('p', 'preview__level', `${puzzle.level}`);
    previewLink.append(level);
    previewLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      currentGame.setSettings(puzzle);
      currentGame.start();
      timer.resetTimer();
    });
    preview.append(previewLink);
    previewsContainer.append(preview);
  });
  return previewsContainer;
};

export { createPreviews };
