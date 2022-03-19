function permute(nums: number[]): number[][] {
  const results: number[][] = [];
  const visited: boolean[] = [];
  const dfs = (nums: number[], path: number[]) => {
    if (path.length === nums.length) {
      results.push(path);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(nums, [...path, nums[i]]);
      visited[i] = false;
    }
  };
  dfs(nums, []);
  return results;
};