function totalNQueens(n: number): number {
  const result: number[] = [0];
  const board: number[][] = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(0);
    }
  }
  const col: number[] = [];
  const diag1: number[] = [];
  const diag2: number[] = [];
  const helper = (row: number): void => {
    if (row === n) {
      result[0]++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (col[i] || diag1[row + i] || diag2[row - i + n - 1]) continue;
      col[i] = 1;
      diag1[row + i] = 1;
      diag2[row - i + n - 1] = 1;
      board[row][i] = 1;
      helper(row + 1);
      col[i] = 0;
      diag1[row + i] = 0;
      diag2[row - i + n - 1] = 0;
      board[row][i] = 0;
    }
  };
  helper(0);
  return result[0];
};