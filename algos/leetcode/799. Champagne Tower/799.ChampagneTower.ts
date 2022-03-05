function champagneTower(poured: number, query_row: number, query_glass: number): number {
  const arr = new Array(query_row + 1).fill(0);
  arr[0] = poured;
  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > 1) {
        arr[i + 1] += (arr[i] - 1) / 2;
        arr[i] = 1;
      }
    }
  }
  return arr[query_glass]
};