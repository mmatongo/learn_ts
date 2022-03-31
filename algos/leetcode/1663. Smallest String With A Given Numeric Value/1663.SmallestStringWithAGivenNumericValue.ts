function getSmallestString(n: number, k: number): string {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';
  let current = k;
  for (let i = 0; i < n; i++) {
    const index = Math.floor(current / alphabet.length);
    result += alphabet[index];
    current = current % alphabet.length;
  }
  return result;
}