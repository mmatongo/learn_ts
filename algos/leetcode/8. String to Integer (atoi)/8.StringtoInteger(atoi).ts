function myAtoi(s: string): number {
  const str = parseInt(s.trim(), 10);
  if (isNaN(str)) {
    return 0;
  }
  if (str > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (str < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }
  return str;
};