function searchMatrix(matrix: number[][], target: number): boolean {
  return matrix.some((row, i) => {
    if (row[0] > target) return false;
    if (row[row.length - 1] < target) return false;
    return row.some((num, j) => num === target);
  }
  );
};