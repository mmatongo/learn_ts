function generateMatrix(n: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(0);
    }
  }
  let count = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = count++;
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = count++;
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result[rowEnd][i] = count++;
      }
    }
    rowEnd--;
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result[i][colStart] = count++;
      }
    }
    colStart++;
  }
  return result;
};
