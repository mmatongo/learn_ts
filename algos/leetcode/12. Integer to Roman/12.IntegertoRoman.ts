function intToRoman(num: number): string {
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let i = 0;
  let s = '';
  while (num > 0) {
    while (num >= value[i]) {
      num -= value[i];
      s += roman[i];
    }
    i++;
  }
  return s;
}