function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let i = 0;
  let sum = 0;
  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1];
    if (next && map[c] < map[next]) {
      sum -= map[c];
    } else {
      sum += map[c];
    }
    i++;
  }
  return sum;
};