"use strict";
const matrix1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
const matrix2 = [
  [1, 0, 2, 3],
  [0, 4, 0, 5],
  [6, 7, 0, 0],
];
function createNewMatrix(matrix) {
  let newMatrix = matrix;
  for (let row = newMatrix.length - 2; row >= 0; row--) {
    for (
      let columnInRow = 0;
      columnInRow < newMatrix[row].length;
      columnInRow++
    ) {
      if (newMatrix[row][columnInRow] === 0) {
        newMatrix[row + 1][columnInRow] = 0;
      }
    }
  }
  return newMatrix;
}
function addAllNumb(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let columnInRow = 0; columnInRow < matrix[row].length; columnInRow++) {
      sum += matrix[row][columnInRow];
    }
  }
  return sum;
}
let newMatrix1 = createNewMatrix(matrix1);
console.log(newMatrix1);
console.log(addAllNumb(newMatrix1));
let newMatrix2 = createNewMatrix(matrix2);
console.log(newMatrix2);
console.log(addAllNumb(newMatrix2));
