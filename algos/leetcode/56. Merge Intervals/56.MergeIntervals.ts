function merge(intervals: number[][]): number[][] {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let i = 0;
  while (i < intervals.length) {
    const current = intervals[i];
    let j = i + 1;
    while (j < intervals.length && intervals[j][0] <= current[1]) {
      current[1] = Math.max(current[1], intervals[j][1]);
      j++;
    }
    result.push(current);
    i = j;
  }
  return result;
};