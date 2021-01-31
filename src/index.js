
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined ) return matrix = [];

  for (let i =0; i < matrix.length; i++) {
    
    if (i % 2) {
      matrix[i].reverse();
    }
  }
  return matrix.flat();
  
}

function sortNumber(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
