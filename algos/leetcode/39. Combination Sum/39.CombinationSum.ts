function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const dfs = (candidates: number[], target: number, path: number[], index: number) => {
    if (target === 0) {
      result.push(path);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        dfs(candidates, target - candidates[i], [...path, candidates[i]], i);
      }
    }
  };
  dfs(candidates, target, [], 0);
  return result;
};