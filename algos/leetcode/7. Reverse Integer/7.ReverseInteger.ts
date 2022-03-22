function reverse(x: number): number {
  let result = 0;
  let temp = x;
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    temp = -x;
  }
  while (temp > 0) {
    result = result * 10 + temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (isNegative) {
    result = -result;
  }
  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }
  return result;
};