function twoCitySchedCost(costs: number[][]): number {
  return costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1])).reduce((acc, curr) => acc + curr[0] + curr[1], 0) / 2;
};
