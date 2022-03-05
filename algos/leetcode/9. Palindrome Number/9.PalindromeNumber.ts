function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let y = 0;
  const z = x;
  while (x > 0) {
    y = y * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return y === z;
};