function letterCombinations(digits: string): string[] {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const result: string[] = [];
  if (digits.length === 0) return result;
  const dfs = (index: number, str: string) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    const chars = map[digits[index]];
    for (let i = 0; i < chars.length; i++) {
      dfs(index + 1, str + chars[i]);
    }
  };
  dfs(0, '');
  return result;
};