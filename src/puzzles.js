const easyLvl = [
  {
    name: 'Rooster',
    solution: [
      [0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    level: 'easy',
  },
  {
    name: 'Camel',
    solution: [
      [0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ],
    level: 'easy',
  },
  {
    name: 'Stroller',
    solution: [
      [0, 1, 1, 0, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [1, 0, 0, 1, 0],
    ],
    level: 'easy',
  },
  {
    name: 'Fountain',
    solution: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
    ],
    level: 'easy',
  },
  {
    name: 'Heart',
    solution: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    level: 'easy',
  },
];
const mediumLvl = [
  {
    name: 'Cat',
    solution: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    ],
    level: 'medium',
  },
  {
    name: 'Kettle',
    solution: [
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    level: 'medium',
  },
  {
    name: 'Cup',
    solution: [
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    level: 'medium',
  },
  {
    name: 'Boat',
    solution: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    ],
    level: 'medium',
  },
  {
    name: 'Smile',
    solution: [
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    level: 'medium',
  },
];
const hardLvl = [
  {
    name: 'Deer',
    solution: [
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ],
    level: 'hard',
  },
  {
    name: 'Mickey Mouse',
    solution: [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
    level: 'hard',
  },
  {
    name: 'Cherry',
    solution: [
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    level: 'hard',
  },
  {
    name: 'B-day cake',
    solution: [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    level: 'hard',
  },
  {
    name: 'Camera',
    solution: [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    level: 'hard',
  },
];

const puzzles = [...easyLvl, ...mediumLvl, ...hardLvl];

export { puzzles };
