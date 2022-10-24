function maxLength(arr: string[]): number {
  let result = 0;
  const dfs = (index: number, current: string) => {
    if (index === arr.length) {
      result = Math.max(result, current.length);
      return;
    }
    dfs(index + 1, current);
    const next = current + arr[index];
    if (next.length === new Set(next).size) {
      dfs(index + 1, next);
    }
  };
  dfs(0, "");
  return result;
}
