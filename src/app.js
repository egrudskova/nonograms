import { createPreviews } from './preview';
import { puzzles } from './puzzles';
import { createHeader } from './header';
import { createElement } from './utils';
import { Game } from './game';

const header = createHeader();
document.body.append(header);
const main = createElement('main', 'main');
const currentGame = new Game(main);
currentGame.setSettings(puzzles[0]);
currentGame.start();
document.body.append(main);

export { currentGame, main };
