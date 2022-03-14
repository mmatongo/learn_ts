function solveSudoku(board: string[][]): void {
  const row = new Array(9).fill(0).map(() => new Set());
  const col = new Array(9).fill(0).map(() => new Set());
  const box = new Array(9).fill(0).map(() => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (row[i].has(num) || col[j].has(num) || box[boxIndex].has(num)) {
          return;
        }
        row[i].add(num);
        col[j].add(num);
        box[boxIndex].add(num);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let k = 1; k <= 9; k++) {
          if (!row[i].has(k.toString()) && !col[j].has(k.toString()) && !box[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(k.toString())) {
            board[i][j] = k.toString();
            solveSudoku(board);
            board[i][j] = '.';
          }
        }
        return;
      }
    }
  }
  console.log(board);

  return;
};