/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]];
    }
  }
};