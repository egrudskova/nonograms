const createElement = (tag, className, text = '') => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
};

const createMatrix = (length) =>
  new Array(length).fill(null).map(() => new Array(length).fill(0));

const compareMatrices = (matrix1, matrix2) => {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const getRandomNumber = (max) => Math.floor(Math.random() * (max + 1));

export { createElement, createMatrix, compareMatrices, getRandomNumber };
