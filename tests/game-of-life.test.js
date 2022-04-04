const { nextGeneration, vis } = require("../src/game-of-life");

test("GameOfLife is defined", () => {
  expect(nextGeneration).toBeDefined();
});

test("brett med kun døde", () => {
  let brett = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  console.log( vis(brett) )

  expect(nextGeneration(brett)).toEqual(
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  );
});

/*
test("brett som snurrer", () => {
  let brett = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];

  expect(nextGeneration(brett)).toEqual(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
  );
});
*/

test("brett med kun levende", () => {
  let brett = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];
  console.log( vis(brett) )

  expect(nextGeneration(brett)).toEqual(
    [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ]
  );
});
