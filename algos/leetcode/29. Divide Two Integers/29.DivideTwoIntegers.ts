function divide(dividend: number, divisor: number): number {
  let symbol = 1;
  if (dividend < 0 && divisor < 0) {
    dividend = 0 - dividend;
    divisor = 0 - divisor;
  } else if (dividend < 0) {
    symbol = -1;
    dividend = 0 - dividend;
  } else if (divisor < 0) {
    symbol = -1;
    divisor = 0 - divisor;
  }
  let sum = 0;
  let ratio = 1;
  let preratio = 0;
  let predivisor = divisor;
  let multidivisor = divisor;
  let i = 0;
  while (true) {
    if ((sum + multidivisor) > dividend) {
      if (ratio === 1) {
        break;
      }
      i += preratio;
      sum += predivisor
      preratio = 1;
      ratio = 1;
      predivisor = divisor;
      multidivisor = divisor;
    } else if ((sum + multidivisor) === dividend) {
      i += preratio;
      break;
    } else {
      preratio = ratio;
      ratio += ratio;
      predivisor = multidivisor;
      multidivisor += multidivisor;
    }
  }
  if (symbol > 0 && i > 2147483647) {
    return 2147483647;
  }
  return symbol > 0 ? i : 0 - i;
};