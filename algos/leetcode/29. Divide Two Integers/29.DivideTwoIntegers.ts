function divide(dividend: number, divisor: number): number {
  let quotient: number = 0;
  let isNegative: boolean = false;
  const edge: number = Math.pow(2, 31);
  if (dividend < 0 && divisor < 0) {
    isNegative = false;
  } else if (dividend < 0 || divisor < 0) {
    isNegative = true;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  quotient = Math.floor(dividend / divisor);
  if (quotient > edge - 1) {
    return isNegative ? -edge : edge - 1;
  }
  return isNegative ? -quotient : quotient;
}