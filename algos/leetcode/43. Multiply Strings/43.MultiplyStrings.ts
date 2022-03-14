function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const n1 = num1.split('').reverse();
  const n2 = num2.split('').reverse();
  const result = new Array(n1.length + n2.length).fill(0);
  for (let i = 0; i < n1.length; i++) {
    for (let j = 0; j < n2.length; j++) {
      result[i + j] += Number(n1[i]) * Number(n2[j]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      result[i + 1] += Math.floor(result[i] / 10);
      result[i] %= 10;
    }
  }
  while (result[result.length - 1] === 0) {
    result.pop();
  }
  return result.reverse().join('');
};