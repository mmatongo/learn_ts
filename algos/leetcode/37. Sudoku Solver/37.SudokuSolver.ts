// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1 - 9 must occur exactly once in each row.
// Each of the digits 1 - 9 must occur exactly once in each column.
// Each of the digits 1 - 9 must occur exactly once in each of the 9 3x3 sub - boxes of the grid.
/**
  Do not return anything, modify board in -place instead.
*/
// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.
// The '.' character indicates empty cells.
// Input: board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ["6", "7", "2", "1", "9", "5", "3", "4", "8"], ["1", "9", "8", "3", "4", "2", "5", "6", "7"], ["8", "5", "9", "7", "6", "1", "4", "2", "3"], ["4", "2", "6", "8", "5", "3", "7", "9", "1"], ["7", "1", "3", "9", "2", "4", "8", "5", "6"], ["9", "6", "1", "5", "3", "7", "2", "8", "4"], ["2", "8", "7", "4", "1", "9", "6", "3", "5"], ["3", "4", "5", "2", "8", "6", "1", "7", "9"]]
// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
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