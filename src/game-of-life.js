

function nextGeneration(brett) {
  return brett.map((row, x) => {
    row.map((currElement, y) => {
      // let sum = naboer(brett, x, y).reduce((a, b) => a + b)
      return currElement;
    });
  });
}

function celle(verdi) {
  if (verdi == 1)
    return 'X'
  else
    return 'O'
}

function vis(brett) {
  return brett.map((row, x) => {
    let linje = row.map(currElement => celle(currElement) );
    return linje.join('')
  }).join('\n');
}

module.exports = {
  nextGeneration,
  vis
};
