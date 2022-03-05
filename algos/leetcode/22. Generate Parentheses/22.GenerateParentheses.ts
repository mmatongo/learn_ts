function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const dfs = (left: number, right: number, str: string) => {
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }
    if (left > 0) dfs(left - 1, right, str + '(');
    if (right > 0 && left < right) dfs(left, right - 1, str + ')');
  };
  dfs(n, n, '');
  return result;
};