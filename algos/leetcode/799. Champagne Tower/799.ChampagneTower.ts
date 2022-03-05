function champagneTower(poured: number, query_row: number, query_glass: number): number {
  const arr = new Array(query_row + 1).fill(0);
  arr[0] = poured;
  // apply the constraints, floats are valid
  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > 1) {
        arr[i + 1] += (arr[i] - 1) / 2;
        arr[i] = 1;
      }
    }
  }
  // return value can be a float
  return arr[query_glass]
};

console.log(champagneTower(1, 1, 1));
console.log(champagneTower(2, 1, 1));
console.log(champagneTower(100000009, 33, 17));
console.log(champagneTower(25, 6, 1)); // 0.18750